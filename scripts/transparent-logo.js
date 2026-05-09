// Optional: raster logo background removal. Point inPath/outPath at a PNG in /public
// when you add a custom PHX Junk Removal logo file. Run: node scripts/transparent-logo.js
// (Requires: npm i -D jimp)
const path = require('path')
const { Jimp } = require('jimp')

async function main() {
  const file = process.env.LOGO_PNG || 'phx-logo.png'
  const inPath = path.resolve(__dirname, '..', 'public', file)
  const outPath = inPath

  const img = await Jimp.read(inPath)
  const { width, height } = img.bitmap

  const BG_THRESHOLD = 40
  const FEATHER_END = 90

  let removed = 0
  let feathered = 0

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2
      const r = img.bitmap.data[idx + 0]
      const g = img.bitmap.data[idx + 1]
      const b = img.bitmap.data[idx + 2]

      const max = Math.max(r, g, b)

      if (max <= BG_THRESHOLD) {
        img.bitmap.data[idx + 3] = 0
        removed++
      } else if (max < FEATHER_END) {
        const t = (max - BG_THRESHOLD) / (FEATHER_END - BG_THRESHOLD)
        img.bitmap.data[idx + 3] = Math.round(255 * t)
        feathered++
      }
    }
  }

  await img.write(outPath)
  console.log(`Done. Removed ${removed} black px, feathered ${feathered} edge px. Saved: ${outPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
