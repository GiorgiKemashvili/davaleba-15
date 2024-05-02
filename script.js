// 1.davaleba-1
for (let i = 0; i <= 100; i++) {
    console.log(i);
}
// 2. davaleba-2
let j = 0;
while (j <= 50) {
    console.log(j);
    j++;
}
// 3. davaleba-3
let namesArray = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log(namesArray);

namesArray.pop();
console.log(namesArray);

namesArray.shift();
console.log(namesArray);

namesArray.unshift('Zoe');
console.log(namesArray);

namesArray.push('Frank');
console.log(namesArray);

delete namesArray[1];
console.log(namesArray);

namesArray[1] = 'Grace';
console.log(namesArray);
// 4. davaleba-4
let newArray = [];
for (let i = 1; i <= 10000; i++) {
    newArray.push(i * i);
}
// 5. davaleba-5
let sumArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
}
console.log(sum);
// 6. davaleba-6
function isOdd(number) {
    return number % 2 !== 0;
}