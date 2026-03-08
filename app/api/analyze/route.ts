import { NextRequest, NextResponse } from 'next/server';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, question, context } = body;

    const systemPrompt = `You are an educational data analyst specializing in K-12 school district performance. 
You analyze CAASPP scores, attendance data, demographics, and provide actionable insights for school leaders.
Always lead with "So What?" - translate data into practical implications.
Use cognitive science principles when recommending interventions (retrieval practice, spaced practice, scaffolding).
Be concise but actionable.`;

    const userPrompt = context 
      ? `Context: ${context}\n\nData: ${JSON.stringify(data)}\n\nQuestion: ${question}`
      : `Analyze this school district data and provide insights:\n\n${JSON.stringify(data)}\n\n${question || 'What are the key findings and recommendations?'}`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          { role: 'user', content: userPrompt }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: 'AI service unavailable', details: error }, { status: 503 });
    }

    const result = await response.json();
    const analysis = result.content[0]?.text || 'No analysis generated';

    return NextResponse.json({ 
      analysis,
      model: 'claude-sonnet-4-20250514'
    });

  } catch (error) {
    console.error('Analyze API error:', error);
    return NextResponse.json({ error: 'Failed to generate analysis' }, { status: 500 });
  }
}
