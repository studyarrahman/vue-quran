<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="../assets/quran.jpg" alt="" width="60"></a>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/murottal">Murottal</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    

  <router-view />

  <footer class="bg-white py-4 mt-auto">
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto"><div class="small m-0">
              <a href="https://www.instagram.com/mr_rahman_id/"><img src="../assets/instagram.png" alt="" style="width:30px;height:30px;"></a>&nbsp;&nbsp;
              <a href="https://t.me/NOVRIRAHMAN"><img src="../assets/telegram.png" alt="" style="width:30px;height:30px;"></a>&nbsp;&nbsp;
              <a href="http://wa.me/6281270859531"><img src="../assets/whatsapp.png" alt="" style="width:30px;height:30px;"></a>
            </div>
          </div>

            <div class="col-auto"><div class="small m-0">Copyright &copy; Novri Rahman 2023</div></div>
              <div class="col-auto">
                <a class="small" href="#!">Privacy</a>
                <span class="mx-1">&middot;</span>
                <a class="small" href="#!">Terms</a>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url();
  background-size: cover;
}
</style>
