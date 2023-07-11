import type { APIContext } from 'astro';
import { createTokenListRaw } from '../../utils';

const records = import.meta.glob('../../tokens/v0.1.0.ts')
const data = await records['../../tokens/v0.1.0.ts']() as any

export async function get(context: APIContext) {
  const tokenList = createTokenListRaw({
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