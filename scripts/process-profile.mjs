import sharp from "sharp";

const source =
  process.argv[2] ||
  "C:/Users/atm-it089/.cursor/projects/c-Udhay/assets/Gemini_Generated_Image_efoyptefoyptefoy-5b471004-f81d-4dc6-a347-6be362472f33.jpg";

const meta = await sharp(source).metadata();
const w = meta.width ?? 1024;
const h = meta.height ?? 1024;

// Cover star + text using nearby blazer/wall pixels (not a flat grey box)
const coverW = Math.floor(w * 0.24);
const coverH = Math.floor(h * 0.16);
const left = w - coverW - 4;
const top = h - coverH - 4;

const donor = await sharp(source)
  .extract({
    left: Math.max(0, left - coverW),
    top: Math.max(0, top - Math.floor(coverH * 0.35)),
    width: coverW,
    height: coverH,
  })
  .blur(28)
  .modulate({ brightness: 1.02 })
  .toBuffer();

// Soft-edge mask so the patch blends
const mask = Buffer.from(`
<svg width="${coverW}" height="${coverH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="white" stop-opacity="1"/>
      <stop offset="55%" stop-color="white" stop-opacity="1"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>
`);

const maskedPatch = await sharp(donor)
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toBuffer();

await sharp(source)
  .composite([{ input: maskedPatch, left, top, blend: "over" }])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/images/profile.jpg");

console.log("Watermark covered with blended donor patch", { coverW, coverH, left, top });
