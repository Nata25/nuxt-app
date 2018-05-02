<template>
  <v-app light>

    <v-toolbar :fixed="false" app>
      <v-toolbar-side-icon @click="isClosed = !isClosed"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <ToolbarNav />
    </v-toolbar>

    <v-navigation-drawer
      :miniVariant="isClosed"
      :clipped="false"
      :fixed="false"
      :app="true"
      permanent
    >
     <Navigation />

    </v-navigation-drawer>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer dark>
      <v-container
        fluid
        grid-list-lg>
          <v-layout
            justify-end
            class="blue--text text--lighten-5"
          >
            Vue _ Nuxt _ Vuetify | 2018
          </v-layout>
      </v-container>

    </v-footer>

  </v-app>
</template>

<script>
  import axios from 'axios';
  import Navigation from '~/components/Navigation';
  import ToolbarNav from '~/components/ToolbarNav';

  export default {
    components: {
      ToolbarNav,
      Navigation
    },
    
    data() {
      return {
        isClosed: true,
      }
    }
  }
</script>

<style>

</style>
