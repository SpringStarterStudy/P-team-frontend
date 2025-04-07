<template>
  <v-container class="py-4 position-relative" ref="containerRef">
    <LogoSection />
    <Searchbar :noTags="true" />

    <v-row class="d-flex align-center justify-space-between mt-4">
      <v-tabs
        v-model="tab"
        class="custom-tabs fast-transition"
        grow
        density="compact"
        style="max-width: 200px"
      >
        <v-tab value="추천글">추천글</v-tab>
        <v-tab value="전체글">전체글</v-tab>
      </v-tabs>

      <div class="d-flex align-center position-relative">
        <v-select
          v-model="sort"
          :items="sortOptions"
          variant="outlined"
          density="compact"
          hide-details
          class="fast-transition custom-select"
          style="max-width: 100px; min-width: 100px"
        />

        <v-btn
          ref="filterButtonRef"
          :variant="isFilterOpen ? 'flat' : 'outlined'"
          color="#8D64DE"
          class="ml-1 filter-btn fast-transition"
          style="min-width: 40px; height: 40px"
          @click="toggleFilter"
        >
          <v-icon>mdi-filter-variant</v-icon>
        </v-btn>

        <v-card
          v-if="isFilterOpen"
          class="filter-card-under-button py-5"
          ref="filterCardRef"
        >
          <v-row class="flex-wrap" dense>
            <v-col
              v-for="category in categories"
              :key="category"
              cols="4"
              class="d-flex justify-center mb-2"
            >
              <v-btn
                variant="outlined"
                size="small"
                rounded="lg"
                class="text-no-wrap"
                style="font-size: 12px"
              >
                {{ category }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-row>

    <v-row class="mt-4 justify-center" dense>
      <v-col cols="12" md="8" v-for="(post, index) in posts" :key="post.id">
        <v-card
          class="pa-3 d-flex align-center card-layout"
          flat
          :class="['border-bottom-light', { 'border-top-light': index === 0 }]"
        >
          <div class="flex-grow-1">
            <div class="text-subtitle-1 font-weight-bold mb-1">
              {{ post.title }}
            </div>
            <div class="text-caption text-grey mb-2">
              <span v-for="(tag, index) in post.tags" :key="index" class="mr-2">
                #{{ tag }}
              </span>
            </div>
            <div class="d-flex align-center">
              <v-avatar size="32" class="mr-2">
                <v-img :src="post.authorProfile" />
              </v-avatar>
              <span class="text-body-2">{{ post.authorName }}</span>
            </div>
          </div>

          <v-img
            :src="post.thumbnail"
            width="80"
            height="80"
            cover
            class="rounded-lg ml-3"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const tab = ref("추천글");
const sort = ref("최신순");
const sortOptions = ["최신순", "인기순", "조회순"];

const isFilterOpen = ref(false);

const containerRef = ref(null);
const filterCardRef = ref(null);

const toggleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value;
};

const handleClickOutside = (e) => {
  if (!filterCardRef.value) return;

  if (
    isFilterOpen.value &&
    !filterCardRef.value.$el.contains(e.target) &&
    !e.target.closest(".filter-btn")
  ) {
    isFilterOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

// 임시 데이터
const posts = [
  {
    id: 1,
    title: "광배근 운동 어깨 처짐(0)",
    tags: ["베스트", "운동일지", "상체근육"],
    authorName: "김징이",
    authorProfile: "https://cdn.vuetifyjs.com/images/john.jpg",
    thumbnail: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
  },
];

const categories = [
  "#등운동",
  "#가슴운동",
  "#하체운동",
  "#복근운동",
  "#어깨운동",
  "#유산소",
  "#요가",
  "#필라테스",
  "#스트레칭",
  "#기초운동",
  "#홈트레이닝",
  "#크로스핏",
  "#웨이트",
  "#헬스장",
  "#단거리러닝",
  "#장거리러닝",
];
</script>

<style scoped>
.custom-tabs .v-tab {
  min-width: unset;
  padding: 0 8px;
}

.filter-btn {
  border: none !important;
  box-shadow: none !important;
}

.fast-transition {
  transition: all 0.2s ease-in-out;
}

.fast-fade {
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.border-bottom-light {
  border-bottom: 1px solid #eee;
}

.border-top-light {
  border-top: 1px solid #eee;
}

.position-relative {
  position: relative;
}

.filter-card-under-button {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  transform: translateX(-5%);
  z-index: 10;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 350px;
}
:deep(.custom-select .v-field__input) {
  padding-left: 4px;
  padding-right: 4px;
}

:deep(.custom-select .v-select__selection-text) {
  padding-left: 10px;
  padding-right: 0px;
}
</style>
