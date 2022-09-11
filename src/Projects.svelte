<script>
    let projects = [
        {
            title : 'AlexBlackeyedWeb',
            desc : 'A Portoflio/Blog website made in Django using Python and TailwindCSS',
            source : 'https://github.com/AlexBlackeyed/AlexBlackeyedWeb'
        },

        {
            title : 'Sudoku Validator',
            desc : 'A Python Script created to be able to validate Sudoku Solutions, given a 2D Array',
            source : 'https://github.com/AlexBlackeyed/sudoku-validator'
        },

        {
            title : 'curt.it',
            desc : 'A URL Shortener made in Django using Python and TailwindCSS',
            source : 'https://github.com/AlexBlackeyed/Curt.It'
        },
    ]
</script>
<div class="grid grid-rows-{projects.length} justify-center gap-10 break-words w-11/12 mt-10">
    {#each projects as project }
        <div class="dark:bg-features bg-[#fefefe] shadow-md shadow-slate-200 dark:shadow-features h-56 rounded-md transition-all border-b-0 border-b-startor duration-300 hover:-translate-x-4 hover:my-5 hover:-translate-y-4 hover:border-b-startor hover:border-b-4 hover:shadow-none">
            <h3 class="dark:text-featstitle text-features pt-5 pl-5 font-semibold text-xl hover:underline hover:decoration-features dark:hover:decoration-featstitle cursor-pointer">{project.title}</h3>
            <h4 class="dark:text-featsdesc text-slate-800 pt-10 px-5 font-medium text-sm">{project.desc}</h4>
            <div class="flex items-center mb-5">
                <a href="{project.source}" class="dark:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1e293b" class="mt-5 ml-5 hover:fill-slate-600 duration-300 transition-all" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>
                <a href="{project.source}" class="dark:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#A5AFBD" class="mt-5 ml-5 hover:fill-featstitle duration-300 transition-all" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                </a>
            </div>
        </div>
    {/each}
</div>