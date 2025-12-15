const {
  getInitials,
  createSlug,
  average,
  isPalindroma,
  findPostById,
} = require("./main.js");

describe("manipolazioni di stringhe", () => {
  test("restituire le iniziali di un nome completo con un punto", () => {
    console.log(getInitials("Mario Rossi"));
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("Luigi Verdi")).toBe("L.V.");
  });
  test("verificare se la stringa e' palindroma", () => {
    expect(isPalindroma("otto")).toBe("otto");
    expect(isPalindroma("anna")).toBe("anna");
    expect(() => isPalindroma("ciao")).toThrow();
  });
});

describe("operazione su array", () => {
  test("calcolare la media di un array di numeri", () => {
    expect(average([15, 5])).toBe(10);
    expect(() => average([7, "ciao"])).toThrow();
  });
  const posts = [
    { id: 1, title: "Primo post", slug: "primo-post" },
    { id: 2, title: "Secondo post", slug: "secondo-post" },
    { id: 3, title: "Terzo post", slug: "terzo-post" },
  ];

  test("Ogni post ha le proprietà id, title e slug e l'id è numerico", () => {
    expect(findPostById(posts, 2)).toEqual({
      id: 2,
      title: "Secondo post",
      slug: "secondo-post",
    });
    expect(() => findPostById(posts, "prova")).toThrow();
  });
});

describe("generazioni di slug", () => {
  test("test per verifica una stringa in lowercase", () => {
    expect(createSlug("Ciao")).toBe("ciao");
  });
  test("la funzione sostituisce gli spazi con: -", () => {
    expect(createSlug("Questo e UN tEst")).toBe("questo-e-un-test");
  });
  test("la funzione createSlug lancia un errore se il titolo e vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow();
    expect(() => createSlug(null)).toThrow();
  });
});
/* 🏆 Snack 1 */
/* Creare un test che verifichi la seguente descrizione:
👉 "La funzione getInitials restituisce le iniziali di un nome completo." */

/* 🏆 Snack 2 */
/* Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug restituisce una stringa in lowercase." */

/* 🏆 Snack 3 */
/* Creare un test che verifichi la seguente descrizione:
👉 "La funzione average calcola la media aritmetica di un array di numeri." */

/* 🏆 Snack 4 */
/* Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug sostituisce gli spazi con -." */

/* 🏆 Snack 5
Creare un test che verifichi la seguente descrizione:
👉 "La funzione isPalindrome verifica se una stringa è un palindromo.*/

/* 🏆 Snack 6
Creare un test che verifichi la seguente descrizione:
👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido." */

/* 🏆 Snack 7 */
/* Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto
 dato l’array di post e l’id" */
