/**
 * Created by Administrator on 2017/6/9.
 */
var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    // uglify = require('gulp-uglify'),
    // htmlmin = require('gulp-htmlmin'),
    // imagemin = require('gulp-imagemin'),
    // babel = require('gulp-babel'),
    clean =require('gulp-clean'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');




gulp.task("clean", function(){
    return gulp.src('./build/*')
        .pipe(clean());
});

// // js压缩
// gulp.task('jsMin', function() {
//     gulp.src(['js/**/*.js', '!js/alert.js', '!js/alert_pp.js'])
//         .pipe(babel({
//             presets:['babel-preset-es2015']
//         }))
//         .pipe(uglify().on('error', function(e) {
//             console.log(e);
//         }))
//         .pipe(gulp.dest('./build/js'));
//     gulp.src(['app.js'])
//         .pipe(uglify().on('error', function(e) {
//             console.log(e);
//         }))
//         .pipe(gulp.dest('./build'));
//     gulp.src(['js/alert.js','js/alert_pp.js'])
//         .pipe(gulp.dest('./build/js'))
//
// });

gulp.task('csscompress', function() {
        gulp.src('css/*.css')
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(concat('index.css'))
            .pipe(cleanCSS(),function (e) {
            })
            .pipe(gulp.dest('./build/css'));
});

// gulp.task('htmlMin', function() {
//     // var options = {
//     //     removeComments: true,
//     //     collapseWhitespace: true,
//     //     collapseBooleanAttributes: false,
//     //     removeEmptyAttributes: false,
//     //     removeScriptTypeAttributes: false,
//     //     removeStyleLinkTypeAttributes: false,
//     //     minifyJS: false,
//     //     minifyCSS: true
//     // };
//     gulp.src('src/view/**/*.html')
//         // .pipe(htmlmin(options).on('error', function(e) {
//         //     console.log(e);
//         // }))
//         // .pipe(gulp.dest('./build/src/view'));
//     gulp.src('index.html')
//         // .pipe(htmlmin(options).on('error', function(e) {
//         //     console.log(e);
//         // }))
//         .pipe(gulp.dest('./build'));
// });
//
// //图片转移
// gulp.task('imageMin', function() {
//     gulp.src('img/**/*.{png,jpg,gif,ico}')
//         .pipe(gulp.dest('./build/img'));
// });
// //,
gulp.task('default', ['clean'], function(){
    gulp.start('csscompress');
});