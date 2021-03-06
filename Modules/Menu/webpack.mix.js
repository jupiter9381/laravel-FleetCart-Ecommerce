let mix = require('laravel-mix');
let execSync = require('child_process').execSync;

mix.js('Modules/Menu/Resources/assets/admin/js/main.js', 'Modules/Menu/Assets/admin/js/menu.js')
    .sass('Modules/Menu/Resources/assets/admin/sass/main.scss', 'Modules/Menu/Assets/admin/css/menu.css')
    .then(() => {
        execSync('npm run rtlcss Modules/Menu/Assets/admin/css/menu.css Modules/Menu/Assets/admin/css/menu.rtl.css');
    });
