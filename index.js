// Code your solutions in this file

// for loop
function writeCards(names, event) {
    const messages = [];
    for(let i=0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}

// example usage
const thanks = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thanks);

// while loop
function countDown(number) {
    let countdown = number;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}

// example usage
countDown(10);