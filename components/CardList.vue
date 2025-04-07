<script setup>
import { ref } from 'vue'

const snackbar = ref(false);
const text = ref('');

const explore = () => {
  alert("상세보기 클릭됨!");
};

const likeClickHandler = () => {
  text.value = '즐겨찾기에 추가되었습니다';
  snackbar.value = true;
};
</script>

<template>
  <v-card
    class="mx-auto mt-5 custom-border"
    max-width="400"
    max-height="200"
    variant="outlined"
  >
    <v-row no-gutters>
      <v-col cols="6">
        <v-img
          cover
          class="mx-2 my-3"
          height="280"
          lazy-src="https://picsum.photos/id/11/100/60"
          max-width="300"
          max-height="170"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="grey-lighten-4"
                indeterminate
              />
            </div>
          </template>
        </v-img>
      </v-col>

      <v-col
        cols="6"
        class="pt-4 pl-1 pr-1 d-flex flex-column justify-space-between"
        style="min-height: 250px"
      >
        <div>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <v-chip
              class="rounded-pill mr-2"
              size="x-small"
              color="#8D64DE"
              text-color="white"
            >#헬스</v-chip>
            <v-chip
              class="rounded-pill mr-2"
              size="x-small"
              color="#8D64DE"
              text-color="white"
            >#요가</v-chip>
            <v-chip
              class="rounded-pill mr-2"
              size="x-small"
              color="#8D64DE"
              text-color="white"
            >#PT</v-chip>
          </div>

          <h3 class="mb-2 card-title">pt 전문 트레이너입니다.</h3>
          <div class="card-sub-title">
            안녕하세요 강일동 머슬비치짐을 운영중인 대표 마샤딕입니다.
          </div>

          <div class="d-flex align-center mt-3">
            <v-avatar size="30">
              <v-img
                alt="John"
                src="https://cdn.vuetifyjs.com/images/john.jpg"
              />
            </v-avatar>
            <strong class="ml-3 card-sub-title">nick Name</strong>
          </div>

          <div class="d-flex justify-between mt-2 pr-7">
            <v-btn
              color="#8D64DE"
              size="small"
              class="w-75 pl-5 mr-2"
              @click.stop="explore"
            >
              상세보기
            </v-btn>
            <v-btn
              variant="outlined"
              size="small"
              class="w-25"
              @click.stop="likeClickHandler"
            >
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>

  <v-snackbar v-model="snackbar" multi-line :timeout="1500" >
    {{ text }}
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.custom-border {
  border: 2px solid #E4E4E7 !important;
}
.card-title {
  font-size: 13px;
}
.card-sub-title {
  font-size: 9px;
}
</style>
