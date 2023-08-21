<script setup lang="ts">
import emailjs from 'emailjs-com';
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import { watch } from 'vue';



const formRef = ref<HTMLFormElement | null>(null);


const validationSchema =
  toTypedSchema(
    zod.object({
      name: zod.string().nonempty('Merci de saisir un nom').min(2, "Merci de saisir un nom valide ! "),
      mail: zod.string().nonempty("Merci de rentrer une adresse mail").email('Veuillez entrer une adresse mail valide').email({ message: 'Veuillez entrer une adresse mail valide' }),
      message: zod.string().nonempty().min(10, 'Le message doit contenir au moins 10 caractères'),
    }));


const { resetForm, values, handleSubmit, errors } = useForm({
  validationSchema,
});

const loading = ref(false);
const successMessage = ref("");

const { value: name, errorMessage: nameError } = useField<string>('name');
const { value: mail, errorMessage: mailError } = useField<string>('mail');
const { value: message, errorMessage: messageError } = useField<string>('message');

async function submitForm(values: any) {
  if (formRef.value) {
    try {
      loading.value = true;
      await emailjs.sendForm('service_jqeq6va', 'template_fcvps3y', formRef.value, 'eL6z135ZsLYy_Oi6I');
      resetForm();
      successMessage.value = " Ton message a bien été envoyé, merci !";
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
      formRef.value.reset();
    }
  }
}

const hideSuccessMessage = () => {
  successMessage.value = "";
}

watch(successMessage, (newValue) => {
  if (newValue) {
    setTimeout(hideSuccessMessage, 5000);
  }
}
);

</script>

<template>
  <div class="w-full max-w-xs mx-auto my-20" >
    <div v-if="successMessage" class="mb-10 success-message">
      <p class="text-green-600 text-center text-xl">{{ successMessage }}</p>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="contact-form" :aria-disabled="loading" ref="formRef"
      @submit.prevent="submitForm">
      <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nom </label> <input
          v-model="name" :disabled="loading"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': nameError }" id="name" type="text" placeholder="Jean" name="name">
        <span class="text-red-500 text-xs italic" v-if="nameError">{{ nameError }}</span>
      </div>
      <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="mail"> Mail </label> <input
          v-model="mail" :disabled="loading"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': mailError }" id="mail" type="email" placeholder="jean@valjean.com" name="mail">
        <span class="text-red-500 text-xs italic" v-if="mailError">{{ mailError }}</span>
      </div>
      <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="message"> Message </label>
        <textarea :disabled="loading" :class="{ 'border-red-500': messageError }"
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="message" type="" placeholder="votre message" size="40" name="message" v-model="message"></textarea>
        <span class="text-red-500 text-xs italic" v-if="messageError">{{ messageError }}</span>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md font-medium border-rounded border bg-green-600 w-24 mx-auto"
          type="submit" v-if="!loading">
          Envoyer
        </button>
        <div role="status" v-if="loading" class="mx-auto">
          <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-100 animate-spin dark:text-gray-300 fill-green-600"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
.success-message {
  opacity: 1;
  transition: opacity 0.5s;
}

.fade-out {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
