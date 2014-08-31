Package.describe({
    name: "steelzz:au-ui-progressus",
    summary: "Progressus project template with integrated CmsInn",
    homepage: "https://github.com/SteelzZ/au-ui-progressus",
    version: "0.0.2",
    git: "https://github.com/SteelzZ/au-ui-progressus.git"
});

Package.on_use(function (api, where) {
    api.imply('steelzz:au-cmsinn@0.0.12');

    api.use(['steelzz:au-cmsinn@0.0.12'], ['client', 'server']);
    api.use(['jquery@1.0.0', 'pfafman:bootstrap-3@3.2.0', 'templating@1.0.0'], ['client']);

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

        'client/views/templates/dashboard.html',
        'client/views/templates/dashboard_layout.html',

        'config.js',
    ], ['client', 'server']);
});

Package.on_test(function (api) {
});
