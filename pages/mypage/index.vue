<script setup>
const userNickname = ref("UserName");
const userIntro = ref("2025년에는 꼭 바프 찍고 싶어요 ㅎㅎ");
const userCredit = ref(2500);

// 프로필 변경 핸들러 (나중에 파일 업로드 연결 예정)
const changeProfile = () => {
  console.log("프로필 변경 클릭됨");
};
</script>
<template>
  <v-container>
    <LogoSection />

    <div class="mt-5 d-flex align-center mb-3" style="gap: 16px">
      <v-avatar size="80" style="cursor: pointer" @click="changeProfile">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="User Profile"
        />
      </v-avatar>

      <div>
        <div class="font-weight-bold text-h6">{{ userNickname }}</div>
        <div class="text-body-2 text-grey-darken-1">{{ userIntro }}</div>
      </div>
    </div>

    <v-card flat class="pa-4 mb-6" color="grey-lighten-4">
      <div class="d-flex justify-space-between align-center">
        <div class="text-subtitle-1 font-weight-medium">남은 크레딧</div>
        <div class="d-flex align-center">
          <div
            class="text-h6 font-weight-bold"
            style="color: #8d64de; margin-right: 4px"
          >
            {{ userCredit.toLocaleString() }}
          </div>
          <v-img
          class="mt-1"
            src="/images/point.png"
            alt="Point"
            width="20"
            height="20"
            style="object-fit: contain"
          />
        </div>
      </div>
    </v-card>

    <v-row>
      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block color="#8D64DE" variant="flat"
          >트레이너 등록</v-btn
        >
      </v-col>
      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >로그아웃</v-btn
        >
      </v-col>

      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >내 정보 수정</v-btn
        >
      </v-col>
      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >운동 일정 확인</v-btn
        >
      </v-col>

      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >크레딧 구매 내역</v-btn
        >
      </v-col>
      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >운동 일지</v-btn
        >
      </v-col>

      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >크레딧 충전</v-btn
        >
      </v-col>
      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >운동 신청예약/결제내역</v-btn
        >
      </v-col>

      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >회원탈퇴</v-btn
        >
      </v-col>
      <v-col cols="6" class="mb-2">
        <v-btn class="py-6" block variant="outlined" color="#8D64DE"
          >피드백</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>
