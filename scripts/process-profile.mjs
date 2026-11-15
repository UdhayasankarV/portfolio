import sharp from "sharp";

const source =
  process.argv[2] ||
  "C:/Users/atm-it089/.cursor/projects/c-Udhay/assets/Gemini_Generated_Image_efoyptefoyptefoy-5b471004-f81d-4dc6-a347-6be362472f33.jpg";

const meta = await sharp(source).metadata();
const w = meta.width ?? 1024;
const h = meta.height ?? 1024;

const coverW = Math.floor(w * 0.22);
const coverH = Math.floor(h * 0.14);
const left = w - coverW;
const top = h - coverH;

// Stronger opaque cover from nearby blazer, soft only on inner edge
const donor = await sharp(source)
  .extract({
    left: Math.max(0, left - Math.floor(coverW * 0.9)),
    top: Math.max(0, top - Math.floor(coverH * 0.5)),
    width: coverW,
    height: coverH,
  })
  .blur(32)
  .toBuffer();

const mask = Buffer.from(`
<svg width="${coverW}" height="${coverH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="white" stop-opacity="1"/>
      <stop offset="70%" stop-color="white" stop-opacity="1"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>
`);

const patch = await sharp(donor)
  .ensureAlpha()
  .composite([{ input: await sharp(mask).ensureAlpha().toBuffer(), blend: "dest-in" }])
  .png()
  .toBuffer();

// Apply twice for denser cover of the bright watermark
await sharp(source)
  .composite([
    { input: patch, left, top, blend: "over" },
    { input: patch, left, top, blend: "over" },
  ])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/images/profile.jpg");

console.log("Watermark strongly covered", { coverW, coverH, left, top });
