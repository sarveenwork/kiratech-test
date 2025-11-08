<template>
  <header
    class="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"
  >
    <div
      class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10"
    >
      <router-link to="/" class="flex items-center gap-3">
        <img src="@/assets/Logo.png" alt="Kiratech" class="h-12 w-auto" />
      </router-link>

      <nav class="flex items-center text-slate-500">
        <b-icon
          icon="bell"
          class="me-3 mr-4 h-5 w-5 cursor-pointer transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-hidden="true"
        />
        <b-icon
          icon="gear"
          class="me-3 mr-4 h-5 w-5 cursor-pointer transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-hidden="true"
        />
        <b-icon
          icon="box-arrow-right"
          class="me-3 h-5 w-5 cursor-pointer transition hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-hidden="true"
        />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopBar",
};
</script>
