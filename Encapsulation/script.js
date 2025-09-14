function clickLimiter () {
    let click = 0;

    return () => {
        if(click < 5) {
            click++;
        console.log(`Clicked : ${click} times`);
        } else {
            console.error("Limit exceed, Try after some time");
        }
    }
}

let fun = clickLimiter();
fun();
fun();
fun();
fun();
fun();
fun();