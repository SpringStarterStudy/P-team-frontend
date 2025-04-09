<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// 게시글
const route = useRoute()
const postId = route.params.id

const posts = [
  {
    id: 1,
    title: "광배근 운동 어깨 처짐(0)",
    tags: ["베스트", "운동일지", "상체근육"],
    authorName: "김징이",
    authorProfile: "https://cdn.vuetifyjs.com/images/john.jpg",
    thumbnail: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    content: "등 운동하는 루틴 설명입니다."
  },
]

const post = posts.find((p) => p.id === Number(postId))

// 댓글 관련
const newComment = ref('')
const comments = ref([
  { id: 1, author: '운동러버', content: '와 좋은 정보 감사합니다!' },
  { id: 2, author: '피트니스왕', content: '저도 이렇게 해볼게요.' },
])

const addComment = () => {
  if (!newComment.value.trim()) return

  comments.value.push({
    id: Date.now(),
    author: '익명',
    content: newComment.value.trim(),
  })

  newComment.value = ''
}
</script>

<template>
  <v-container>
    <LogoSection :back-icon="true"/>

    <!-- 메인 글 카드 -->
    <v-card class="pa-5 my-5" flat>
      <h2 class="text-h5 font-weight-bold mb-3">{{ post?.title }}</h2>
      <div class="mb-3">
        <span v-for="tag in post?.tags" :key="tag" class="mr-2">#{{ tag }}</span>
      </div>
      <div class="d-flex align-center mb-5">
        <v-avatar size="40" class="mr-2">
          <v-img :src="post?.authorProfile" />
        </v-avatar>
        <span>{{ post?.authorName }}</span>
      </div>
      <v-img :src="post?.thumbnail" height="200" cover class="rounded-lg mb-5" />
      <p>{{ post?.content }}</p>
    </v-card>

    <!-- 댓글 카드 -->
    <v-card class="pa-5 mb-5" flat>
      <h3 class="text-h6 font-weight-bold mb-4">댓글</h3>

      <!-- 댓글 입력창 + 버튼 한줄 -->
      <v-row class="mb-4" align="center" no-gutters>
        <v-col cols="9">
          <v-text-field
            v-model="newComment"
            placeholder="댓글을 입력하세요."
            variant="outlined"
            density="comfortable" 
            hide-details
          />
        </v-col>
        <v-col cols="3" class="pl-2">
          <v-btn color="primary" block @click="addComment">댓글 등록</v-btn>
        </v-col>
      </v-row>

      <v-divider />

      <!-- 댓글 리스트 -->
      <v-list dense>
        <v-list-item
          v-for="comment in comments"
          :key="comment.id"
          class="px-0 mb-3"
        >
          <v-card class="pa-3 w-100" flat outlined> <!-- ✨ 댓글을 카드처럼 감싸기 -->
            <div class="d-flex align-center mb-2">
              <v-avatar size="28" class="mr-2">
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
              </v-avatar>
              <span class="text-subtitle-2 font-weight-bold">{{ comment.author }}</span>
            </div>
            <div class="text-body-2">
              {{ comment.content }}
            </div>
          </v-card>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
