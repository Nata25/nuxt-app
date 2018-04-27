<template>
  <section>

      <v-parallax
        src="https://www.hdwallpapers.in/walls/glow_rays_abstract-HD.jpg"
      >
        <h2 class="text-md-center display-4 blue--text text--lighten-5">Abstract blog</h2>
      </v-parallax>

      <h3 class="display-2 mt-5 mb-4 text-md-center indigo--text text--darken-4">
        Most Recent Posts
      </h3>

      <PostList
        :posts="posts"
        :isAdmin="isAdmin"
      />

  </section>
</template>

<script>

  import PostList from '~/components/PostList';

export default {
  components: {
    PostList,
  },
  computed: {
    posts() {
      return this.$store.getters.loadedPosts;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  }
}
</script>

<style>

</style>
