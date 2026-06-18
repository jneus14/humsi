import { put } from "@vercel/blob"
import { readFile } from "node:fs/promises"
import path from "node:path"

const publicDir = path.join(process.cwd(), "public")

// Images currently referenced in the app
const images = [
  "images/team/julia.jpg",
  "images/anna-maclennan.jpg",
  "images/team/marlena.jpg",
  "images/team/elizabeth.jpg",
  "images/sara-kostanteen.jpeg",
  "images/environmental.jpg",
  "images/research.jpg",
  "images/mobility.jpg",
  "images/institution.jpg",
  "images/human-impact-project.jpg",
  "images/work-climate.jpg",
  "images/logo.png",
  "images/hero.jpg",
]

const results = {}

for (const rel of images) {
  try {
    const data = await readFile(path.join(publicDir, rel))
    const blob = await put(rel, data, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
    })
    results[`/${rel}`] = blob.url
    console.log(`Uploaded ${rel} -> ${blob.url}`)
  } catch (err) {
    console.error(`Failed ${rel}:`, err.message)
  }
}

console.log("\n--- MAPPING JSON ---")
console.log(JSON.stringify(results, null, 2))
