import type { Config } from "tailwindcss"
import sharedconfig from "@repo/tailwind-config"

export default {
    content:[
        "./app/**/*.tsx",
        "./components/**/*.tsx"
        
    ],
    presets:[sharedconfig],

}