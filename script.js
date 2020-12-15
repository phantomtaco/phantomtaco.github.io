const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
	const jokeDisplay = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeDisplay.json();
	jokeEl.innerHTML = joke.joke;
}

// ---------------VoiceRSS code (incomplete)------------------

// const VoiceRSS = require ("./voiceRSS");

// function test() {
// VoiceRSS Speech Parameters
//   VoiceRSS.speech({
//     key: 'd9e60df7a92c4a9c87e89d05261016e7',
//     src: 'hello world',
//     hl: 'en-au',
//     r: 0,
//     c: 'mp3',
//     f: '44khz_16bit_stereo',
//     ssml: false,
//     callback: function (error, content) {
//       console.log(error || content);
//     }
//   });
// }
// test();

//Get jokes from Joke API
// async function getJokes() {
//   let joke = '';
//   const apiUrl = '';

// ------------Corporate jokes generator (not working)-------------

// const jokeEl = document.getElementById('joke');
// const get_joke = document.getElementById('get_joke');

// get_joke.addEventListener('click', generateJoke);

// generateJoke();

// async function generateJoke() {
// 	const jokeAppear = await fetch("https://sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com/", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "4103cbc38emsh1540c56cd94e442p163973jsne1de6adaf141",
//       "x-rapidapi-host": "sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com"
//     }
//   })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.error(err);
//   });
// 	const joke = await jokeAppear.json();
// 	jokeEl.innerHTML = joke.joke;