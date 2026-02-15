//Task Four 

var studentsArr = []

while (true) {

    let student = {
        name: "",
        age: 0,
        grades: [],
        AverageG :0,
    }

    alert("Welcome to the Student Managment System")
    alert("Let's Collect the data")
    let Sname = prompt("Please Enter the Student's Name : ")
    let Sage = prompt("Please Enter the Student's Age : ")

    student.name = Sname
    student.age = Sage

    let i = 1, MinGcheck = 0;
    while (true) {
        let grade = prompt(`Please Enter the grade of subject No.${i++} :`)

        if (grade == "stop") {
            // Bonus2
            if (MinGcheck >= 3) {
                break;
            } else {
                console.log("Try To Enter more grades , please")
            }
        }
        else {

            if (!isNaN(grade) && grade >= 0 && grade <= 100) {
                student.grades.push(grade);
                MinGcheck++;
            }
            else {
                //Bonus1
                console.log("Something Went wrong !!")
                console.log("Try to Enter the grade correctly !")
                i--;
            }
        }
    }


    let AverageGrade, HighestGrade = 0, LowestGrade = 100;

    let sumOfNumbers = 0;

    for (let val in student.grades) {

        sumOfNumbers += val
        if (val > HighestGrade) HighestGrade = val
        if (val < LowestGrade) LowestGrade = val
    }
    AverageGrade = sumOfNumbers / student.grades.length;
    student.AverageG = AverageGrade 

    let Status = AverageGrade >= 60 ? "Passed" : "Failed";

    // Bonus3

    let GradeClassify;

    if (AverageGrade >= 90) GradeClassify = "Excellent"
    else if (AverageGrade >= 80) GradeClassify = "Very Good"
    else if (AverageGrade >= 70) GradeClassify = "Good"
    else if (AverageGrade >= 60) GradeClassify = "Pass"
    else GradeClassify = "Fail"

    //Bonus 6

    studentsArr.push(student)





    console.log("Report")
    console.log("---------------------")
    console.log("Student's Name : ", student.name)
    console.log("Student's Age : ", student.age)
    //Bouns 5
    console.log("Total Grades Entered :", student.grades.length)
    for (let i = 0; i < student.grades.length; i++) {
        console.log(`The grade of subject No.${i + 1} :`, student.grades[i])
    }


    console.log("Average Grade : ", AverageGrade, GradeClassify)
    console.log("Student Status : ", Status)

    //Bouns 4
    let ClientAnswer = prompt("Do you want to enter another student ?")

    if (ClientAnswer == 'No') {
        break;
    }


}


for(let i = 0 ; i < studentsArr.length ; i++){
    console.log(studentsArr[i].name , studentsArr[i].AverageG)
}

