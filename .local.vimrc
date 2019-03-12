let g:ale_fixers = {
\   'javascript': ['prettier'],
\   'css': ['prettier'],
\}
let g:ale_linters_explicit = 1
let g:ale_fix_on_save = 1

nnoremap gp :silent %!prettier --stdin --stdin-filepath % --trailing-comma all --single-quote<CR>

iabbrev co console.log()<left>
