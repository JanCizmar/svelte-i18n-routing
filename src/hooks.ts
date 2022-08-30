import type { Handle } from '@sveltejs/kit';
import { availableLanguages, defaultLang } from './locales';

export const handle: Handle = async ({ event, resolve }) => {
  const match = event.url.pathname.matchAll(/\/([^/]+)/g);
  const lang = [...match]?.[0]?.[1];

  if (
    lang == undefined ||
    Object.keys(availableLanguages).indexOf(lang) == -1
  ) {
    return new Response('Redirect', {
      status: 303,
      headers: { Location: `/${defaultLang}` },
    });
  }

  return resolve(event);
};
