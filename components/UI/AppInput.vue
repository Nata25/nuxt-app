<template>

    <div>
      <v-text-field
        :label="label"
        :multi-line="controlType === 'textarea'"
        :name="name"
        :rules="rules"
        :required="required"
        :type="type"
        :value="value"
        :counter="counter"
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
      required: {
        type: Boolean,
        required: false,
        default: false
      },
      name: {
        type: String,
        required: true
      },
      value: {
        type: String
      },
      type: {
        type: String,
        required: false,
      },
      counter: {
        type: Number,
        required: false
      },
      rules: {
        type: Array,
        required: false
      }
    }
  }
</script>
