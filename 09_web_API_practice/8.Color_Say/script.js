const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const rec = new speechRecognition();

const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
];

rec.lang = 'en-US';

rec.continuous = true;

rec.onresult = function(e){

    for(let i=0;i<e.results.length;i++){
        const color = e.results[i][0].transcript.toLowerCase().trim();
        if(acceptedColors.includes(color)){
            document.body.style.backgroundColor = color;
        }
    }

}

rec.start();