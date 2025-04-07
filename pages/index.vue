<script setup>
const selectedSort = ref("최신순");
const sortOptions = ["최신순", "인기순", "좋아요순"];
</script>

<template>
  <v-container>
    <LogoSection class="mx-auto" />
    <Searchbar />
    <v-row>
      <v-col class="mt-5 ml-1"><h2>메인</h2></v-col>
      <v-col>
        <v-section>
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
        </v-section>
      </v-col>
    </v-row>

    <CardList />
  </v-container>
</template>
