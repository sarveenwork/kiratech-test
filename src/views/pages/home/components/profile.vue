<template>
  <section
    class="relative overflow-hidden bg-primary-dark py-12 text-white sm:py-16"
  >
    <profile-container
      class="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
    >
      <div
        class="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5"
      >
        <img
          :src="details.img"
          alt="Profile picture"
          class="h-32 w-32 sm:h-40 sm:w-40"
        />
        <div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
            {{ details.name }}
          </h2>
          <p class="mt-2 text-sm font-medium text-white/80 sm:text-left">
            Last online: {{ details.lastOnline }}
          </p>
        </div>
      </div>

      <div
        class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-2"
      >
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-dark shadow-sm transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <i class="fas fa-paper-plane"></i>
          Send Message
        </button>
        <button
          type="button"
          class="inline-flex items-center gap-3 rounded-md border border-white/80 px-6 py-3 text-sm font-semibold text-white transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <i class="fas fa-user-plus"></i>
          Add Friend
        </button>
      </div>
    </profile-container>
  </section>
</template>

<script>
import ProfileContainer from "@/views/layouts/profileContainer.vue";
import avatar from "@/assets/Avatar.png";

export default {
  name: "ProfileHeader",
  components: {
    ProfileContainer,
  },
  data() {
    return {
      details: {
        img: avatar,
        name: "Sarveen Rajendran",
        lastOnline: "2 hours ago",
      },
    };
  },
};
</script>
