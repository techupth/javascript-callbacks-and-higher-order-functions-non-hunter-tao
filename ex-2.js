function atLeastFive(score, callback) {
  let count = [];
  for (let i = 0; i < score.length; i++) {
    callback(score[i], count);
  }

  if (count.length >= 5) {
    return "ผ่านเกณฑ์";
  } else {
    return "ไม่ผ่านเกณฑ์";
  }
}

function check (score,array) {
    if (score > 70) {
      array.push(score);
    }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

let scoreRoom1Result = atLeastFive(studentScoresRoom1, check);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, check);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, check);

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);