// Code your solutions in this file
function writeCards(names, event) {
    const messages = [];
    for(i=0; i < names.length; i++) {
        message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message);
    }
    return messages;
}

// example usage
const thanks = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(thanks);

