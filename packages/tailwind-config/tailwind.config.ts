import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors.js"

const config:Omit<Config,"content">= {
    theme:{
        extend:{
            colors:{
                primary:{...colors.indigo,DEFAULT:colors.indigo[900]}
            },
            animation:{
                "moving-gradient":"moving-gradient 10s linear infinite",
                "blob":"blob 10s infinite",
                "border-spin":'border-spin 7s linear infinite'
                
            },
            keyframes:{
                "moving-gradient":{
                    "0%":{backgroundPosition:"0% 50%"},
                    "50%":{backgroundPosition:"100% 50%"},
                    "100%":{backgroundPosition:"0% 50%"},

                },
                "blob":{
                    "0%":{
                        transform:"translate(0px, 0px) scale(1)"
                    },
                    "33%":{
                        transform:"translate(30px, -20px) scale(1.1)"
                    },
                    "66%":{
                        transform:"translate(50px, 30px) scale(0.8)"
                    },
                    "100%":{
                        transform:"translate(0px, 0px) scale(1)"
                    }
                },
                "border-spin":{
                    "100%":{
                        transform:"rotate(-360deg)"
                    }
                }
            }
        },
        plugins:[]
    },
    
}
export default config