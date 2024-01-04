export const isValidURL = (a: string) => {
    try {
        new URL(a);
        return true;
    } catch (error) { }
    return false;
};

export function createTokenList({
    title, version, keywords, logoURI, timestamp, tokens, site
}: {
    title: TokenList['name']
    version: TokenList['version']
    keywords: TokenList['keywords']
    logoURI: TokenList['logoURI']
    timestamp: TokenList['timestamp']
    tokens: TokenList['tokens'],
    site?: URL
}): TokenList {
    return {
        name: title,
        version: version,
        keywords: keywords,
        logoURI: isValidURL(logoURI) ? logoURI : new URL(logoURI, site).toString(),
        timestamp: timestamp,
        tokens: tokens.map(token => {
            const logoURI = isValidURL(token.logoURI) ? token.logoURI : new URL(token.logoURI, site).toString()
            return {
                ...token,
                logoURI: logoURI.replace('/?.svg', '/favicon.svg')
            }
        }),
    }
}

export function createTokenListRaw({
    title, version, keywords, logoURI, timestamp, tokens, site
}: {
    title: TokenList['name']
    version: TokenList['version']
    keywords: TokenList['keywords']
    logoURI: TokenList['logoURI']
    timestamp: TokenList['timestamp']
    tokens: TokenList['tokens'],
    site?: URL
}): TokenList {
    return {
        name: title,
        version: version,
        keywords: keywords,
        logoURI: isValidURL(logoURI) ? logoURI : new URL(logoURI, site).toString(),
        timestamp: timestamp,
        tokens: tokens.map(token => {
            const logoURI = isValidURL(token.logoURI) ? token.logoURI : new URL(token.logoURI, site).toString()

            return {
                name: token['name'],
                chainId: token['chainId'],
                symbol: token['symbol'],
                decimals: token['decimals'],
                address: token['address'],
                logoURI: token['logoURI'],
                logoURI: logoURI.replace('/?.svg', '/favicon.svg')
            }
        }),
    }
}
