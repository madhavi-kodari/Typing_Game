const quotes = [
    'The purpose of our lives is to be happy',
    'Life has no limitations except the ones you make.',
    'Life is a succession of lessons which must be lived to be understood',
    'Only a life lived for others is a life worthwhile',
    'Life is a journey not a destination',
    'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
    'If you do not like the road you are walking, start paving another one.', 
    'Life is either a daring adventure, or nothing.',
    'An unexamined life is not worth living.',
    'The only way to have a friend is to be one.',
    'To love oneself is the beginning of a lifelong romance.',
    'What is a friend? A single soul dwelling in two bodies.',
    'Spread love everywhere you go.',
    'A warm smile is the universal language of kindness'
];

let words = [];
let wordIndex = 0;
let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedvalueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;

    const spanWords = words.map(word => `<span>${word}</span>`);
    quoteElement.innerHTML = spanWords.join(' ');
    quoteElement.children[0].className = 'highlight';

    messageElement.innerText = '';
    typedvalueElement.value = '';
    typedvalueElement.focus();

    startTime = new Date().getTime();
});

typedvalueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typeValue = typedvalueElement.value;

    if (typeValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTime = new Date().getTime() - startTime;
        const message = `🎉 CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
    } else if (typeValue.endsWith(' ') && typeValue.trim() === currentWord) {
        typedvalueElement.value = '';
        wordIndex++;

        for (const wordElement of quoteElement.children) {
            wordElement.className = '';
        }
        if (wordIndex < quoteElement.children.length) {
            quoteElement.children[wordIndex].className = 'highlight';
        }
    } else if (currentWord.startsWith(typeValue)) {
        typedvalueElement.className = '';
    } else {
        typedvalueElement.className = 'error';
    }
});
