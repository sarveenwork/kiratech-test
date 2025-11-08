<template>
  <container>
    <section class="space-y-8">
      <div class="grid gap-3">
        <div class="grid">
          <div class="relative w-full">
            <label for="user-search" class="sr-only">Search users</label>
            <input
              id="user-search"
              v-model.trim="searchQuery"
              type="search"
              :disabled="isLoading"
              placeholder="Search by first or last name"
              class="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
            />
            <button
              v-if="searchQuery"
              type="button"
              class="absolute inset-y-0 right-4 flex items-center text-slate-400 transition hover:text-primary focus:outline-none"
              @click="searchQuery = ''"
            >
              <span class="sr-only">Clear search</span>
              &times;
            </button>
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="flex items-center justify-center py-20">
        <svg
          class="h-8 w-8 animate-spin text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-9 12h4z"
          />
        </svg>
      </div>

      <div v-else class="space-y-4">
        <p
          v-if="!filteredUsers.length"
          class="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-12 text-center text-sm font-medium text-slate-500"
        >
          No users found. Try adjusting your search.
        </p>

        <button
          v-for="user in filteredUsers"
          :key="user.login.uuid"
          type="button"
          class="group w-full rounded-3xl bg-white p-6 text-left shadow-card transition focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 hover:-translate-y-1 hover:shadow-card-hover"
          @click="showDetails(user)"
        >
          <div
            class="grid gap-4 sm:grid-cols-[160px,_minmax(0,1fr),_120px,_minmax(0,1fr),_minmax(0,1.2fr)] sm:items-center"
          >
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                Date
              </p>
              <p class="mt-1 text-sm font-medium text-slate-600">
                {{ _dateFormat(user.registered.date) }}
              </p>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                Name
              </p>
              <p
                class="mt-1 text-base font-semibold text-slate-800 group-hover:text-primary-dark"
              >
                {{ user.name.first }} {{ user.name.last }}
              </p>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                Gender
              </p>
              <p class="mt-1 text-sm font-medium capitalize text-slate-600">
                {{ user.gender }}
              </p>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                Country
              </p>
              <p class="mt-1 text-sm font-medium capitalize text-slate-600">
                {{ user.location.country }}
              </p>
            </div>
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                Email
              </p>
              <p class="mt-1 break-all text-sm font-medium text-slate-500">
                {{ user.email }}
              </p>
            </div>
          </div>
        </button>
      </div>

      <div class="flex items-center justify-center">
        <button
          type="button"
          class="rounded-full bg-primary-dark px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
          :disabled="isLoading"
          @click="refreshList"
        >
          <span v-if="isLoading">Refreshing...</span>
          <span v-else>Refresh</span>
        </button>
      </div>
    </section>

    <view-details
      :user="activeUser"
      :open="isDetailsOpen"
      @close="isDetailsOpen = false"
    />
  </container>
</template>

<script>
import Container from "@/views/layouts/container.vue";
import ViewDetails from "@/views/pages/home/dialog/view-details.vue";
import { getUser } from "@/api/user";
import Swal from "sweetalert2";

export default {
  name: "UserList",
  components: {
    Container,
    ViewDetails,
  },
  data() {
    return {
      isLoading: false,
      users: [],
      searchQuery: "",
      activeUser: null,
      isDetailsOpen: false,
    };
  },
  created() {
    this.getAllUsers();
  },
  computed: {
    filteredUsers() {
      const query = this.searchQuery.trim().toLowerCase();
      if (!query) {
        return this.users;
      }

      return this.users.filter((user) => {
        const first = user.name.first.toLowerCase();
        const last = user.name.last.toLowerCase();
        return first.includes(query) || last.includes(query);
      });
    },
  },
  methods: {
    async getAllUsers() {
      this.isLoading = true;
      try {
        const res = await getUser();
        if (res.status === 200) {
          this.users = res.data.results || [];
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Unable to load users",
          text: "Please try refreshing the page or check your connection.",
        });
      } finally {
        this.isLoading = false;
      }
    },
    showDetails(user) {
      this.activeUser = user;
      this.isDetailsOpen = true;
    },
    refreshList() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.getAllUsers();
    },
  },
};
</script>
