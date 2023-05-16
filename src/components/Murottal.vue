<template>
  <div class="container" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWXV343gU3nF1ghxN32TKnB8mmF13xsUmGQ&usqp=CAU'); background-size: cover; background-position: center;">
    <div class="row mt-1 justify-content-center">
        <div class="col-md-8">
            <img src="../assets/kaligrafi_quran.png" alt="Kaligrafi" width="130" class="mb-3 mt-5">
            <h2 class="text-center">Search Murottal</h2>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Masukkan Nomor Surah... (contoh: al-fatihah)" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchQuery" @input="getListMurottal">
            <button class="btn btn-dark" type="button" id="search-button">Search</button>
            </div>
        </div>
    </div>
</div>

<br>
<hr>


  <div class="container mt-3 mx-auto">
    <div class="row justify-content-center">
      <div class="card m-3 shadow p-3 mb-5 bg-body rounded text-center mx-auto"
        style="width: 23rem; background-color: #f5f5f5; background-image: linear-gradient(to bottom right, #f5f5f5, #d5d5c1);" v-for="murottal in filteredMurottal">
        <div class="card-body">
          <h5 class="card-title">Surah Ke : {{ murottal.chapter_id }}</h5>
          <audio controls :src="murottal.audio_url">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      Murottal: ref([]),
      searchQuery: "",
    };
  },
  mounted() {
    this.getListMurottal();
  },
  methods: {
    getListMurottal() {
      axios
        .get(`https://api.quran.com/api/v4/chapter_recitations/1?language=id`)
        .then((response) => {
          console.log(response);
          this.Murottal = response.data.audio_files;
        })
        .catch((err) => {
          console.log("error" + err);
        });
    },
  },
  computed: {
    filteredMurottal() {
      return this.Murottal.filter((murottal) => {
        return murottal.chapter_id
          .toString()
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
};
</script>
