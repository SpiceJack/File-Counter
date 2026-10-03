import { readFile } from 'fs/promises'
import {basename} from 'path'

const filePath = process.argv[2]
console.log(filePath)

async function handleFile() {

try {

    if(!filePath) {
        console.error("Please provide a file path.");
        process.exitCode = 1
    }

    let data = await readFile(filePath, {encoding : 'utf8'})
    data = data.trim()
    const lines = data.split(/\r?\n/).length
    const characters = data.length
    const words = data.split(/\s+/).length
    console.log(`File: ${basename(filePath)}`)
    console.log(`Lines: ${lines}`)
    console.log(`Words: ${words}`)
    console.log(`Characters: ${characters}`)

}

catch (error) {
    console.error(`error: could not read file: ${filePath}`)
    process.exitCode = 1
}

}

handleFile()
