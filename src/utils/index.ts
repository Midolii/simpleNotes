import navList from "./navList";
import moment from "moment";

const dateFormater = (date?: Date | number, formater?: string) => {
  let newDate = date || new Date();
  if (Object.prototype.toString.call(date).slice(-8, -1) === "Number") {
    newDate = new Date(date as Date);
  }
  if (formater) {
    try {
      return moment(newDate).format(formater);
    } catch {
      return moment(newDate).format("YYYY-MM-DD HH:mm:ss");
    }
  }
  return moment(newDate).format("YYYY-MM-DD HH:mm:ss");
};

export { dateFormater, navList };
