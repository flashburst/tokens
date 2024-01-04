import type { APIContext } from 'astro';
import { get as latestGet } from './full/[version].json';

export async function get(context: APIContext) {
  context.params.version = 'v0.1.0'
  return latestGet(context)
}