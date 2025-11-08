<template>
  <transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 px-4 py-10 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      @click.self="close"
    >
      <div class="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-card">
        <button
          type="button"
          class="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          @click="close"
        >
          <span class="sr-only">Close details</span>
          &times;
        </button>

        <header class="mb-6">
          <h2 class="text-2xl font-bold text-slate-800">
            {{ fullName }}
          </h2>
          <p class="mt-2 text-sm text-slate-500">
            Registered on {{ formattedDate }}
          </p>
        </header>

        <dl class="space-y-4">
          <div class="flex items-start justify-between gap-3">
            <dt class="text-sm font-semibold text-slate-400">Status</dt>
            <dd class="text-sm font-medium text-slate-700">{{ status }}</dd>
          </div>
          <div class="flex items-start justify-between gap-3">
            <dt class="text-sm font-semibold text-slate-400">Gender</dt>
            <dd class="text-sm font-medium capitalize text-slate-700">{{ gender }}</dd>
          </div>
          <div class="flex items-start justify-between gap-3">
            <dt class="text-sm font-semibold text-slate-400">Country</dt>
            <dd class="text-sm font-medium text-slate-700">{{ country }}</dd>
          </div>
          <div class="flex items-start justify-between gap-3">
            <dt class="text-sm font-semibold text-slate-400">Email</dt>
            <dd class="max-w-xs break-all text-sm font-medium text-primary-dark">
              {{ email }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ViewDetails",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: null,
    },
  },
  computed: {
    fullName() {
      if (!this.user) return "User details";
      return `${this.user.name.first} ${this.user.name.last}`;
    },
    formattedDate() {
      if (!this.user) return "—";
      return this._dateFormat(this.user.registered.date);
    },
    gender() {
      return this.user ? this.user.gender : "—";
    },
    country() {
      return this.user ? this.user.location.country : "—";
    },
    email() {
      return this.user ? this.user.email : "—";
    },
    status() {
      if (!this.user) return "—";
      return this.user.dob.age > 35 ? "Inactive" : "Active";
    },
  },
  watch: {
    open(value) {
      document.body.classList.toggle("overflow-hidden", value);
      if (value) {
        window.addEventListener("keydown", this.handleEscape);
      } else {
        window.removeEventListener("keydown", this.handleEscape);
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleEscape);
    document.body.classList.remove("overflow-hidden");
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleEscape(event) {
      if (event.key === "Escape") {
        this.close();
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
