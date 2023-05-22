/// <reference types="astro/client" />

interface TokenList {
    name: string
    version: {
        major: number
        minor: number
        patch: number
    }
    keywords: string[]
    logoURI: string
    timestamp: string
    tokens: {
        name: string
        chainId: number
        symbol: string
        decimals: number
        mintCap?: number
        address: string
        logoURI: string
    }[]
}