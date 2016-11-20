const gulp = require('gulp');
const babel = require('gulp-babel');

const runSequence = require('run-sequence');
const nodemon = require("gulp-nodemon");

const  clean = require("gulp-clean");


gulp.task("clean",function (argument) {
    // body...
    return gulp.src(['build-server', 'dist'], { read: false }).pipe(clean());
})

gulp.task('server-js', () =>
    gulp.src('server/**/*.js')
        .pipe(babel({
            presets: ['es2015',"stage-0", "react"],
            plugins: ["add-module-exports", "transform-runtime"],
            //plugins: ["transform-async-to-generator","transform-object-rest-spread","transform-async-to-module-method"]
        }))
        .pipe(gulp.dest('build-server'))
);
gulp.task('server-content', () =>
    gulp.src(['server/**/*.html','server/**/*.json'])
        .pipe(gulp.dest('build-server'))
);

gulp.task('node-server', function() {
    nodemon({
        script: './build-server/app.js',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
})

gulp.task("watch-server",function(argument) {
     gulp.watch("./server/**/*", ['server-js',"server-content"], function() {
        console.log("dddddddddddddddddd")
     });
})

gulp.task("start",function (argument) {
    runSequence("clean",["server-js","server-content"],["node-server","watch-server"])
})



/*

{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": ["add-module-exports", "transform-runtime", "antd"],
  "env": {
    "production": {
      
    }
  }
}



 */

