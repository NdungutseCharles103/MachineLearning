const grammar =
	"#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;
const btn = document.getElementById('btn')

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

btn.onclick = () => {
	recognition.start();
	console.log("Ready to receive a color command.");
};

recognition.onstart = (event) => {
	console.log(event);
	console.log("Voice recognition activated. Try speaking into the microphone.");
};

recognition.onSoundStart = (event) => {
	console.log(event);
	console.log("Sound has been detected");
};
recognition.onresult = (event) => {
	console.log(event);
	const color = event.results[0][0].transcript;
	diagnostic.textContent = `Result received: ${color}`;
	bg.style.backgroundColor = color;
};
