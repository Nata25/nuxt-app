<template>

    <div>
      <v-text-field
        :label="label"
        :multi-line="controlType === 'textarea'"
        :name="name"
        :rules="rules"
        :value="value"
        @input="$emit('input', $event)"
      >
      </v-text-field>
    </div>

</template>

<script>

  export default {
    name: 'AppInput',
    props: {
      controlType: {
        type: String,
        required: false,
      },
      label: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      value: {
        type: String
      },
      rules: {
        type: Array,
        required: false
      }
    }
  }
</script>
