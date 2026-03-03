import fs from 'fs';
import path from 'path';

export async function loadDataset() {
  const dataPath = path.join(process.cwd(), 'data', 'dataset.json');
  const fileContents = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getDashboardData() {
  const data = await loadDataset();
  return data;
}
