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