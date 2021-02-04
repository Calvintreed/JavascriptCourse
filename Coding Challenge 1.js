// Coding Challenge 1 & 2
// const markWeight = 78
// const markHeight = 1.69
// const johnWeight = 92
// const johnHeight = 1.95
//
//
//
// let markBMI = markWeight / markHeight ** 2
// let johnBMI = johnWeight / johnHeight ** 2
// let markHigherBMI = markBMI > johnBMI;
//
// console.log(markBMI, johnBMI, markHigherBMI)
//
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// }

// Coding Challenge 3
// let dolphinsScore = (1+1+1/3)
// let koalasScore = (1+1+1/3)
//
// if (dolphinsScore > koalasScore) {
//   console.log("Dolphins win!")
// } else if (koalasScore > dolphinsScore) {
//   console.log("Koalas win!")
// } else {
//   console.log("That's a draw!")
// }

// The Switch Statement
// let day = 'Monday'
//
// if (day==='Monday'){
//   console.log('Plan Course Structure')
//   console.log('Go to Coding Meetup')
// } else if (day === 'Tuesday'){
//   console.log('Prepare Theory Videos')
// } else if (day === 'Wednesday' || day === 'Thursday') {
//   console.log('Write Code Example')
// } else if (day === 'Friday') {
//   console.log('Record Videos')
// } else if (day === 'Saturday' || day === 'Sunday'){
//   console.log('Enjoy the weekend :D')
// } else {
//   console.log('Not a valid day!')
// }

// // Coding Challenge 4
// let bill = 100
//   let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}`)

`use strict`;
// Coding Challenge # 1 (or 5)
// const calcAverage = (a, b, c) => (a + b +c) / 3;
//
// const dolphinsAverage = calcAverage(44, 23 , 71)
// const koalasAverage = calcAverage(65, 54, 49)
//
// function checkWinner () {
//   if (dolphinsAverage >= 2 * koalasAverage){
//     console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`)
//   }
//   else if (koalasAverage >= 2 * dolphinsAverage) {
//     console.log(`Koalas win (${koalasAverage} vs ${dolphinsAverage}`)
//   }
//   else{
//     console.log(`Nobody wins!`)
//   }
// }
//
// console.log(checkWinner())
//
//
// const friends = ['Michael', 'Steven', 'Peter'];
//
// //add Elements
// const newLength = friends.push('Jay');
// console.log(friends)
//
// friends.unshift('John');
// console.log(friends)
//
// // Remove Elements
// friends.pop(); // Last Element
// const popped = friends.pop()
// console.log(popped)
//
// friends.shift(); //First Element
//
// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));

// Coding Challenge #2 (or 6)
//
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
// }
//
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
// console.log(bills, tips, totals);

// Coding Challenge #3 (or 6)
//
// let john = {
//   fullName: 'John Smith',
//   Mass: 92,
//   Height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.Mass / (this.Height * this.Height);
//     return this.bmi;
//   }
// };
//
// let mark = {
//   fullName:'Mark Miller',
//   Mass: 78,
//   Height:1.69,
//
//   calcBMI: function () {
//     this.bmi = this.Mass / (this.Height * this.Height)
//     return this.bmi
//   }
// };
//
// john.calcBMI()
// mark.calcBMI()
//
// if (mark.bmi>john.bmi){
//   console.log(`${john.fullName} BMI (${john.bmi} is higher than ${mark.fullName}'s (${mark.bmi})!`)
// } else if (john.bmi>mark.bmi){
//   console.log(`${mark.fullName} BMI (${mark.bmi} is higher than ${john.fullName}'s (${john.bmi})!`)
// }

//For loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep = rep++) {
//   console.log(`Lifting weights repetition ${rep}`)
// }

// const jonas = [
//   `Jonas`,
//   `Schmedtmann`,
//   2037 - 1991,
//   `teacher`,
//   [`Michael`,`Peter`,`Steven`]
// ];
// const types = [];
//
// for (let i = 0; i < jonas.length; i++){
//   //Reading from Jonas Array
//   console.log(jonas[i], typeof jonas[i]);
//
//    // Filling types array
//   // types[i]= typeof jonas[i]
//   types.push(typeof jonas[i])
// }
//
// const years = [1991, 2007, 1969, 2020];
// const ages = [];
//
// for (let i = 0; i < years.length; i++){
//   ages.push(2037 - years[i]);
// }
//
// // Continue & Break
// console.log('Only strings')
// for (let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
// console.log('Break with Number')
// for (let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// Looping Backwards
// const jonas = [
//   `Jonas`,
//   `Schmedtmann`,
//   2037 - 1991,
//   `teacher`,
//   [`Michael`,`Peter`,`Steven`]
// ];
//
// for (let i = jonas.length - 1; i >= 0; i--){
//   console.log(jonas[i]);
// }
//
// Loops in Loops
// for (let exercise = 1; exercise < 4; exercise++){
//   console.log(`------- Starting Exercise ${exercise}`)
//
//   for (let rep = 1; rep < 6; rep++){
//     console.log(`Lifting weights repetition ${rep}`)
//   }
// }
//
// //While loops without Counter
//
// let dice = math.trunc(math.random() * 6) + 1;
//
// while (dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice= Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2;
const bills = [22, 295, 176, 440, 37, 105,10, 1100,86,52];
const tips = [];
const totals = [];

for (let i = 0; i<bills.length, i++;){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
 }
}

