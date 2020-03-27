<template>
  <div class="devm-home">
    <div class="devm-top">
      <div class="container">
        <p class="devm-name">Carolina Moutella<span>_</span></p>
        <span class="devm-toon"></span>
        <ul class="devm-language">
          <li class="devm-language-option devm-language-option--active">
            <input type="radio" v-model="language" value="1" label="PT" id="lang_portuguese" />
            <label for="lang_portuguese">PT</label>
          </li>
          <span>/</span>
          <li class="devm-language-option">
            <input type="radio" v-model="language" value="1" label="EN" id="lang_english" />
            <label for="lang_english">EN</label>
          </li>
        </ul>
      </div>
    </div>
    <div class="devm-home-content"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style src="./index.scss" lang="scss" scoped />
