import gulp from "gulp";
import browserSync from "browser-sync";

// Конфигурация
import path from "./config/path.js";
import app from "./config/app.js";

//Задачи
import clear from "./task/clear.js";
import pug from "./task/pug.js";
// const css = require("./task/css.js");
// const scss = require("./task/scss.js");
// //const html = require("./html/html.js");
// const js = require("./task/js.js");
// const img = require("./task/img.js");
// const font = require("./task/font.js");
// const requireDir = require("require-dir");
// const task = requireDir("./task", { recurse: true });

//Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

//Наблюдение

const watcher = () => {
  gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
  //   // watch(path.css.watch, css).on("all", browserSync.reload);
  //   watch($path.scss.watch, scss).on("all", $browserSync.reload);
  //   watch($path.js.watch, js).on("all", $browserSync.reload);
  //   watch($path.img.watch, img).on("all", $browserSync.reload);
  //   watch($path.font.watch, font).on("all", $browserSync.reload);
};

const build = gulp.series(clear, gulp.parallel(pug));

const dev = gulp.series(build, gulp.parallel(server, watcher));
//Задачи
//module.exports.html = html;
//exports.html = html;
export { pug };
// exports.watch = watcher;
// exports.clear = clear;
// exports.css = task.css;
// exports.scss = task.scss;
// exports.js = task.js;
// exports.img = task.img;
// exports.font = task.font;

//Сборка
// exports.dev = series(clear, html, parallel(server, watcher));
// exports.dev = dev;
// exports.build = build;

//console.log(process.argv);

export default app.isProd ? build : dev;
