// 1. Შექმენით 20 ცალი ღილაკის ელემენტი , თითოეული მათგანი ამოიღეთ js
// ში და მიაბით ფუნქცია რომელიც გამოიძახება მათზე დაჭერის
// შემთხვევაში, ფუნქციამ უნდა შეუცვალოთ ღილაკებს background ფერი და
// უნდა მიანიჭოს რენდომული background ფერი
// const buttons = document.querySelectorAll(".btn");
// console.log(buttons);
// function generateRandomColor() {
//   let r1 = Math.round(Math.random() * 255);
//   let r2 = Math.round(Math.random() * 255);
//   let r3 = Math.round(Math.random() * 255);
//   let color = `rgb(${r1},${r2},${r3})`;
//   return color;
// }
// function assignRandColorToButtons(buttons) {
//   buttons.forEach((button) => {
//     button.style.backgroundColor = generateRandomColor();
//   });
// }
// assignRandColorToButtons(buttons);
// 2. Შექმენით 20 ცალი ღილაკი , ამოიღეთ ღილაკები js ში და მიანიჭეთ მათ
// ტექსტის მნიშვნელობად რენდომული რიცხვითი მნიშნელობები,
// ღილაკებს მიანიჭეთ ფუნქცია რომელიც გამოიძახება მათზე დაჭერის
// შემთხვევაში და ეს ფუფნქცია გამოიტანს alert დიალოგური ფანჯრის
// მეშვეობით თითოეულ ღილაკში ჩაწერილი რიცხვის გამყოფების
// რაოდენობას
// let buttons = document.querySelectorAll(".btn");
// function generateRandNumber(start, end) {
//   return Math.floor(Math.random() * (end - start + 1)) + start;
// }
// function getDivisors(number) {
//   let divisors = 0;
//   for (let i = 1; i <= number / 2; i++) {
//     if (number % i === 0) {
//       divisors++;
//     }
//   }
//   return divisors + 1;
// }
// function assignRandNumberToButtons(buttons) {
//   buttons.forEach((button) => {
//     button.textContent = generateRandNumber(1, 10);
//     button.addEventListener("click", (button) => {
//       let buttonValue = button.target.textContent;
//       let divisors = getDivisors(buttonValue);
//       alert(
//         `divisor${
//           divisors > 1 ? "s" : ""
//         } of your choosen number is : ${divisors}`
//       );
//     });
//   });
// }
// assignRandNumberToButtons(buttons);
// console.log(buttons);
// 3. Შექმენით 6 ცალი ღილაკის ელემენტი რომლებიც იქნებიან დასტილული
// შემდეგნაირად , width:300px; height:300px; border:1px solid steelblue; background-
// color:steelblue, ასევე დაამატეთ ერთი ღილაკი ამ ღილაკების ზემოთ
// რომელზე დაჭერის შემთხვევაშიც მიენიჭებათ ქვემოთ მოცემულ ღილაკებს
// რენდომული background ფერები
const assignColorButton = document.querySelector(".assign-colors");
function getRandomColor(start, end) {
  let r1 = Math.floor(Math.random() * (end - start + 1)) + start;
  let r2 = Math.floor(Math.random() * (end - start + 1)) + start;
  let r3 = Math.floor(Math.random() * (end - start + 1)) + start;
  let color = `rgb(${r1},${r2},${r3})`;
  return color;
}
assignColorButton.addEventListener("click", assignColors);
function assignColors() {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((button) => {
    button.style.backgroundColor = getRandomColor(0, 255);
  });
}

console.log(assignColorButton);
