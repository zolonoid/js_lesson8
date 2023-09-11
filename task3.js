// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


let nums = [];
let sum = 0;
let min = Number.MAX_VALUE;
let numThreeExist = false;

for (let i = 0; i < 5; i++) {
    nums[i] = Math.ceil(Math.random() / (1 / 9));
    sum += nums[i];
    if (nums[i] < min) min = nums[i];
    if (nums[i] === 3) numThreeExist = true;
}

console.log(`Создан массив: ${nums}\nСумма элементов: ${sum}\nМинимальное число: ${min}\nЕсть ли число 3: ${numThreeExist ? "да" : "нет"}`);
