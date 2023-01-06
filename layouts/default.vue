<template>
  <div>
    <LayoutHeader />
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <slot />
        </div>
        <!-- /End replace -->
      </div>
    </main>
    <LayoutFooter />
  </div>
</template>
