// 1. Beginner Series #3 Sum of Numbers

// function getSum( a,b ) {
//     let c = 0
//     if (a === b) {
//         c = a
//     } else {
//         let f = []
//         let max = a < b ? b : a
//         let min = a > b ? b : a
//         for (let i = min; i<=max; i++) {
//             f.push(i)
//         }
//         for (i=0; i<f.length;i++) {
//             c += f[i]
//         }
//     }
//     return c
// }

// 2. Sum of two lowest positive integers

// function sumTwoSmallestNumbers(numbers) {
//     let a = numbers.sort(function(a, b){
//         return a-b
//     })
//     return a[0] + a[1]
// }
// sumTwoSmallestNumbers([15, 28, 4, 2, 43])

// 3. Mumbling

// function accum(s) {
//     const contaiter = s, pattern = contaiter.toLowerCase().split('')
//     let switchContainer = [], finalSwitchContainer = []
//     for (let i = 0; i<pattern.length; i++) {
//         if (i===0) {
//             switchContainer.push(pattern[i].toUpperCase())
//         } else {
//             switchContainer.push(pattern[i].toUpperCase())
//             switchContainer.push(pattern[i].repeat(i))
//         }
//     }
//     for (let i = 0; i<switchContainer.length; i++) {
//         if (switchContainer[i] == switchContainer[i].toUpperCase()) {
//             const h = '-'
//             finalSwitchContainer.push(h)
//             finalSwitchContainer.push(switchContainer[i])
//         } else {finalSwitchContainer.push(switchContainer[i])}
//     }
//     const correction = finalSwitchContainer.shift()
//     return finalSwitchContainer.join('')

// }
// accum("Zpgl")

// 4. Exes and Ohs

// function XO(str) {
//     let sum = [];
//     let sum1 = [];
//     const arr1 = str.split('')
//     for (let elem of arr1) {
//         elem == 'x' ? sum.push(elem) : elem == 'X' ? sum.push(elem) : elem == 'o' ? sum1.push(elem) : elem == 'O' ? sum1.push(elem) : ''
//     }
//     console.log(sum, sum1)
//     return sum.length == sum1.length ? true : false
// }
// XO('xXXoOo')

// 5. Isograms

// function isIsogram(str){
//     const copyOfData = str, splitCopy = str.toLowerCase().split(''), arrayOfData = [""]
//     for (let i = 0; i<splitCopy.length; i++) {
//         if (arrayOfData.includes(splitCopy[i])) {
//             return false
//         }
//         else {
//             arrayOfData.push(splitCopy[i])
//         }
//     }
//     return true
// }
// isIsogram("Dermatoglyphics")

// 6. Vowel Count

// function getCount(str) {
//     const dictionary = ['a', 'e', 'i', 'o', 'u']
//     let a = 0
//     let c = str.split('')
//     for (let i = 0; i<c.length; i++) {
//       dictionary.includes(c[i]) ? a++ : ''
//     }
//     return a;
//   }

//   getCount("abracadabra")