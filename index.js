function writeCards(names, reason) {
    let responses = [];
    names.forEach((name) => {
        responses.push(`Thank you, ${name}, for the wonderful ${reason} gift!`);
    });
    // Other for loop
    // for (let i = 0; index < names.length; i++) {
    //     responses.push(`Thank you, ${names[i]}, for the wonderful ${reason} gift!`);
    // }
    return responses;
}

function countDown(countDownNum) {
    while (countDownNum >= 0) {
        console.log(countDownNum--);
    }
}
