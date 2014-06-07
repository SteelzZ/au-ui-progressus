Package.describe({
  summary: "Progressus project template"
});

Package.on_use(function (api, where) {
    api.use(['au-cmsinn',], ['client', 'server']);
    api.use(['jquery', 'bootstrap-3', 'templating'], ['client']);
    api.add_files([
        'assets/images/1.jpg',
        'assets/images/2.jpg',
        'assets/images/bg_header.jpg',
        'assets/images/gt_favicon.png',
        'assets/images/logo.png',
        'assets/images/mac.jpg',
        'assets/images/loader.gif',

        'client/styles/bootstrap-theme.css',
        'client/styles/main.css',

        'client/views/templates/loading.html',
        'client/views/templates/layout.html',
        'client/views/templates/home.html',
        'client/views/templates/about.html',
        'client/views/templates/contact.html',

        'config.js',
    ], ['client', 'server']);
});

Package.on_test(function (api) {
});
