// Good Luck! You got this 💪🏾
// Write your code here.

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}

let aliBMI = calculateBMI(76, 1.74);
let mohamedBMI = calculateBMI(84, 1.84);
if (aliBMI > mohamedBMI) {
    console.log("Ali's BMI is higher than Mohamed's BMI.");
} else if (mohamedBMI > aliBMI) {
    console.log("Mohamed's BMI is higher than Ali's BMI.");
} else {
    console.log("Ali and Mohamed have the same BMI.");
}