import fuggvenyem from "./main.js";

function tesztesetek() {
  let szam = 1234;
  let vart = 4321;
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = Number.MAX_VALUE;
  vart = "hosszú szám";
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = Number.MIN_VALUE;
  vart = "hosszú negatív szám";
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = 23.4;
  vart = "hiba";
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = -10;
  vart = "-01";
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = 100;
  vart = "001";
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = -1;
  vart = -1;
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = 1;
  vart = 1;
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = 0;
  vart = 0;
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );

  szam = "001";
  vart = "100";
  console.log(
    `Megadott szám: ${szam} | Várt: ${vart} | Kapott: ${fuggvenyem(
      szam
    )} | Eredmény: ${vart == fuggvenyem(szam)}`
  );
}

export default tesztesetek;
