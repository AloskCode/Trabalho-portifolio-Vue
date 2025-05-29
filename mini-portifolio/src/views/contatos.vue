<template>
<section class="bg-gray-100 py-12 px-4">
  <div class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Entre em Contato</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 mb-1">Nome</label>
        <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nome" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-1">Email</label>
        <input type="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 mb-1">Mensagem</label>
        <textarea rows="4" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mensagem"></textarea>
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Enviar</button>
    </form>
  </div>
</section>
</template>
