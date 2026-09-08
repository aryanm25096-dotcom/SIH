import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const ARTIFACT_DIR = '/Users/aryanmudgal/.gemini/antigravity-ide/brain/a38b31e8-fdc9-4bbb-aba6-929e2c224279/screenshots';
const LOCAL_DIR = '/Users/aryanmudgal/Desktop/SIH/screenshots';

fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
fs.mkdirSync(LOCAL_DIR, { recursive: true });

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  console.log('Navigating to http://localhost:8081/identify ...');
  await page.goto('http://localhost:8081/identify', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1200));

  const filename = '01_step1_language_selection_redesigned.png';
  const artifactPath = path.join(ARTIFACT_DIR, filename);
  const localPath = path.join(LOCAL_DIR, filename);

  await page.screenshot({ path: artifactPath });
  fs.copyFileSync(artifactPath, localPath);
  console.log(`Successfully captured ${filename}!`);

  await browser.close();
}

run().catch(err => {
  console.error('Error capturing screen 1:', err);
  process.exit(1);
});
