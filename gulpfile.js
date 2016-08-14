// ライブラリの読み込み
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config.js');
const del = require('del');
const env = process.env.NODE_ENV;
const typescript = require('gulp-typescript');

gulp.task('clean', () => {
  del(['./dist/**']);
});

 gulp.task('ts', function() {
     gulp.src([
            './ts/*.ts',
            '!./node_modules/**'//node_modules配下は除外する
          ])
         .pipe(typescript())
         .pipe(gulp.dest('./js/'));
 });

// TypeScriptのコンパイルとwebpackの実行
gulp.task('webpack', () => {
  gulp.src(['./ts/*.ts'])
  .pipe(plumber())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('./dist'));
});


// デフォルトタスク
gulp.task('build', () => {
    runSequence('clean','webpack');
});


// デフォルトタスク
gulp.task('default', () => {
  if (env === 'production') {
    runSequence('clean', ['webpack', 'sass'], 'cssMin');
  } else {
    runSequence('clean', ['webpack', 'sass'], 'watch', 'serve');
  }
});
