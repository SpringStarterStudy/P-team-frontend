<template>
  <v-container>
    <LogoSection />
    <v-row>
      <v-col class="mt-5 ml-1">
        <h2>채팅</h2>
      </v-col>
      <v-col>
        <div class="mt-5 d-flex justify-end align-center">
          <v-select
            v-model="selectedSort"
            :items="sortOptions"
            density="compact"
            variant="outlined"
            hide-details
            placeholder="정렬"
          />
        </div>
      </v-col>
    </v-row>

    <v-list class="bg-white">
      <v-list-item
        v-for="room in chatRooms"
        :key="room.id"
        link
        class="border-b pr-1 pl-0 py-5"
      >
        <template #prepend>
          <v-avatar size="50">
            <v-img
              alt="John"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            ></v-img>
          </v-avatar>
        </template>

        <v-list-item-title class="font-bold w-50">{{
          room.name
        }}</v-list-item-title>
        <v-list-item-subtitle class="text-grey w-50">{{
          room.lastMessage
        }}</v-list-item-subtitle>

        <template #append>
          <div class="flex flex-col items-end justify-center m-0 p-0">
            <!-- 시간 -->
            <div class="text-[12px] text-grey mb-1">
              {{ room.time }}
            </div>

            <!-- 새 메시지 뱃지 or 빈 공간 -->
            <div class="h-4 mt-1">
              <template v-if="room.unreadCount > 0">
                <v-badge class="pl-10" :content="room.unreadCount" color="#F4551E" inline />
              </template>
            </div>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup>
const chatRooms = [
  {
    id: 1,
    name: "친구 A",
    lastMessage: "오늘 저녁에 뭐해?",
    time: "오후 6:30",
    unreadCount: 2,
    avatar: "/avatars/friend1.jpg",
  },
  {
    id: 2,
    name: "가족방",
    lastMessage: "엄마: 밥 먹었어?",
    time: "오후 5:12",
    unreadCount: 0,
    avatar: "/avatars/family.jpg",
  },
  {
    id: 3,
    name: "회사 팀장님",
    lastMessage: "내일까지 보고서 부탁해요",
    time: "오후 4:20",
    unreadCount: 5,
    avatar: "/avatars/boss.jpg",
  },
];
</script>

<style scoped>
.text-grey {
  color: #9e9e9e;
}
.border-b {
  border-bottom: 1px solid #eee;
}
</style>
