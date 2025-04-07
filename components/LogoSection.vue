<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const router = useRouter();

const props = defineProps({
  noIcons: {
    type: Boolean,
    default: false,
  },
});

const isAlertOpen = ref(false);
const alertRef = ref(null); // 알림창 영역 ref

const loginHandler = () => {
  router.push("/login");
  console.log("click login icon");
};

const alertHandler = () => {
  isAlertOpen.value = !isAlertOpen.value;
  console.log("click alert icon");
};

// 바깥 클릭 시 알림창 닫기
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

// 예시 알림 목록
const alerts = [
  { id: 1, title: "Ideas you've been eyeing", time: "9h", img: "/sample1.png" },
  { id: 2, title: "Inspired by you", time: "17h", img: "/sample2.png" },
  { id: 3, title: "This could be your vibe", time: "2d", img: "/sample3.png" },
];
</script>

<template>
  <v-container
    class="d-flex align-center justify-space-between"
    style="height: 80px; position: relative"
  >
    <div class="mx-auto">
      <v-img src="/images/logo.png" style="width: 200px; height: auto" cover />
    </div>

    <div class="d-flex" style="gap: 10px" v-if="!props.noIcons">
      <v-icon class="mr-2" color="#8D64DE" @click="loginHandler"
        >mdi-login</v-icon
      >

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
                    ></v-img>
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
