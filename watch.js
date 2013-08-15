#!/usr/bin/env node
var watch = require('node-watch'),
    sass = require('node-sass'),
    fs = require('fs');

watch('css/prototype.scss', function (filename) {
    sass.render({
        data: fs.readFileSync('css/prototype.scss'),
        success: function (css) {
            fs.writeFileSync('css/default.css', css);
            console.log('sass compiled');
        },
        error: function (error) {
            console.log(error);
        }
    });
});
