<template>
  <div>
    <h2>New post</h2>
    <AdminPostForm
      @submit="onSubmit"/>
  </div>
</template>

<script>
  import axios from 'axios';
  import AdminPostForm from '~/components/Admin/AdminPostForm';

  export default {
    components: {
      AdminPostForm
    },
    methods: {
      onSubmit(postData) {
        axios.post('https://nuxt-blog-8718b.firebaseio.com/posts.json', postData)
          .then(result => {
            console.log(result);
            this.$store.dispatch('addPost', { ...postData, id: result.data.name } );
            this.$router.push('/admin');
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
</script>
