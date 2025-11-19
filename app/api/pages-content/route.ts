import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'content/pages-content/all-pages.json');

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'Content not found' }, { status: 404 });
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const content = JSON.parse(fileContents);

  return NextResponse.json(content);
}

// Enable revalidation so changes show up quickly
export const revalidate = 0;
