<script>
import axios from 'axios'
import {ref} from 'vue'

export default{

data() {
    return {
        ListSurah: ref ([]),
        searchQuery: ''

    }
},

mounted() {
    this.getListSurah()
},

methods: {
    getListSurah(query) {
    axios.get(`https://api.quran.com/api/v4/chapters?language=id&q=${query}`)
    .then((response) => {
        console.log(response)
        this.ListSurah = response.data.chapters
    }).catch ((err) => {
        console.log(err)
    })
}

},

computed: {
    filteredListSurah() {
        return this.ListSurah.filter(surah => {
            return surah.name_simple.toLowerCase().includes(this.searchQuery.toLowerCase())
        })
    }
},

}
</script>


<template>
    <div class="container" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWXV343gU3nF1ghxN32TKnB8mmF13xsUmGQ&usqp=CAU'); background-size: cover; background-position: center;">
    <div class="row mt-1 justify-content-center">
        <div class="col-md-8">
            <img src="../assets/kaligrafi_quran.png" alt="Kaligrafi" width="130" class="mb-3 mt-5">
            <h2 class="text-center">Search Quran</h2>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Masukkan Nama Surah..." aria-label="Recipient's username" aria-describedby="button-addon2" v-model="searchQuery" @input="getListSurah">
            <button class="btn btn-dark" type="button" id="search-button">Search</button>
            </div>
        </div>
    </div>
</div>
<br>
<hr>

<div class="jumbotron text-center mt-3" >
    <div class="d-inline-flex flex-wrap justify-content-center">
        <div class="card m-4 shadow p-3 mb-5 bg-body rounded text-center"
        style="width: 15rem; background-color: #f5f5f5; background-image: linear-gradient(to bottom right, #f5f5f5, #d5d5c1);" v-for="item in filteredListSurah">
            <div class="card-body">
            <h5 class="card-title">{{ item.name_simple }} - {{ item.name_arabic }}</h5>
            <h6 class="card-text" style="opacity: 0.6; color: #000;">{{ item.translated_name.name }}</h6>
            <hr>
            <p class="card-text">Jumlah Ayat: {{ item.verses_count }}</p>
            <p class="card-text">Nomor Surah: {{ item.id }}</p>
            <router-link :to="{name: 'surah', params: {id: item.id}}"
            class="btn btn-primary"
            style="background-color: #2E3440; border-color: #2E3440; color: #FFFFFF;">Baca</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<style>
li{
    list-style: none;
}
</style>


