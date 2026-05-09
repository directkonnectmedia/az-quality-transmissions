/**
 * Edge-connected matte removal: flood-fills opaque black billboard from borders
 * in and clears those pixels – interior artwork stays opaque.
 *
 * Inputs: LOGO_PNG (default az-quality-logo.png) in /public
 * Output:  LOGO_OUT (default az-quality-logo-transparent.png)
 *
 * Re-run when you replace the source matte file. Requires: npm i (sharp)
 */
const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const BG_TOTAL_MAX = 95
const CHANNEL_MAX = 40

async function main() {
  const file = process.env.LOGO_PNG || 'az-quality-logo.png'
  const inPath = path.resolve(__dirname, '..', 'public', file)

  if (!fs.existsSync(inPath)) {
    console.error('Missing:', inPath)
    process.exit(1)
  }

  const { data, info } = await sharp(inPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const width = info.width
  const height = info.height
  const bytes = Uint8Array.from(data)
  const inQueue = new Uint8Array(width * height)
  const queue = []

  function idxAt(x, y) {
    return y * width + x
  }

  function pixOffset(x, y) {
    return idxAt(x, y) * 4
  }

  function isMatteSeed(r, g, b) {
    return r <= CHANNEL_MAX && g <= CHANNEL_MAX && b <= CHANNEL_MAX && r + g + b <= BG_TOTAL_MAX
  }

  function pushIfMatte(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) return
    const i = idxAt(x, y)
    if (inQueue[i]) return
    const o = pixOffset(x, y)
    const r = bytes[o],
      g = bytes[o + 1],
      b = bytes[o + 2]
    if (!isMatteSeed(r, g, b)) return
    inQueue[i] = 1
    queue.push(i)
  }

  const edgeYs = [0, height - 1]
  for (const y of edgeYs) {
    for (let x = 0; x < width; x++) pushIfMatte(x, y)
  }
  const edgeXs = [0, width - 1]
  for (const x of edgeXs) {
    for (let y = 0; y < height; y++) pushIfMatte(x, y)
  }

  let qi = 0
  while (qi < queue.length) {
    const i = queue[qi++]
    const x = i % width
    const y = (i / width) | 0
    pushIfMatte(x + 1, y)
    pushIfMatte(x - 1, y)
    pushIfMatte(x, y + 1)
    pushIfMatte(x, y - 1)
  }

  let cleared = 0
  for (let i = 0; i < inQueue.length; i++) {
    if (!inQueue[i]) continue
    const o = i * 4
    bytes[o + 3] = 0
    cleared++
  }

  const pngBuf = await sharp(Buffer.from(bytes), {
    raw: { width, height, channels: 4 },
  })
    .png()
    .toBuffer()

  const outName = process.env.LOGO_OUT || 'az-quality-logo-transparent.png'
  const outPath = path.resolve(__dirname, '..', 'public', outName)

  fs.writeFileSync(outPath, pngBuf)

  console.log(`Edge matte cleared ${cleared}px → ${outPath}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

