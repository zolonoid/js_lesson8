// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]


let src = [1, 2, 3, 4, 5, 6, 7];
let dst = src.filter(x => x < 4 || x > 5);
console.log(dst);