var gulp = require('gulp');//导入gulp模块
var loader = require('gulp-load-plugins')();//自动加载插件：可以加载以gulp-打头的插件
var browser = require('browser-sync').create();//搭建静态服务器插件

//压缩css
gulp.task('css', function (done) {

    gulp.src('./src/css/**')
    .pipe(loader.sass())
    .pipe(loader.minifyCss())
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
    done();
})
//压缩js
gulp.task('js', function (done) {
    //读取文件的数据流
    gulp.src('./src/js/*.js')
        //babel:es6转es5
        .pipe(loader.babel({
            presets:['@babel/env']
        }))    
        //再压缩
        .pipe(loader.uglify())
        //给文件写入数据流
        .pipe(gulp.dest('./dist/js/'));
    //执行done表示任务完成
    done();
})


//执行所有任务
gulp.task('minify',gulp.series(gulp.parallel('js','css','html','image'),function(done){
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