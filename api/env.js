// api/env.js — Vercel serverless function
// Set di Vercel Dashboard → Settings → Environment Variables:
//   FLASH_API_KEY, FLASH_OWNER_ID, FLASH_BASE_URL

export default function handler(req, res) {
  // Hanya GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Optional: restrict origin
  const origin = req.headers.origin || '';
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Cache-Control', 'no-store');

  return res.status(200).json({
    API_KEY:  process.env.FLASH_API_KEY  || '',
    OWNER_ID: process.env.FLASH_OWNER_ID || '',
    BASE_URL: process.env.FLASH_BASE_URL || '',
  });
}