import { error } from '@sveltejs/kit';
import { availableLanguages } from '../../locales';

export const load = async ({ params }: { params: { lang: string } }) => {
  if (Object.keys(availableLanguages).indexOf(params.lang) < 0) {
    throw error(404, 'Language not found');
  }

  return {
    langData: await import(`../../i18n/${params.lang}.json`).then(
      (m) => m.default
    ),
    lang: params.lang,
  };
};
