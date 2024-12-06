import type { Config } from "tailwindcss"
import sharedconfig from "@repo/tailwind-config"
import { deflate } from "zlib"

const config= {
    content:["./src/**/*.tsx"],
    
    presets:[sharedconfig]

}

console.log(config)

export default config