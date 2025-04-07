<!-- pages/login.vue -->
<script setup>
const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <v-container
    class="fill-height d-flex flex-column justify-center align-center"
  >
    <div class="w-100 d-flex align-center">
      <v-btn icon variant="text" @click="goBack">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <LogoSection :no-icons="true" />

    <v-card class="mt-8 pa-6" width="100%" max-width="400" variant="flat">
      <v-text-field
        label="아이디"
        density="compact"
        variant="outlined"
        hide-details
        class="mb-3"
      />
      <v-text-field
        label="비밀번호"
        type="password"
        density="compact"
        variant="outlined"
        hide-details
        class="mb-6"
      />

      <v-btn color="#8D64DE" block class="mb-2 text-white" size="large"
        >로그인</v-btn
      >

      <v-btn variant="outlined" block class="mb-6 text-color" size="large"
        >회원가입</v-btn
      >

      <div class="d-flex align-center mb-6">
        <v-divider class="flex-grow-1" />
        <span class="px-3 text-grey text-caption">OR</span>
        <v-divider class="flex-grow-1" />
      </div>

      <v-btn
        color="#FEE500"
        class="mb-2 text-black"
        block
        size="large"
        prepend-icon="mdi-chat"
      >
        카카오로 로그인
      </v-btn>

      <v-btn
        color="#FFFFFF"
        class="text-black border mb-2"
        block
        size="large"
        prepend-icon="mdi-google"
      >
        구글로 로그인
      </v-btn>

      <v-btn
        color="#03C75A"
        class="text-white"
        block
        size="large"
        prepend-icon="mdi-naver"
      >
        네이버로 로그인
      </v-btn>
    </v-card>
  </v-container>
</template>

<style scoped>
.border {
  border: 1px solid #ddd;
}
.text-color {
  color: #8d64de;
}
</style>