
let marks = [78, 85, 90, 69, 92]; // Example marks array

let highestMarks = marks.reduce(function(a, b) {
  return Math.max(a, b);
});

let studentIndex = marks.indexOf(highestMarks) + 1;
let studentText = (studentIndex === 1 ? "1st" : (studentIndex === 2 ? "2nd" : (studentIndex === 3 ? "3rd" : studentIndex + "th")));
console.log("The highest marks were scored by the " + studentText + " student with " + highestMarks + " marks.");
