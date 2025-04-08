<template>
  <v-main class="main-scroll-area">
    <NuxtPage />
    <v-bottom-navigation class="bottom-fixed" height="64">
      <v-btn to="/" stacked>
        <v-icon>mdi-home</v-icon>
        <span class="text-caption">홈</span>
      </v-btn>
      <v-btn to="/search" stacked>
        <v-icon>mdi-map-search-outline</v-icon>
        <span class="text-caption">지도검색</span>
      </v-btn>
      <v-btn to="/chats" stacked>
        <v-icon>mdi-message-outline</v-icon>
        <span class="text-caption">채팅</span>
      </v-btn>
      <v-btn to="/likes" stacked>
        <v-icon>mdi-heart-outline</v-icon>
        <span class="text-caption">즐겨찾기</span>
      </v-btn>
      <v-btn to="/feed" stacked>
        <v-icon>mdi-account-supervisor</v-icon>
        <span class="text-caption">피드</span>
      </v-btn>
    </v-bottom-navigation>
  </v-main>
</template>

<style scoped>
.main-scroll-area {
  padding-top: 80px; 
  padding-bottom: 80px; 
  min-height: 100vh;
  background-color: #fff;
}

.bottom-fixed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 64px;
  background-color: white;
  z-index: 999;
  border-top: 1px solid #eee;
}
</style>
