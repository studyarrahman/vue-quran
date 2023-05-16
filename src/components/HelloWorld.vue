<template>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="../assets/quran.jpg" alt="" width="60"></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/murottal">Murottal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
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
