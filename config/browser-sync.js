module.exports = {
    debugInfo: true,
    files: [
        'site/css/*.css',
        'site/**/*.html'
    ],
    server: {
        baseDir: 'site'
    },
    browser: [
      'google chrome',
      'safari'
    ]
};
