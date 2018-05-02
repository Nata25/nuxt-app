<template>
  <v-form v-model="valid" ref="form">
    <AppInput
      label="Post title"
      name="title"
      required
      v-model="editedPost.title"
      :rules="[requiredRule]"
    ></AppInput>

    <AppInput
      label="Summary"
      name="summary"
      required
      v-model="editedPost.summary"
      :rules="[requiredRule]"
    ></AppInput>

    <AppInput
      controlType="textarea"
      label="Post text"
      name="content"
      v-model="editedPost.content"
      required
      :rules="[requiredRule]"
    ></AppInput>

    <AppInput
      label="Link to thumbnail"
      name="thumb"
      required
      v-model="editedPost.thumbnail"
      :rules="[requiredRule]"
    ></AppInput>

    <AppInput
      label="Image caption or note"
      name="caption"
      v-model="editedPost.caption"
    ></AppInput>

    <AppInput
      label="Reference text"
      name="refText"
      v-model="editedPost.refText"
    ></AppInput>

    <AppInput
      label="Reference link"
      name="refLink"
      v-model="editedPost.refLink"
    ></AppInput>

    <AppButton
      color="success"
      @click="onFormSubmit"
    >
      Save
    </AppButton>

    <AppButton
      color="warning"
      @click="onFormReset"
    >
      Reset
    </AppButton>

    <AppButton
      color="error"
      @click="$router.push('/admin')"
    >
      Cancel
    </AppButton>
  </v-form>
</template>

<script>
  import AppInput from '~/components/UI/AppInput';
  import AppButton from '~/components/UI/AppButton';

  export default {
    components: {
      AppInput,
      AppButton,
    },
    props: {
      post: {
        type: Object,
        required: false,
      }
    },
    data() {
      return {
        valid: false,
        requiredRule: v => !!v || 'The field is required',
        editedPost: this.post ? { ...this.post } : {
          title: '',
          summary: '',
          content: '',
          thumbnail: '',
          caption: '',
          refLink: '',
          refText: ''
        }
      }
    },
    methods: {
      onFormReset() {
        this.$refs.form.reset();
      },
      onFormSubmit() {
        if (this.$refs.form.validate()) {
          this.$emit('submit', this.editedPost);
        }
      }
    }
  }
</script>
