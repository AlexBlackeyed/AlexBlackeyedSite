<svelte:head>
	<title>AlexBlackeyed</title>
	<link rel="stylesheet" href="output.css">
	<link rel="icon" href="/favicon.png" type="image/x-icon">
	<meta name="theme-color" content="#111822">
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
	</style>
	<script>
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark')
		} else {
		document.documentElement.classList.remove('dark')
		}
		function themeChange(){
			if (localStorage.theme === 'dark') {
				localStorage.theme = 'light';
				document.documentElement.classList.remove('dark');
			}
			else {
				localStorage.theme = 'dark';
				document.documentElement.classList.add('dark');
			}
		}
	</script>
</svelte:head>