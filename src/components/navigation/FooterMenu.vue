<template>
    <footer class="footer_cv">
      <div class="information_cv">
        <Button></Button>
        <div class="icons">
          <div class="anchors_container">
            <a href="https://www.linkedin.com/in/benjamin-ulvevadet-a41bb8275/" target="_blank" class="anchor">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
            <a class="anchor">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
          </div>
            <p class="paragraphs_footer">48474610</p>
            <p class="paragraphs_footer">Benjamin_ulvevadet@hotmail.com</p>
        </div>
      </div>
    </footer>
</template>

<script>
import Button from '../buttons/Button.vue'

export default {
    name: 'footer-menu',
    components: {
      Button
      }
  }
  
</script>

<style>

.footer_cv {
  height: 20vh;
  background-color: #d9d9d9;

  border-top: 5px dashed rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;

  overflow: none;
}

.information_cv {

  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;

  width: 70%;
}

.anchor{
    margin: 0.75vh;
    color: white;
    font-size: 24px;
}

.paragraphs_footer{
  margin: 0;
}

p {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
}

/** */

@media only screen and (min-width: 290px) and (max-width: 540px) { 
    .footer_cv{
      display: none;
    }
  }

</style>