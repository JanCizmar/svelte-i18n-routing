<script lang="ts">
  import { TolgeeProvider } from "@tolgee/svelte";
  import type { TolgeeConfig } from "@tolgee/core";

  /** @type {import('./$types').PageData} */
  export let data;

  const tolgeeConfig = {
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    // remove this to enable language auto detection
    enableLanguageDetection: false,
    enableLanguageStore: false,
    staticData: {
      [data.lang]: data.langData
    },
    defaultLanguage: data.lang,
    forceLang: data.lang,
    availableLanguages: ["en", "de", "cs", "fr"],
    ui: import.meta.env.VITE_TOLGEE_API_KEY ? import("@tolgee/ui") : undefined
  } as TolgeeConfig;
</script>

<TolgeeProvider config={tolgeeConfig}>
  <div slot="loading-fallback">Loading...</div>
  <slot slot="default" />
</TolgeeProvider>
