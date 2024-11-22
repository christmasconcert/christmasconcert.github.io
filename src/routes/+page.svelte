<script>
  import Footer from "$lib/Footer.svelte";
  import Logo from "$lib/Logo.svelte";
  import Nav from "$lib/Nav.svelte";
  import {CHRISTMAS_CONCERT_DATE} from '$lib/index';
  let now = new Date();
  let promoText = ""
if (CHRISTMAS_CONCERT_DATE > now){
   promoText = "Tickets on sale now!"
  } else {
    promoText = "See you next time 👋"
  }
  if (CHRISTMAS_CONCERT_DATE == now){
promoText = "Enjoy the show"
  }
</script>

<svelte:head>
    <title
      >Christmas Concert 2024 ({promoText})</title
    >
</svelte:head>
<div
  class="full-h flex container-smart flex-col justify-between items-center py-3 sm:px-20"
>
  <Nav />
  <div class=" text-true-to-you px-12 px-md-0">
    <div class=" max-w-96">
      <Logo />
    </div>
  </div>
  <Footer />
</div>

<style lang="scss">
  $gutter-x: 1.5rem;
  .container-smart {
    padding-right: calc($gutter-x * 0.5);
    padding-left: calc($gutter-x * 0.5);
  }
</style>
