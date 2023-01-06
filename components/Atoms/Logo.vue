<template>
  <div class="flex items-center">
    <img
      class="h-8 w-8"
      src="@/assets/public/img/logo.png"
      alt="Your Company"
    />
    <p
      :class="[
        'ml-3 text-2xl text-[#E6873C] leading-9 font-semibold',
        hiddenNameLogo === true ? 'hidden md:block' : 'block',
      ]"
    >
      ナレコム
    </p>
  </div>
</template>
<script setup>
defineProps({
  hiddenNameLogo: {
    type: Boolean,
    default: true,
  },
});
</script>
