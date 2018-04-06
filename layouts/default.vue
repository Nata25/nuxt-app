<template>
  <v-app light>

    <v-toolbar :fixed="false" app>
      <v-toolbar-side-icon @click="isClosed = !isClosed"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn flat>Natalia Ivanova</v-btn>
    </v-toolbar>

    <v-navigation-drawer
      :miniVariant="isClosed"
      :clipped="false"
      :fixed="false"
      :app="true"
    >
      <v-list>
        <v-list-tile
          :router="true"
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

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
            Vue Nuxt Vuetify | 2018
          </v-layout>
      </v-container>

    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: '',
            to: '/',
            title: 'Home page'
          },
          {
            icon: '',
            to: '/about',
            title: 'About me'
          },
          {
            icon: '',
            to: '/posts/1',
            title: 'What is Abstract Art?'
          }
        ],
        isClosed: true,
      }
    }
  }
</script>

<style>

</style>
