<script setup>
const props = defineProps({
  noTags: Boolean,
  default: false,
});

const searchInput = ref("");
const selectedTags = ref([]);
const allTags = [
  "헬스",
  "요가",
  "서울",
  "PT",
  "여성전용",
  "자세교정",
  "프렌차이즈",
  "바디프로필",
  "바디프로필",
  "바디프로필",
  "바디프로필",
];
const chipContainer = ref(null);
const chipColors = ["#F26B6B", "#5CA8EB", "#6CCF7E", "#F3C44E"];

// 태그 클릭 (토글)
const handleTagClick = (tag) => {
  const index = selectedTags.value.indexOf(tag);
  if (index !== -1) {
    selectedTags.value.splice(index, 1);
  } else {
    selectedTags.value.push(tag);
  }
  updateSearchInput();
  searchByTags();
};

const updateSearchInput = () => {
  searchInput.value = selectedTags.value.join(", ");
};

const handleSearch = (e) => {
  console.log("최종 검색어:", searchInput.value);
};

const scrollLeft = () => {
  chipContainer.value?.scrollBy({ left: -150, behavior: "smooth" });
};

const scrollRight = () => {
  chipContainer.value?.scrollBy({ left: 150, behavior: "smooth" });
};

const clearSearch = () => {
  searchInput.value = "";
  selectedTags.value = [];
  searchByTags();
};
</script>

<template>
  <v-text-field
    v-model="searchInput"
    placeholder="트레이너 이름, 지역이름, 태그 검색"
    variant="outlined"
    hide-details
    density="compact"
    clearable
    @click:clear="clearSearch"
    @keyup.enter="handleSearch"
  />

  <div class="d-flex align-center mt-2" v-if="!props.noTags">
    <v-icon @click="scrollLeft" class="mr-2" style="cursor: pointer">
      mdi-chevron-left
    </v-icon>

    <div class="chip-scroll-wrapper" ref="chipContainer">
      <div class="d-flex flex-nowrap gap-2" >
        <v-chip
          v-for="(tag, index) in allTags"
          :key="index"
          :color="
            selectedTags.includes(tag)
              ? '#8D64DE'
              : chipColors[index % chipColors.length]
          "
          :text-color="selectedTags.includes(tag) ? 'white' : 'black'"
          class="rounded-pill mr-5"
          @click="handleTagClick(tag)"
          style="flex-shrink: 0; font-weight: 500"
        >
          #{{ tag }}
        </v-chip>
      </div>
    </div>

    <v-icon @click="scrollRight" class="ml-2" style="cursor: pointer">
      mdi-chevron-right
    </v-icon>
  </div>
</template>

<style scoped>
.chip-scroll-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  width: 100%;
}

.chip-scroll-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
