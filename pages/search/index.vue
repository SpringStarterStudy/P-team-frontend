<template>
  <v-container>
   <LogoSection/>
   <Searchbar/>
  </v-container>
      <div id="map" class="w-full h-100"></div>
</template>

<script setup>
onMounted(() => {
  if (typeof window.naver !== 'undefined' && window.naver.maps) {
    const map = new window.naver.maps.Map('map', {
      center: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울시청 좌표
      zoom: 15,
    });
  } else {
    console.error('네이버 지도 로딩 실패: window.naver가 없습니다.');
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
