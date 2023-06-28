


const school = [
      
        [
        { name: 'John', scores: [61, 81, 90, 99, 74] },
        { name: 'Alice', scores: [62, 72, 86, 52, 92] },
        { name: 'Bob', scores: [63, 85, 80, 72, 84] },
      ], 
     
        [
        { name: 'Rick', scores: [64, 61, 77, 91, 58] },
        { name: 'Mary', scores: [65, 68, 45, 68, 82] },
        { name: 'James', scores: [66, 82, 90, 79, 85] },
      ], 
     
        [
        { name: 'Zack', scores: [66, 58, 65, 49, 52] },
        { name: 'Tris', scores: [67, 76, 57, 51, 63] },
        { name: 'Sarah', scores: [68, 55, 97, 64, 68] },
      ],   
];


function analyzeStudentGrades(school) {
  const numTests = school[0][0].scores.length;
  const testInsights = []
  let klasse_average = []
  let allStudentsAndGrades = collectAllStudentGrades(school)
  let TestGrades = getTestGrades(school)
  let totalScore = 0;
  let students = allStudentsAndGrades[1]
  let grades = allStudentsAndGrades[0];
  let highestScoresForEachTest = TestGrades[0]
  let lowestScoresForEachTest = TestGrades[1]
  let topPerformersIndex = TestGrades[2]
  let topPerformers = []
  
  topPerformersIndex.forEach(topIndex => {
    topPerformers.push(students[topIndex])
  });

grades.forEach(grade => {
  totalScore+=grade
});

let allStudentsAvg = totalScore/grades.length
let classAverages = []

school.forEach(klasse => {
  let klasseAvg = avgGradeForClass(collectStudentGradesFromClass(klasse))
  classAverages.push(klasseAvg)
});


for (let i = 0; i < numTests; i++) {
  const testScores = [];


  testInsights.push({
    testNumber: i + 1,
    topPerformers: topPerformers[i],
    highestScore: highestScoresForEachTest[i],
    lowestScore: lowestScoresForEachTest[i],
    
  });
}

return {
  averageGrade: allStudentsAvg,
  classAverage: classAverages,
  testInsights: testInsights
};
/* ------------------ */
}

function collectStudentGradesFromClass(klasse) {
  var grades = []
 
  klasse.forEach(student => {
    student.scores.forEach(grade => {
    grades.push(grade);
    });
  });

return grades
}

function avgGradeForClass(grades){
  let totalScore = 0;
  grades.forEach(grade => {
    totalScore += grade
  });
  
  return totalScore/grades.length
}
function collectAllStudentGrades(school){
  var grades = []
  var students = []
  school.forEach(klasse => {
    collectStudentGradesFromClass(klasse)
    klasse.forEach(student => {
      students.push(student.name)
      student.scores.forEach(grade => {
        grades.push(grade);
      });
    });
  });

  return [grades, students]
}

function getTestGrades(school){
  let index=0;
  let testsResults = []
  let eachTestResults = []

for (let index = 0; index < 5; index++) {
  school.forEach(klasse => {
    klasse.forEach(student => {
      testsResults.push(student.scores[index])
    });
  }); 
  eachTestResults.push(testsResults)
  testsResults = []
}
let highestScoresForEachTest = []
let topPerformers = []
let lowestScoresForEachTest = []
for (let i = 0; i < eachTestResults.length; i++) {
  const eachTest = eachTestResults [i];
  let maxP = 0;

  for (let j = 0; j < eachTest.length; j++) {
    if (eachTest[maxP] < eachTest[j]){
      maxP = j;
    }
  }
  topPerformers.push(maxP)
}

eachTestResults.forEach(eachTest => {
  highestScoresForEachTest.push(Math.max(...eachTest));
  lowestScoresForEachTest.push(Math.min(...eachTest));

});

return [highestScoresForEachTest, lowestScoresForEachTest, topPerformers]

}

let result = analyzeStudentGrades(school)
console.log(result)