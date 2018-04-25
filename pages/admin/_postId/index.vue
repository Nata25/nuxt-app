<template>
  <section>
    <h2>Edit post</h2>
    <AdminPostForm :post="loadedPost"/>
  </section>
</template>

<script>
  import AdminPostForm from '~/components/Admin/AdminPostForm';

  export default {
    components: {
      AdminPostForm
    },
    data() {
      return {
        loadedPost: {
          author: 'Natalia',
          title: 'Sample Post',
          content: 'Lorem ipsum, surprisingly',
          thumbnailLink: 'https://media.istockphoto.com/photos/abstract-background-picture-id537447438?k=6&m=537447438&s=612x612&w=0&h=YF98lsh0OIxChOs4XmOFmuzLxSj8sieD-CiK-V8iGfU='
        }
      }
    }
  }
</script>
