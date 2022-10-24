<svelte:head>
	<title>AlexBlackeyed | Greek Full-Stack Developer</title>
	<link rel="stylesheet" href="output.css">
	<link rel="icon" href="/favicon.png" type="image/x-icon">
	<meta name="theme-color" content="#111822">
	<meta name="keywords" content="alexblackeyed,python,css,html,tailwindcss,django,sudoku validator,curt.it,Alex Blackeyed, Greek Frontend Developer, Greek Software Engineer, Frontend,sites made in tailwind, sites made in tailwind css,Greek Portfolio,Portfolio Website,Greek Portfolio Website">
	<meta name="description" content="AlexBlackeyed Portfolio. A Portfolio website made in Svelte using TailwindCSS">
	<meta name="description" content="Greek Full Stack Developer specializing in creating Python Applications">
	<meta name="author" content="Alex Blackeyed">
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