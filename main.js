function getInitials(fullName) {
  return fullName
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join('.') + '.';
}
function createSlug(str) {
  return str.toLowerCase();
}

function average(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

module.exports = {
    getInitials,
    createSlug,
    average,
}