//TASK
// function handleCheck(arr){
//     return arr.map(item => item * item)
// }
// console.log(handleCheck([1, 2, 3, 0, 4, 5, 6]))

//TASK
//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
//[1, 2, 3, 0, 4, 5, 6]
// function handleCheck(arr){
//     return arr.map(item => item > 0)
// }
// console.log(handleCheck([1, 2, 3, 0, 4, 5, 6]))

//TASK
//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
//[1, 2, -3, 0, 4, -5, 6]
// function negativeNumber(array){
//     return array.map(item => item > 0 ? item : 'negative number')
// }
// console.log(negativeNumber([1, 2, -3, 0, 4, -5, 6]))



//TASK
//Дан массив с числами. Оставьте в нем только отрицательные числа.
//[1, 2, -3, 0, 4, 5, -6]
// function negativeCheck(arr){
//     return arr.filter(item => item < 0 )
// }
// console.log(negativeCheck([1, 2, -3, 0, 4, 5, -6]))


//TASK
//Дан массив с числами. Оставьте в нем только четные числа.
//[1, -2, 3, 0, 4, -5, 6]
// function evenNumber(arr){
//     return arr.filter(item => item % 2 === 0)
// }
// console.log(evenNumber([1, -2, 3, 0, 4, -5, 6]))

//TASK
//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
//['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// function handleCheck(array){
//     return array.filter(item => item.length > 5)
// }
// console.log(handleCheck(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']))

//TASK
//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// //[1, 2, -3, 0, -4, 5, -6]
// function negNumber(array){
//     let result = array.filter(item => item < 0)
//     return result.length
// }
// console.log(negNumber([1, 2, -3, 0, -4, 5, -6]))

//TASK
// [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']
// function numAl(arr, arr2){
//     return arr.concat(arr2)
// }
// console.log(numAl([1,2,3,4], ['a','b','c','d']))

//TASK
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
// function numberCheck(arr,str){
//     let res = str.split('').join('')
//     return arr.concat(res)
// }
// console.log(numberCheck([2, 3, 4, 5], 'hello world'))

//TASK
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
// function numberCheck(array,str){
//     let res = str.split(' ').join('').split('')
//     return array.concat(res)
// }
//
// console.log(numberCheck([2, 3, 4, 5], 'hello world'))

//TASK
// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]
// function numberCheck(arr, str){
//     let res = str.split(' ').join('').split('')
//     let concatinate = arr.concat(res)
//     return concatinate.concat(arr)
// }
// console.log(numberCheck([2, 3, 4, 5], 'hello world' ))


