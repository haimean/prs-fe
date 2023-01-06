<template>
  <div class="min-h-full">
    <Disclosure
      as="nav"
      class="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      v-slot="{ open }"
    >
      <div class="flex h-16 items-center justify-between">
        <div class="-mr-2 flex lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex items-center">
          <AtomsLogo />
          <div class="hidden lg:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  $route.path == item.href
                    ? 'text-[#E6873C]'
                    : 'text-black  hover:text-[#E6873C]',
                  'px-3 py-2 rounded-md font-bold text-lg leading-6',
                ]"
                :aria-current="$route.path == item.href ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="ml-4 flex items-center lg:ml-6">
            <nuxt-link
              to="/login"
              class="px-3 py-2 rounded-md text-base font-bold leading-5"
            >
              ログイン
            </nuxt-link>
            <nuxt-link to="/login" class="rounded-3xl bg-[#5532FB] px-7 py-2">
              <p class="text-base font-bold leading-5 text-white">会員登録</p>
            </nuxt-link>
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton>
                  <Icon name="material-symbols:settings-outline" />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-for="item in userNavigation" :key="item.name">
                    <DisclosureButton
                      as="a"
                      :href="item.href"
                      class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-black"
                      >{{ item.name }}</DisclosureButton
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel class="lg:hidden">
        <div class="pb-3">
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >{{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "ホーム", href: "/" },
  { name: "カテゴリ一覧", href: "/category" },
  { name: "口コミ一覧", href: "/review" },
  { name: "チャンネル", href: "/channel" },
  { name: "スクール", href: "/school" },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>
