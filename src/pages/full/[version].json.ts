import type { APIContext } from 'astro';
import { createTokenList } from '../../utils';

const getV0_1_0Data = async () => {
  const records = import.meta.glob('../../tokens/v0.1.0.ts')
  const data = await records['../../tokens/v0.1.0.ts']() as any
  return data
}

const dataFunctions = {
  'v0.1.0': getV0_1_0Data
}

export const get: APIRoute = async (context) => {
  const data = await dataFunctions[context.params.version]()

  const tokenList = createTokenList({
    title: data.title,
    keywords: data.keywords,
    timestamp: data.timestamp,
    tokens: data.tokens,
    version: data.version,
    logoURI: data.logoURI,
    site: context.site
  });

  return {
    body: JSON.stringify(tokenList),
  };
}

export function getStaticPaths () {
  return [
    { params: { version: 'v0.1.0'} },
  ]
}