import sharp from "sharp";

const source =
  process.argv[2] ||
  "C:/Users/atm-it089/.cursor/projects/c-Udhay/assets/Gemini_Generated_Image_efoyptefoyptefoy-5b471004-f81d-4dc6-a347-6be362472f33.jpg";

const meta = await sharp(source).metadata();
const w = meta.width ?? 1024;
const h = meta.height ?? 1024;

// Aggressive cut of bottom-right watermark zone; keep face centered
const side = Math.floor(Math.min(w, h) * 0.68);
const left = Math.floor((w - side) * 0.32);
const top = Math.floor((h - side) * 0.06);

await sharp(source)
  .extract({ left, top, width: side, height: side })
  .resize(900, 900, { fit: "cover" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile("public/images/profile.jpg");

console.log("Cropped profile (watermark removed)", { w, h, side, left, top });
