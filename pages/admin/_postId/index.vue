<template>
  <section>
    <h2>Edit post</h2>
    <AdminPostForm 
      :post="loadedPost"
      @submit="handleSubmit($event)"
    />
  </section>
</template>

<script>
  import axios from 'axios';
  import AdminPostForm from '~/components/Admin/AdminPostForm';

  export default {
    components: {
      AdminPostForm
    },
    asyncData(context) {
      console.log(context);
      return axios.get('https://nuxt-blog-8718b.firebaseio.com/posts/' +
        context.params.postId + '.json'
      )
      .then(res => ({
          loadedPost: res.data,
      }))
      .catch(e => { console.log(e); })
    },
    methods: {
      handleSubmit(post) {
        console.log('post', post);
        axios.put('https://nuxt-blog-8718b.firebaseio.com/posts/' +
        this.$route.params.postId + '.json', post)
        .then(res => {
          this.$store.dispatch('updatePost', { ...post, id: this.$route.params.postId });
          this.$router.push('/admin');

        })
        .catch(e => { console.log(e); });
      }
    }
  }
</script>