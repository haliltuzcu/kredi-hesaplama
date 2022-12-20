const gelir = Number(prompt("geliriniz"));
const gider = Number(prompt("gideriniz"));
const kirediriski =
  gelir - gider >= 5500 ? "kiredi alabirsiniz" : "kiredi alamazsiniz";
console.log(kirediriski);
