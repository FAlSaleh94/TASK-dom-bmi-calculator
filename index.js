function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
const BMI = weight / (Math.pow (height/100,2))

alert(`BMI is ${BMI}`)

if(BMI < 18.5 && age == 19 || age <=24) {
  alert ("Underweight")
}
else if(BMI <= 24.5 && age == 25){
  alert ("Healthy Weight")
}
else if(BMI <= 29.9 && age == 19){
  alert ("Overweight")
}
else if(BMI >= 30 && age == 19){
  alert ("Obesity")
}
}
