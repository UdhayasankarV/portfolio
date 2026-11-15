import sharp from "sharp";

const source =
  process.argv[2] ||
  "C:/Users/atm-it089/.cursor/projects/c-Udhay/assets/Gemini_Generated_Image_efoyptefoyptefoy-5b471004-f81d-4dc6-a347-6be362472f33.jpg";

const meta = await sharp(source).metadata();
const w = meta.width ?? 1024;
const h = meta.height ?? 1024;

// Small cover only over the Genspark mark (bottom-right on wall)
const coverW = Math.floor(w * 0.2);
const coverH = Math.floor(h * 0.09);
const left = w - coverW - 8;
const top = h - coverH - 6;

// Sample clean wall from upper-right background
const wall = await sharp(source)
  .extract({
    left: w - coverW - 40,
    top: 40,
    width: coverW,
    height: coverH,
  })
  .resize(coverW, coverH, { fit: "fill" })
  .blur(24)
  .toBuffer();

await sharp(source)
  .composite([{ input: wall, left, top, blend: "over" }])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/images/profile.jpg");

console.log("Watermark hidden with wall-matched patch", { coverW, coverH, left, top });
