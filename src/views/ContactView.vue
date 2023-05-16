<template>
  <div class="contact mt-5">
    <div class="jumbotron bg-light" style="background: linear-gradient(to bottom right, #f5f5f5, #d5d5c1);">
      <h1 class="display-4">Contact Us</h1>
      <p class="lead">Got a question or feedback? Drop us a line.</p>
      <hr class="my-4">
      <p>We'll get back to you as soon as possible.</p>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <h2>Our Office</h2>
          <p>
            Manunggal Street<br>
            Damai Asri <br>
            Riau, Indonesia<br>
          </p>
        </div>
        <div class="col-md-6">
          <h2>Contact Form</h2>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter your name">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter your email">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="5"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="background-color: black;">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
}
</style>