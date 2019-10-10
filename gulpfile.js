var gulp = require('gulp');//导入gulp模块
var loader = require('gulp-load-plugins')();//自动加载插件：可以加载以gulp-打头的插件
var browser = require('browser-sync').create();//搭建静态服务器插件

//压缩css
gulp.task('css', function (done) {

    gulp.src('./src/css/*.scss')
    .pipe(loader.sass())
    .pipe(loader.minifyCss())
<<<<<<< HEAD
	.pipe(gulp.dest('./dist/css/'))
    done();
})
//压缩html
gulp.task('html', function (done) {
    gulp.src('./src/*.html')
    .pipe(loader.minifyHtml())
   // .pipe(rename('index.min.html'))
    .pipe(gulp.dest('./dist/'));
    done();
})
//压缩图片
gulp.task('image', function (done) {
    gulp.src('./src/images/**')
    .pipe(loader.imagemin())
    .pipe(gulp.dest('./dist/images/'));
=======
	.pipe(gulp.dest('./src/css/'))
>>>>>>> zhh
    done();
})


//执行所有任务
<<<<<<< HEAD
gulp.task('minify',gulp.series(gulp.parallel('js','css','html','image'),function(done){
=======
gulp.task('minify',gulp.series(gulp.parallel( 'css'),function(done){
>>>>>>> zhh
    browser.reload()
    done();
}))
//开启静态服务器任务
gulp.task('default',gulp.series(gulp.parallel('css'),function(done){
    browser.init({
        server:"./src/",
        port:80
    })
    gulp.watch('./src/',gulp.series('minify'))
    done()
}))