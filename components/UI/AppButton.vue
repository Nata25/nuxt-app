<template>
  <v-btn
    v-bind="$attrs"
    v-on="$listeners"
    :color="color"
    :to="to"
    nuxt
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'AppButton',
    props: {
      color: {
        type: String,
        required: false,
        default: 'info'
      },
      to: {
        type: String,
        required: false
      }
    }
  }
</script>
