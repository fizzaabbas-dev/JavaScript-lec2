alert("I am working");
// conditional Statement

let age = 19
//  19 >=18T
if(age>=18){
    console.log("You are eligible to vote");

}
else{
    console.log("You are not eligible to vote");
}
let provience="Fataa";
if(province=="Punjab"){
    console.log("You are from Punjab");
}
if(province=="Sindh"){
    console.log("You are not eligible for this scholarship ")

}
else if(province=="KPK"){
    console.log("You are not eligible for this scholarship ")
}
if(province=="Balochistan"){
    console.log("You are  eligible for this scholarship ")

}
else{
    console.log("Incomplete information")

}

let grade="A";
if(grade=="A"){
console.log("Excelent Result")
}
else if(grade=="B"){
console.log(" Good")
}
else if(grade=="C"){
console.log("Better")
}
else if(grade=="D"){
console.log("Poor")
}
else if(grade=="F"){
console.log("Fail")
}
else{
    console.log("Invalid Grade! Please enter a valid grade.")
}
// Loops
for(let i=1;i<=6;i++){
    console.log("i")
    console.log("Fizza ")
}
// Even nunmbers

for("i=0;i<=100;i++"){
    console.log(i)
}
for("i=1;i<=100;i++"){
    console.log(i)
 }
//  take user input
let obtMarks = prompt("Enter your obtained marks");
let totalMarks= prompt("Enter your total marks");

// typecasting
obtainMarks = Number(obtMarks);
totalMarks = Number(totalMarksMarks);
console.log(typeof obtMarks);
console.log(typeof totalMarks);

let obtMarks = prompt("Enter your obtained marks");
let totalMarks= prompt("Enter your total marks");
let percentage = prompt(obtainMarks/totalMarks)*100
console.log(percentage);
console.log(typeofpercentage);


//1. Loop of triangle
for (let i = 1; i <= 5; i++) {

    console.log(i);
    let baseInput = prompt("Enter Base:");
    let heightInput = prompt("Enter Height:");
    let base = Number(baseInput);
    let height = Number(heightInput);
    let area = 0.5 * base * height;
    
    console.log(area);}

    // 2. Calculate percentage  using loop
    for (let i = 1; i <= 5; i++) {

    console.log(i);
    let obtInput = prompt("Enter Obtained Marks:");
    let totalInput = prompt("Enter Total Marks:");
    let obtMarks = Number(obtInput);
    let totalMarks = Number(totalInput);
    let percentage = (obtMarks / totalMarks) * 100;
    
    console.log(percentage);}



    // 3. Calculate your BMI
    for (let i = 1; i <= 5; i++) {

    console.log(i);
    let weightInput = prompt("Enter Weight:");
    let heightMetersInput = prompt("Enter Height in Meters:");
    let weight = Number(weightInput);
    let heightMeters = Number(heightMetersInput);
    let bmi = weight / (heightMeters * heightMeters);
    
    console.log(bmi);
    }


    


