<template>
  <div class="single-post-page">
    <section class="container">
      <h1 class="display-3 teal--text text--darken-4">{{ post.title }}</h1>
      <v-card>
        <v-card-media
          :src="post.thumbnail"
          height="200px"
        >
        </v-card-media>
        <v-card-text>The above text is a piece from Wikipedia article.
          <a href="https://en.wikipedia.org/wiki/Abstract_art" target="_blank">Reference...</a>
        </v-card-text>
      </v-card>
      <p class="body-text blue-grey--text">
        {{ post.content }}
      </p>
      <!--<p class="body-text blue-grey&#45;&#45;text">-->
        <!--Abstract art, non-figurative art, non-objective art, and nonrepresentational art are loosely related terms. They are similar, but perhaps not of identical meaning.-->
      <!--</p>-->
      <!--<p class="body-text blue-grey&#45;&#45;text">-->
        <!--Abstraction indicates a departure from reality in depiction of imagery in art. This departure from accurate representation can be slight, partial, or complete. Abstraction exists along a continuum. Even art that aims for verisimilitude of the highest degree can be said to be abstract, at least theoretically, since perfect representation is likely to be exceedingly elusive. Artwork which takes liberties, altering for instance color and form in ways that are conspicuous, can be said to be partially abstract. Total abstraction bears no trace of any reference to anything recognizable. In geometric abstraction, for instance, one is unlikely to find references to naturalistic entities. Figurative art and total abstraction are almost mutually exclusive. But figurative and representational (or realistic) art often contains partial abstraction.-->
      <!--</p>-->
      <!--<p class="body-text blue-grey&#45;&#45;text">-->
        <!--Both geometric abstraction and lyrical abstraction are often totally abstract. Among the very numerous art movements that embody partial abstraction would be for instance fauvism in which color is conspicuously and deliberately altered vis-a-vis reality, and cubism, which blatantly alters the forms of the real life entities depicted.-->
      <!--</p>-->
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    asyncData(context) {
      console.log('async data fired');
      return axios.get('https://nuxt-blog-8718b.firebaseio.com/posts/' +
        context.params.id + '.json'
      )
      .then(res => {
        return {
          post: res.data
        }
      })
      .catch(e => { console.log(e); })

    //  setTimeout(() => {
    //    callback(null, {
    //      post: {
    //        title: `What is Abstract Art? (post ID: ${context.params.id})`,
    //        id: '1',
    //        content: 'Both geometric abstraction and lyrical abstraction are often totally abstract. Among the very numerous art movements that embody partial abstraction would be for instance fauvism in which color is conspicuously and deliberately altered vis-a-vis reality, and cubism, which blatantly alters the forms of the real life entities depicted.',
    //        thumbnail: 'data:image/jpeg;base64,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'
    //      }
    //    });
    //  }, 1000);
    }
  }
</script>

<style>
  .body-text {
    margin-top: 30px;
    font: 16px/30px Arial;
  }
</style>
