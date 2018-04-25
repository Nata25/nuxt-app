<template>
  <v-flex xs12 md6 lg4>
    <v-card>
      <v-card-media :src="post.thumbnailLink" height="200px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ post.title }} </h3>
          <div>Abstract art uses a visual language of shape, form, color and line to create a composition which may exist with a degree of independence from visual references in the world.</div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn
          flat
          color="orange"
          exact
          :to="postLink"
        >{{ isAdmin ? 'Edit post' : 'Details' }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        required: true,
      }
    },
    computed: {
      postLink() {
        return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`
      }
    }
  }
</script>



