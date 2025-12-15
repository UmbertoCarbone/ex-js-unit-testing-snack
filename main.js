function getInitials(fullName) {
  return (
    fullName
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join(".") + "."
  );
}
function createSlug(str) {
  if (!str) {
    throw new Error("valore vuoto");
  }
  return str.toLowerCase().replaceAll(" ", "-");
}

function average(arr) {
  arr.forEach((numero) => {
    if (isNaN(numero) || null || undefined) {
      throw new Error("average vuole solo numeri");
    }
  });
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}
function isPalindroma(word) {
  const reversed = word.split("").reverse().join("");
  if (word !== reversed) {
    throw new Error("la parola non e palindroma");
  }
  return word;
}

function findPostById(posts, id) {
  if (isNaN(id)){
    throw new Error("non e un id");
  }
  return posts.find((p) => p.id === id);
}
module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindroma,
  findPostById,
};
