import { readFileSync, unlinkSync, writeFileSync } from 'fs'
import { parse } from 'node-html-parser'
import * as colors from 'colors/safe'

const fixScriptTag = function (): string | null {
    const distDirectoryPath = './dist/'
    const indexFileName = 'index.html'
    const filePath = distDirectoryPath + indexFileName

    const html = readFileSync(filePath)
    const root = parse(html.toString())

    const head = root.querySelector('head')
    if (!head) {
        return 'did not find head'
    }

    const moduleElement = head.querySelector('script.fix-script-tag:not([nomodule])')
    if (!moduleElement) {
        return 'did not find moduleElement'
    }
    unlinkSync(distDirectoryPath + moduleElement.attributes.src)
    moduleElement.remove()

    const nomoduleElement = root.querySelector('script.fix-script-tag[nomodule]')
    if (!nomoduleElement) {
        return 'did not find nomoduleElement'
    }
    nomoduleElement.remove()

    const src = nomoduleElement.getAttribute('src')
    if (!src) {
        return 'did not find src attribute'
    }

    const classicElement = parse(`<script src="${src}" defer></script>`)
    head.appendChild(classicElement)

    writeFileSync(filePath, root.toString())

    return null
}

const error = fixScriptTag()
if (error) {
    console.log()
    console.log(colors.red(colors.bold(`fix script tag: ${error}`)))
    process.exit(1)
}