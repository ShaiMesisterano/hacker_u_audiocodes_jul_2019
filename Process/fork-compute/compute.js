const longComputation = () => {
    let sum = 0;
    for (let i=0; i<1000000000; i++) {
        sum += i;
    }
    return sum;
}

process.on('message', msg => {
    console.log("before compute");
    const sum = longComputation();
    console.log("after compute", sum);
    process.send(sum);
})