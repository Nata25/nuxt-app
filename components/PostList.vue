<template>
  <v-container grid-list-lg>
    <v-layout justify-center wrap>
      <PostPreview
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        :isAdmin="isAdmin"
      />
    </v-layout>
  </v-container>
</template>

<script>
  import PostPreview from '~/components/PostPreview';

  export default {
    components: {
      PostPreview,
    },
    props: {
      posts: {
        type: Array,
        required: true
      },
      isAdmin: {
        type: Boolean,
        required: true,
      }
    }
  }


</script>
