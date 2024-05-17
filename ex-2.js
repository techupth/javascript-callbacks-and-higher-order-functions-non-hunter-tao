//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let passStudent = [];
  for (let i = 0; i < array.length; i++) {
    operation(array[i], passStudent);
  }

  if (passStudent.length >= 5) {
    return "pass";
  } else {
    return "not pass";
  }
}

function checkPass(score, array) {
  if (score > 70) {
    array.push(score);
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
console.log(atLeastFive(studentScoresRoom1, checkPass));

let scoreRoom1Result = console.log(
  `นักเรียนห้องที่ 1 ${atLeastFive(studentScoresRoom1, checkPass)}`
);
let scoreRoom2Result = console.log(
  `นักเรียนห้องที่ 2 ${atLeastFive(studentScoresRoom2, checkPass)}`
);
let scoreRoom3Result = console.log(
  `นักเรียนห้องที่ 3 ${atLeastFive(studentScoresRoom3, checkPass)}`
);
