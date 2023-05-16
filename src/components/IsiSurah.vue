<template>
  <div>
    <div v-if="$route.params.id != 1 && $route.params.id != 9">
      <div class="bg-light p-3 rounded mb-3">
        <p class="text-right mb-0" style="font-size:xx-large;">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</p>
      </div>
      <div class="bg-white p-3 rounded mb-3">
        <p>Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</p>
      </div>
    </div>

    <div class="row my-3">
      <div class="col">
        <div v-for="(ayatQuran,index) in ayat" :key="index">
          <div class="bg-light p-3 rounded mb-3">
            <p class="text-right mb-0" style="font-size:xx-large;"> {{ ayatQuran.text_uthmani }}</p>
              <div class="bg-light p-3 rounded mb-3 d-inline-block">
              <p class="text-right mb-0">|{{ ayatQuran.verse_key }}|</p>
              </div>
          </div>
          <div class="bg-white p-3 rounded mb-3">
            <p v-html="Arti[index].text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue";
import axios from "axios";

export default {
    data() {
        return {
            ayat: ref([]),
            Arti: ref([]),
            isBismillah: true
        }
    },
    mounted() {
        this.getAyat()
        this.getArti()
    },
    methods: {
        getAyat() {
        axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${this.$route.params.id}`)
            .then((response) => {
              console.log(response)
              this.ayat = response.data.verses
            })
            .catch((err) => {
              console.log('error' + err)
            })
      },
      getArti() {
        axios.get(`https://api.quran.com/api/v4/quran/translations/33?chapter_number=${this.$route.params.id}`)
            .then((response) => {
              console.log(response)
              this.Arti = response.data.translations
            })
            .catch((err) => {
              console.log('error' + err)
            })
      }
    }
}
</script>
<style scoped>
  li{
    text-align: right;
  }
  </style>