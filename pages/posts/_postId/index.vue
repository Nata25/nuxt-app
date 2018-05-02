<template>
  <div class="single-post-page">
    <section class="container">
      <h1 class="display-3 mb-3 teal--text text--darken-4">{{ post.title }}</h1>
      <v-card>
        <v-card-media
          :src="post.thumbnail"
          height="200px"
        >
        </v-card-media>
        <v-card-text>{{ post.caption }}
          <a :href="post.refLink" target="_blank">{{ post.refText }}</a>
        </v-card-text>
      </v-card>
      <p class="body-text blue-grey--text">
        {{ post.content }}
      </p>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    asyncData(context) {
      return axios.get('https://nuxt-blog-8718b.firebaseio.com/posts/' +
        context.params.postId + '.json'
      )
      .then(res => ({
          post: res.data
      }))
      .catch(e => { console.log(e); })
    }
  }
</script>

<style>
  .body-text {
    margin-top: 30px;
    font: 16px/30px Arial;
    white-space: pre-wrap;
  }
</style>
