<template>
  <v-app>
    <v-main>
      <NuxtPage />
    </v-main>
    <v-bottom-navigation app height="64">
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
  </v-app>
</template>