const { getInitials,createSlug,average } = require("./main.js");

/* 🏆 Snack 1 */
/* Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo." */

test("restituire le iniziali di un nome completo con un punto", () => {
  console.log(getInitials("Mario Rossi"));
  expect(getInitials("Mario Rossi")).toBe("M.R.");
  expect(getInitials("Luigi Verdi")).toBe("L.V.");
});

/* 🏆 Snack 2 */
/* Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug restituisce una stringa in lowercase." */

test("test per verifica una stringa in lowercase", () => {
  expect(createSlug("Ciao")).toBe("ciao");
});


/* 🏆 Snack 3 */
/* Creare un test che verifichi la seguente descrizione:
👉 "La funzione average calcola la media aritmetica di un array di numeri." */

test("calcolare la media di un array di numeri",() =>{
    expect(average([15,5])).toBe(10)
})
.