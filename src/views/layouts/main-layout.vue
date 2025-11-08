<template>
  <div class="flex min-h-screen flex-col bg-slate-50">
    <top-bar />
    <main class="flex-1 pb-16">
      <slot />
    </main>
    <footer class="border-t border-slate-200 bg-white py-6">
      <div
        class="mx-auto w-full max-w-6xl px-6 text-center text-sm text-slate-500 sm:px-8 lg:px-10"
      >
        © {{ new Date().getFullYear() }} Kiratech. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
import TopBar from "@/components/topbar";

export default {
  name: "MainLayout",
  components: { TopBar },
};
</script>
