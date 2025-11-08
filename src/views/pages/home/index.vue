<template>
  <main-layout>
    <profile />
    <div class="mt-4 sm:mt-10">
      <list />
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "@/views/layouts/main-layout";
import List from "@/views/pages/home/components/list.vue";
import Profile from "@/views/pages/home/components/profile.vue";

export default {
  name: "HomePage",
  components: {
    MainLayout,
    Profile,
    List,
  },
};
</script>
