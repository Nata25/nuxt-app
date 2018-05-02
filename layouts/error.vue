<template>
  <v-container>
    <v-layout class="wrapper" row wrap justify-center error--text>
      Sorry, something went wrong! 😱
    </v-layout>

    <v-layout justify-center>
      <v-btn href="/">
        Go to home page &rarr;
      </v-btn>  
    </v-layout>

  </v-container>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .wrapper {
    padding-top: 100px;
    height: 30vh;
    font-size: 3em;
  }

</style>