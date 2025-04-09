<script setup>
const route = useRoute();
const id = route.params.id;

const trainer = ref({
  images: [
    "https://dummyimage.com/600x400/000/fff",
    "https://i.ytimg.com/vi/28tqRNyjZh0/maxresdefault.jpg",
    "https://dummyimage.com/640x4:3/",
  ],
  name: "사딕 하조비치",
  tags: ["다이어트", "식단관리", "PT"],
  introduction: "안녕하세요 강일동 머슬비치짐을 운영중인 대표 마샤딕입니다.",
});
</script>

<template>
  <v-container class="px-4 pt-2">
    <LogoSection :back-icon="true"/>

    <v-carousel
      hide-delimiters
      :show-arrows="false"
      height="300"
      class="my-5"
      transition="fade-transition"
    >
      <v-carousel-item v-for="(img, index) in trainer.images" :key="index">
        <v-img :src="img" cover width="600" height="480"/>
      </v-carousel-item>
    </v-carousel>

    <div class="text-h5 font-weight-bold mb-3">
      {{ trainer.name }}
    </div>

    <div class="d-flex flex-wrap mb-3" style="gap: 6px">
      <v-chip
        v-for="(tag, index) in trainer.tags"
        :key="index"
        class="rounded-pill"
        color="#8D64DE"
        size="small"
        text-color="white"
      >
        #{{ tag }}
      </v-chip>
    </div>

    <div class="text-body-2 text-grey-darken-2 mb-4">
      {{ trainer.introduction }}
    </div>

    <div class="d-flex align-center mb-4" style="gap: 8px">
      <v-icon color="#8D64DE" size="18">mdi-star</v-icon>
      <span class="text-subtitle-2 font-weight-bold" style="color: #8d64de">
        4.9
      </span>
      <span class="text-caption text-grey">리뷰 1,257개</span>
      <span class="text-caption text-grey">회원 1,010명</span>
    </div>

    <div
      class="d-flex justify-space-around my-4"
      style="border-bottom: 1px solid #ddd"
    >
      <div
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-item', { active: activeTab === tab }]"
        @click="scrollTo(tab)"
      >
        {{ tab }}
      </div>
    </div>

    <div ref="introSection" class="section mb-10">
      <h2>소개</h2>
      <p>소개글 내용...</p>
    </div>

    <div ref="reviewSection" class="section mb-10">
      <h2>후기</h2>
      <p>후기 내용...</p>
    </div>

    <div ref="inquirySection" class="section mb-10">
      <h2>문의</h2>
      <p>문의 내용...</p>
    </div>
  </v-container>
</template>
