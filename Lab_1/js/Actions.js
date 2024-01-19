let lat = [
  "Consuetudo est altera natura",
  "Nota bene",
  "Nulla calamitas sola",
  "Per aspera ad astra",
];
let rus = [
  "Привычка - вторая натура",
  "Заметьте хорошо!",
  "Беда не приходит одна",
  "Через тернии к звёздам",
];
let count1 = 0;
let i = [];
function create() {
  if (count1 > lat.length) {
    alert("Фразы закончились");
    return false;
  }
  if (count1 == 0) {
    document.getElementById("table1").innerHTML =
      "<tr><th>латинский язык</th><th>русский язык</th></tr>";
  }
  let r = Math.floor(Math.random() * lat.length);
  if (i.includes(r) == false) {
    //проверка было ли это число или нет, если не было, добавляет строку в таблицу
    i.push(r);
    count1++;
    document.getElementById("table1").innerHTML +=
      "<tr class='class" +
      getNumber(count1) +
      "'><td>" +
      lat[r] +
      "</td><td>" +
      rus[r] +
      "</td></tr>";
    if (count1 == lat.length) {
      count1++;
      return false;
    }
  } else create();
}
function getNumber(a) {
  if (a % 2 == 0) {
    return 2;
  } else return 1;
}

function recolor() {
  if (document.getElementsByTagName("table")[0].className == "recolored") {
    document.getElementsByTagName("table")[0].classList.remove("recolored");
  } else document.getElementsByTagName("table")[0].classList.add("recolored");
}

let count2 = 0;
let j = [];
function create2() {
  if (count2 > lat.length) {
    alert("Фразы закончились");
    return false;
  }

  let r = Math.floor(Math.random() * lat.length);
  if (j.includes(r) == false) {
    j.push(r);
    count2++;
    document.getElementById("random").innerHTML +=
      "<p><u>n=" +
      j.length + //r - если нужны айди фразы того номера, как в массиве
      '</u> <i>"' +
      lat[r] +
      '"</i>   "' +
      rus[r] +
      '"</p>';
    if (count2 == lat.length) {
      count2++;
      return false;
    }
  } else create2();
}
