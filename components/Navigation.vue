<template>
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
</template>

<script>
  export default {
    computed: {
      items() {
        const posts = this.$store.getters.posts;
        const postsForNav = posts.map(post => ({
          icon: 'star',
          to: `/posts/${post.id}`,
          title: post.title
        }))
        return [{
            icon: 'home',
            to: '/',
            title: 'Home page'
          },
          {
            icon: 'mouse',
            to: '/about',
            title: 'About me'
          }
          ].concat(postsForNav);
      }
    },
  }
</script>