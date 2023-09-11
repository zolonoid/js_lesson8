// Необходимо вывести горку в консоль (используя цикл for), у горки должно быть 20 рядов


for (let i = 1; i <= 20; i++) {
    let arr = new Array(i);
    arr.fill("x");
    console.log(arr.join(""));
}
