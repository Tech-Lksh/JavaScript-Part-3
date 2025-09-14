function outer() {
    let  counter = 4;
    return () => {
        counter++;
        return counter;
    };
}


let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());