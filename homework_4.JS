// let inPrime = +prompt('Введіть число для перевірки','');
// let isPrime = 1;

// for (let i = 2; i < inPrime; i++){
//    if (inPrime % i === 0){
//       isPrime++;
//       break
//    } 
// }
// let Prime = (isPrime === 1) ? console.log ('число просте') : console.log ('число складене')

let finNumber = +prompt('Введіть число для перевірки','');
let resoult = 0

for (let i = 0; i < finNumber; i++){
   if (finNumber % i === 0){
      resoult += i;
   }   
}
let j = (finNumber === resoult) ? console.log('число досконале') : console.log('число звичайне')

// let treeHeight = +prompt('Введіть вершину ялинки','');
    
// let i = 0;

// while (i < treeHeight) {
//     let left = '';
//     let right = '';

//     for (let j = 0; j < treeHeight - i; j++) left += " ";
//     for (let j = 0; j < i * 2 + 1; j++) right += "*";
//     console.log(left + right);
//     i++;
// }