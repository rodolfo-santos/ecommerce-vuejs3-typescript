<template>
  <v-carousel class="banner-home">
    <v-carousel-item class="banner" v-for="(item, i) in slides" :key="i">
      <v-parallax :src="item.src">
        <v-container class="content">
          <h5 class="display-1 text-upper pb-2">{{ item.content[0] }}</h5>
          <h4 class="display-2 text-upper">{{ item.content[1] }}</h4>
          <h4 class="display-2 text-upper">{{ item.content[2] }}</h4>
          <hr class="hr-base" />
          <v-btn outlined color="white" class="btn-banner" link to="/">Check Now</v-btn>
        </v-container>
      </v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
export default {
  setup() {
    const slides: { src: string; content: string[] }[] = [
      {
        src: 'https://github.com/rodolfo-santos/ecommerce-vuejs3-typescript/blob/master/src/assets/imagens/store_banner.jpg?raw=true',
        content: ['Let Go!', 'Social clothes at', 'incredible prices!']
      },
      {
        src: 'https://github.com/rodolfo-santos/ecommerce-vuejs3-typescript/blob/master/src/assets/imagens/store_banner.jpg?raw=true',
        content: ['Check the news', 'stay tuned for the', 'Latest Announcements']
      }
    ];

    return { slides };
  }
};
</script>

<style lang="scss" scoped>
@import '@/sass/custom.scss';

.banner-home {
  height: 100vh;

  @media (max-width: 600px) {
    height: 85vh !important;
  }

  .content {
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: center;
    padding-bottom: 100px;

    h4 {
      font-weight: bold;
    }
  }

  .btn-banner {
    max-width: 250px;
    @media (max-width: 600px) {
      padding: 30px !important;
      background-color: rgba($secondary, 0.8);
    }
  }

  .v-carousel__item,
  .v-parallax {
    height: 100% !important;
  }
}
</style>
