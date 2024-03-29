//Используем деструктуризацию
import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

//Плагины
import loadPlagins from "gulp-load-plugins";
const gp = loadPlagins();

//Обработка Pug
export default () => {
  return gulp
    .src(path.pug.src)
    .pipe(
      gp.plumber({
        errorHandler: gp.notify.onError((error) => ({
          title: "Pug",
          message: error.message,
        })),
      })
    )
    .pipe(gp.pug(app.pug))
    .pipe(gp.webpHtml())
    .pipe(gulp.dest(path.pug.dest));
};
