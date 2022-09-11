<script>
  import Welcome from './Welcome.svelte'
  import Head from './Head.svelte'
  import Projects from './Projects.svelte'
  import Footer from './Footer.svelte'
</script>
<Head/>
<main class="bg-[#dddddd] dark:bg-mainbg relative overflow-x-hidden font-sans transition-all duration-300">
  <section class="h-screen">
    <Welcome/>
  </section>
  <section class="flex justify-center h-auto">
    <Projects/>
  </section>
  <br><br><br><br>
  <Footer/>
</main>
