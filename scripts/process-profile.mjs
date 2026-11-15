import sharp from "sharp";

const source =
  process.argv[2] ||
  "C:/Users/atm-it089/.cursor/projects/c-Udhay/assets/Gemini_Generated_Image_efoyptefoyptefoy-5b471004-f81d-4dc6-a347-6be362472f33.jpg";

const meta = await sharp(source).metadata();
const w = meta.width ?? 1024;
const h = meta.height ?? 1024;

// Keep full portrait; cover only bottom-right watermark zone with a soft patch
const coverW = Math.floor(w * 0.28);
const coverH = Math.floor(h * 0.14);
const left = w - coverW;
const top = h - coverH;

// Sample nearby wall color from above the watermark, then soft blur patch
const sample = await sharp(source)
  .extract({
    left: Math.max(0, left - 20),
    top: Math.max(0, top - coverH),
    width: coverW,
    height: coverH,
  })
  .resize(coverW, coverH, { fit: "fill" })
  .blur(18)
  .jpeg()
  .toBuffer();

await sharp(source)
  .composite([{ input: sample, left, top, blend: "over" }])
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/images/profile.jpg");

console.log("Full image kept; watermark zone covered", { w, h, coverW, coverH, left, top });
