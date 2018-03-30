<template>
  <div class="single-post-page">
    <section class="post">
      <h1>Title of the post</h1>
      <div class="post-details">
        <p>The post id is {{ $route.params.id }}</p>
        <p>Last updated XXX</p>
        <p>Written by AUTHOR</p>
      </div>
    </section>
    <!-- <section class="post-feedback">
      Tell me what you think...
    </section> -->

    <a href="/" class="button--green">Home</a>
  </div>
</template>

<style scoped>
   h1 {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .single-post-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
