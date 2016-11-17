

const gulp = require('gulp');
const babel = require('gulp-babel');

const nodemon = require("gulp-nodemon");

gulp.task('default', () =>
    gulp.src('app/app.js')
        .pipe(babel({
            presets: ['es2015'],
            plugins: ["transform-async-to-generator","transform-object-rest-spread","transform-async-to-module-method"]
        }))
        .pipe(gulp.dest('build-server'))
);


gulp.task('start', function() {
    nodemon({
        script: './build-server/app.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
})