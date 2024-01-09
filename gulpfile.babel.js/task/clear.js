import del from "del";

// Конфигурация
import path from "../config/path.js";

//Удаление директории public
export default () => {
  return del(path.root);
};
