// Function for random number to be used later.
const randomNumGenerator = num => {
    return Math.floor(Math.random() * num);
};

// Nonsensical Joke Object.
const jokeInfo = {
    firstLine: ['Why did the chicken say to the rabbit?', 'What did the rabbi say to the priest?', 'What did the dog say to the cat?', 'What did the clown say to the lion?', 'What did the Captain America say to the Elvis?'],
    secondLine: ['Boo!', 'Quack!', 'You look yummy!', 'Abracadabra!'],
    thirdLine: ['And then the rhino did a poo.', 'And then they exploded.', 'And then they flew to space.', 'And then they met the Queen.']
}

// Creating an empty array for the joke.
let joke = [];

// Iterating over object.
for (let line in jokeInfo) {
    let index = randomNumGenerator(jokeInfo[line].length);

    // Producing joke.
    switch(line) {
        case 'firstLine':
            joke.push(`${jokeInfo[line][index]}`)
            break
        case 'secondLine':
            joke.push(`${jokeInfo[line][index]}`)
            break
        case 'thirdLine':
            joke.push(`${jokeInfo[line][index]}`)
            break
        default:
            joke.push('You ruined the joke!');
    }
}

// Formatting joke to look better.
const formatJoke = arr => {
    let format = arr.join('\n');
    console.log(format);
}

formatJoke(joke);
