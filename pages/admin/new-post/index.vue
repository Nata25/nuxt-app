<template>
  <div>
    <h2>New post</h2>
    <v-form v-model="valid" ref="form">
      <AppInput
        label="Post title"
        name="title"
        required
        v-model="inputValue"
        :rules="[requiredRule]"
      ></AppInput>

      <p>Output:{{ inputValue }}</p>

      <AppInput
        label="Link to thumbnail"
        name="thumb"
        required

        :rules="[requiredRule]"
      ></AppInput>

      <AppInput
        controlType="textarea"
        label="Post text"
        name="thumb"
        required
        :rules="[requiredRule]"
      ></AppInput>

      <AppButton
        color="success"
        @click="onFormSubmit"
      >
        Save
      </AppButton>

      <AppButton
        color="error"
        @click="onFormReset"
      >
        Cancel
      </AppButton>
    </v-form>
  </div>
</template>

<script>
  import AppInput from '~/components/UI/AppInput';
  import AppButton from '~/components/UI/AppButton';

  export default {
    components: {
      AppInput,
      AppButton,
    },
    data() {
      return {
        valid: false,
        inputValue: '',
        requiredRule: v => !!v || 'The field is required',
      }
    },
    methods: {
      onFormReset() {
        this.$refs.form.reset();
      },
      onFormSubmit() {
        if (this.$refs.form.validate()) {
          console.log('form is valid!');
        }
      }
    }
  }
</script>
