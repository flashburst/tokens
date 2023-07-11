import type { APIContext } from 'astro';
import { get as latestGet } from './full/v0.1.0.json';

export async function get(context: APIContext) {
  return latestGet(context)
}