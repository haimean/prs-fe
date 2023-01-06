<template>
  <div class="min-h-full">
    <Disclosure
      as="nav"
      class="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div class="grid lg:grid-cols-5 lg:gap-5 md:grid-cols-1 md:gap-1">
        <AtomsLogo
          hidden-name-logo="false"
          class="mx-auto lg:mx-none items-start"
        />
        <div class="hidden lg:block">
          <ul class="list-disc">
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Terms of Use </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Bulletin Board Posting Etiquette </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> About Advertising </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="hidden lg:block">
          <ul class="list-disc">
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Company ProfileOperating </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#">Organization </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> About Links </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="hidden lg:block">
          <ul class="list-disc">
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Contact Us </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Privacy Policy </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="mx-auto lg:mx-none">
          <p class="font-bold text-[#4D4D4D] text-lg text-center lg:text-left">
            Contact with us
          </p>
          <div class="mt-5">
            <Icon class="w-9 h-9" name="logos:facebook" />
            <Icon class="w-9 h-9 mx-5" name="logos:twitter" />
            <Icon class="w-9 h-9" name="logos:linkedin-icon" />
          </div>
        </div>
        <div class="blog mx-auto lg:hidden">
          <ul class="list-disc">
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Terms of Use </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Bulletin Board Posting Etiquette </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> About Advertising </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Company ProfileOperating </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#">Organization </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> About Links </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Contact Us </nuxt-link>
            </li>
            <li class="font-bold text-[#4D4D4D] leading-9">
              <nuxt-link to="#"> Privacy Policy </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure } from "@headlessui/vue";
</script>
