import tesztesetek from "./teszt.js";

function fuggvenyem(szam) {
  if (szam % 1 != 0) {
    return "hiba";
  }
  if (typeof szam === "string") {
    szam = szam.split("");
    szam = szam.reverse();
    szam = szam.join("");
    return szam;
  }
  let x = 0;
  while (szam != 0) {
    let y = szam % 10;
    x = x * 10 + y;
    szam = Number.parseInt(szam / 10);
  }
  return x;
}
export default fuggvenyem;

tesztesetek();
