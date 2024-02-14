<script>
  import '../app.css';
  import Footer from './Footer.svelte';
  import Header from './Header.svelte';
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <div class="flex-1">
    <slot />
  </div>
  <Footer />
</div>
