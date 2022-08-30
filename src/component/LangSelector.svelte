<script lang="ts">
  import { availableLanguages } from "../locales.js";
  import { getLanguageStore } from "@tolgee/svelte";
  import { get } from "svelte/store";

  const languageStore = getLanguageStore();
</script>

<select value={get(languageStore)} on:change={(event) => window.location.href = `/${event.target.value}`}
        class="lang-selector">
  {#each Object.entries(availableLanguages) as lang}
    <option value={lang[0]}>{lang[1]}</option>
  {/each}
</select>
