import sharp from "sharp";

const source =
  process.argv[2] ||
  "C:/Users/atm-it089/.cursor/projects/c-Udhay/assets/Gemini_Generated_Image_efoyptefoyptefoy-5b471004-f81d-4dc6-a347-6be362472f33.jpg";

const meta = await sharp(source).metadata();
const w = meta.width ?? 1024;
const h = meta.height ?? 1024;

// Soft wall-colored veil over bottom-right (star + Genspark text)
const coverW = Math.floor(w * 0.26);
const coverH = Math.floor(h * 0.18);
const left = w - coverW;
const top = h - coverH;

const veil = Buffer.from(`
<svg width="${coverW}" height="${coverH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#cfcdd0" stop-opacity="1"/>
      <stop offset="45%" stop-color="#cfcdd0" stop-opacity="0.95"/>
      <stop offset="75%" stop-color="#cfcdd0" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#cfcdd0" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>
`);

await sharp(source)
  .composite([{ input: veil, left, top, blend: "over" }])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/images/profile.jpg");

console.log("Applied soft watermark veil", { coverW, coverH, left, top });
