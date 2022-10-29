module.exports = {
    chainWebpack: (config) => {
        config.plugin('html').tap((args) => {
            args[0].title = process.env.VUE_APP_TITLE;
            return args;
        });
    },
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                hotReload: true,
            },
        },
    ],
};
