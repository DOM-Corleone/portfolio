<template>
    <article id="project1_container">
    <div class="banner_image">
      <img src="../assets/images/Picture2.png" alt="mockup av prosjekt" class="banner_images">
    </div>
      <section class="project_text">
  
      <div class="project_tables">
   <table>
    <tr>
      <th>Prosjekt</th>
      <td>Nettside for Ymeri.no</td>
    </tr>
    <tr>
    <th>Prosjektlengde</th>
    <td>3 mnd</td>
    </tr>
    <tr>
      <th>Rolle</th>
      <td>UX</td>
    </tr>
    <tr>
      <th>Lesetid</th>
      <td>3min</td>
    </tr>
    </table>
      </div>

      <section class="discovery">
      
      <div class="project_txt">
      <h1>Intervju med produkteier</h1>
      <p>Jeg startet prosjektet med å snakke med produkteier i bedriften. Han la fram hva han ønsket for løsning. Vi snakket litt om målgruppe og litt om bedriften, hvordan man utfører oppdrag og hvem konkurentene er. I møtet får jeg høre at oppdragene ofte er hos unge, men at oppdragene er hos forskjellige type folk med forskjellige bakgrunner.  Jobbene pleier å starte med befaring, for så at bedriftseier tegner opp og utfører oppdraget. </p>
      </div>

      <div class="project_txt">
        <h1>Mål</h1>
        <p>Nettsiden er for potensielle kunder av bedriften og har som hovedformål å fungere som et sentralt knutepunkt der kunder kan ta kontakt med eieren av bedriften, utforske bilder fra tidligere utførte jobber, og danne seg et inntrykk av bedriftens tjenester. Nettsiden skal rette seg mot en målgruppe hovedsakelig innen aldersgruppen 30–39 år, da denne aldersgruppen har den høyeste andelen som pusser opp sine boliger. </p>
        <!-- SWOT -->
        <img src="../assets/images/Eroll/SWOT.png" alt="#" class="text_images">
      </div>

      <div class="project_txt">
        <h1>Sitemap</h1>
        <p>Jeg gikk videre med å bygge et sitemap for nettsiden. Sitemapet ble baser på det jeg og bedriftseier hadde blitt enige om i starten av prosjektet.</p>
        <img src="../assets/images/Eroll/Skjermbilde 2024-05-21 kl. 12.56.22.png" alt="#">
      </div>

      <div class="project_txt">
        <h1>Skisser</h1>
        <p>For skisseringen valgte jeg å bruke relume, en AI dreven webapp som tegner opp lavvprototype-skisser for deg. Jeg valgte å bruke denne ettersom det kunne gi meg et layout å jobbe ut i fra, raskt, ettersom jeg hadde kort med tid.</p>
        <div class="image_container">
        <img src="../assets/images/Eroll/   .png" alt="#" class="text_image_grid1">
        <img src="../assets/images/Eroll/Skjermbilde 2024-05-14 kl. 22.25.18.png" alt="#" class="text_image_grid2">
        <img src="../assets/images/Eroll/Skjermbilde 2024-05-21 kl. 10.34.13.png" alt="#" class="text_image_grid3">
        </div>
        <p>Da jeg var ferdig med disse skissene gikk jeg videre til produkteier og viste fram. Han var fornøyd med innholdet og vi fikk snakket mer i detaljer om hvilken informasjon som skulle være hvor. Etter disse samtalene begynte jeg å designe sidene ferdige.</p>
      </div>

      <div class="project_txt">
        <h1>Nåværende løsning</h1>
        <p>Kunde hadde i hovedsak fokus på to budskap han ønsket å få fram; kunnskap og prosess. For å løse dette valgte jeg å ha en side dedikert til forskjellige jobber bedriften utfører, etterfulgt av et bildegalleri for å vise resultatet for noen av prosjektene. For å vise prosessen brukte jeg en side på å vise stegene, samt litt om hva som blir gjort på disse. </p>
        <img src="../assets/images/Picture2.png" alt="#">
      </div>

      </section>
    </section>
  </article>
</template>

<script>

export default {
    name: 'project_1',
  }
</script>

<style>

.banner_image{
  width: 100%;
  height: 50vh;
}

.banner_images {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.project_tables {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 2% 0 2% 0;

  background-color: #02594e;
}

table, th, td {
  border: #FFFF 1.5px solid;
  border-collapse: collapse;
  width: 25%;
  height: 30px;

  font-family: "DM Sans", sans-serif;
  color: #FFFF;
}

.discovery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 2% 15% 2% 15%;
}

.project_txt {
  width: 1000px;

  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;

  margin-bottom: 2%;
}

.project_txt > p {
  font-family: "DM Sans", sans-serif;
  font-size: 1.25rem;
  line-height: 2;
}

.project_txt > h1 {
  font-family: 'POIPerianthTrial-Regular', serif;
  font-size: 1.5rem;
}

img {
  height: 500px;
  width: 500px;
  object-fit: contain;
}

/* Media Querys */

@media only screen and (min-width: 290px) and (max-width: 541px) { 
  .project_txt > p {
  font-size: 1rem;
  line-height: 1.5;
}

.project_txt > h1 {
  font-size: 1.25rem;
}

img {
  height: 150px;
  width: 150px;
}

.project_txt {
  width: 300px;

  margin-bottom: 2%;
}

.discovery {
  margin: 2% 2% 2% 0%;
  width: 100%;
}
}

@media only screen and (min-width: 542px) and (max-width: 1000px) {

  .project_txt > p {
  font-size: 1rem;
  line-height: 1.5;
}

.project_txt > h1 {
  font-size: 1.25rem;
}

img {
  height: 150px;
  width: 150px;
}

.project_txt {
  width: 600px;

  margin-bottom: 2%;
}

.discovery {
  margin: 2% 2% 2% 0%;
  width: 100%;
  }

}

</style>