import { NextRequest, NextResponse } from 'next/server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || 'sk-or-v2-default-key';

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

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'http://localhost:3008',
        'X-Title': 'PUSD Dashboard'
      },
      body: JSON.stringify({
        model: 'openai/gpt-5-nano',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error: 'AI service unavailable', details: error }, { status: 503 });
    }

    const result = await response.json();
    const analysis = result.choices?.[0]?.message?.content || 'No analysis generated';

    return NextResponse.json({ 
      analysis,
      model: 'gpt-5-nano'
    });

  } catch (error) {
    console.error('Analyze API error:', error);
    return NextResponse.json({ error: 'Failed to generate analysis' }, { status: 500 });
  }
}
