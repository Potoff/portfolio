<script setup lang="ts">

</script>

<template>
  <div class="w-full max-w-xs mx-auto my-20">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="contact-form">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Nom
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name" type="text" placeholder="Jean" name="name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="mail">
          Mail
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="mail" type="text" placeholder="jean@valjean.com" name="mail">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
          Message
        </label>
        <textarea
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="message" type="" placeholder="votre message" size="40" name="message"></textarea>

      </div>
      <div class="flex items-center justify-between">
        <button
          class="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md font-medium border-rounded border bg-green-600 w-24 mx-auto"
          type="button">
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<style></style>
