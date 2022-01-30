import "reflect-metadata";

import User from '$lib/User'

import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  return await resolve(event);
}
