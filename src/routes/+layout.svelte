<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import "../app.css";
  let { children } = $props();
</script>

{@render children()}
