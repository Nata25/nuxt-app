<template>
  <div>
    <AppButton
      color="success"
      to="/admin/new-post"
    >Create a post</AppButton>

    <h3 class="display-2 mt-5 mb-4 text-md-center indigo--text text--darken-4">
      Existing posts
    </h3>

    <PostList
      :posts="posts"
      :isAdmin="isAdmin"
    />

  </div>
</template>

<script>

  import PostList from '~/components/PostList';
  import AppButton from '~/components/UI/AppButton';

  export default {
    components: {
      PostList,
      AppButton,
    },
    computed: {
      posts() {
        return this.$store.getters.posts;
      },
      isAdmin() {
        return this.$store.getters.isAdmin;
      }
    },
  }

</script>
