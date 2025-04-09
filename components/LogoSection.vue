<script setup>
const router = useRouter();

const props = defineProps({
  noIcons: {
    type: Boolean,
    default: false,
  },
  backIcon: {
    type: Boolean,
    default: false,
  },
});

const isAlertOpen = ref(false);
const alertRef = ref(null);

const isLoggedIn = ref(true);

const loginHandler = () => {
  router.push("/login");
};

const mypageHandler = () => {
  router.push("/mypage");
};

const alertHandler = () => {
  isAlertOpen.value = !isAlertOpen.value;
};

const handleClickOutside = (event) => {
  if (alertRef.value && !alertRef.value.contains(event.target)) {
    isAlertOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

const alerts = [
  { id: 1, title: "Ideas you've been eyeing", time: "9h", img: "/sample1.png" },
  { id: 2, title: "Inspired by you", time: "17h", img: "/sample2.png" },
  { id: 3, title: "This could be your vibe", time: "2d", img: "/sample3.png" },
];
</script>

<template>
  <v-container class="logo-fixed d-flex align-center justify-space-between mr-5 pt-12">
    <div style="width: 50px; text-align: left;">
      <v-btn
        v-if="props.backIcon"
        icon
        variant="text"
        size="small"
        class="ml-3"
        @click="$router.back()"
        style="min-width: 36px;"
      >
        <v-icon color="#8D64DE" size="30">mdi-chevron-left</v-icon>
      </v-btn>
    </div>

    <div class="mx-auto">
      <v-img src="/images/logo.png" style="width: 200px; height: auto" cover />
    </div>
    <div class="d-flex" style="gap: 10px" v-if="!props.noIcons">
      <template v-if="!isLoggedIn">
        <v-icon class="mr-2" color="#8D64DE" @click="loginHandler">
          mdi-login
        </v-icon>
      </template>
      <template v-else>
        <v-tooltip text="마이페이지" location="bottom">
          <template #activator="{ props }">
            <v-icon
              v-bind="props"
              class="mr-2 pb-2"
              color="#8D64DE"
              @click="mypageHandler"
              style="cursor: pointer"
              size="30"
            >
              mdi-account
            </v-icon>
          </template>
        </v-tooltip>
      </template>

      <div ref="alertRef" style="position: relative">
        <v-badge color="error" dot>
          <v-icon
            :icon="isAlertOpen ? 'mdi-bell' : 'mdi-bell-outline'"
            color="#8D64DE"
            @click.stop="alertHandler"
          />
        </v-badge>

        <v-fade-transition>
          <v-card
            v-if="isAlertOpen"
            style="
              position: absolute;
              top: 40px;
              right: 0;
              width: 300px;
              max-height: 400px;
              overflow-y: auto;
              z-index: 10;
            "
          >
            <v-list>
              <v-list-subheader>New</v-list-subheader>
              <v-list-item v-for="item in alerts" :key="item.id">
                <template #prepend>
                  <v-avatar size="36" tile>
                    <v-img
                      alt="John"
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                    />
                  </v-avatar>
                </template>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.time }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-fade-transition>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.logo-fixed {
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  height: 100px;
  background-color: white;
  z-index: 1000;
  border-bottom: 1px solid #eee;
}

</style>
