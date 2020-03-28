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
    <div class="container">
      <div class="devm-title">
        <h1>Web Designer <br> Desenvolvedora</h1>
        <span>&</span>
      </div>
    </div>
    <div class="devm-skills devm-skills--designer">
      <div class="container">
        <p>Trabalho com <b>design gráfico</b> voltado para a web, criando
           peças para marketing digital e projetos completos de UI.</p>
        <span class="devm-skills-mockup devm-skills-mockup--designer"></span>
        <div class="cta">
          <a class="btn btn-primary" href="https://www.behance.net/carolinamoutella/">Conheça meu trabalho</a>
        </div>
      </div>
    </div>
    <div class="devm-cta">
      <div class="container">
        <p>Quer tirar <b>sua idéia</b> do papel?</p>
        <div class="btn btn-secondary">Entre em contato</div>
      </div>
    </div>
    <div class="devm-skills devm-skills--developer">
      <div class="container">
        <p>Sou <b>desenvolvedora front-end</b> na QConcursos. Ao longo de dois
           anos desenvolvendo para a web tive oportunidade de participar
           de <span>projetos de sites e produtos digitais.</span></p>
        <span class="devm-skills-mockup devm-skills-mockup--developer"></span>
        <div class="cta">
          <a class="btn btn-primary" href="https://github.com/cmoutella">Veja o que sei fazer</a>
        </div>
      </div>
    </div>
    <div class="devm-cta">
      <div class="container">
        <p>Quer dar vida ao <b>seu projeto</b>?</p>
        <div class="btn btn-secondary">Entre em contato</div>
      </div>
    </div>
    <div class="devm-cta devm-cta--mobile">
      <div class="container">
        <p>Quer tirar <b>sua idéia</b> do papel?</p>
        <div class="btn btn-secondary">Entre em contato</div>
      </div>
    </div>
    <div class="devm-footer">
      <div class="container">
        <div class="devm-contact">
          <p>ola@carolinamoutella.com</p>
          <div class="devm-find-me">
            <a class="devm-social" href="whatsapp"></a>
            <a class="devm-social" href="twitter"></a>
            <a class="devm-social" href="github"></a>
            <a class="devm-social" href="behance"></a>
          </div>
        </div>
        <div class="devm-logo">
          <span></span>
          <p>&copy; 2020</p>
        </div>
      </div>
    </div>
    <div class="devm-footer-complement"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style src="./index.scss" lang="scss" scoped />
