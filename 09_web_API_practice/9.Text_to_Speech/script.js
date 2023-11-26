const synth = window.speechSynthesis;

const voiceSelect = document.getElementById('voice-select');
let voices;

function addVoicesToSelect(){
    voices = synth.getVoices();

    for(let i=0;i<voices.length;i++){
        const option = document.createElement('option');

        option.textContent = `${voices[i].name} - ${voices[i].lang}`;

        if(voices[i].default){
            option.textContent += ' - DEFAULT';
        }

        option.setAttribute('data-lang',voices[i].lang);
        option.setAttribute('data-name',voices[i].name);
        voiceSelect.appendChild(option);
    }
}

addVoicesToSelect();
if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = addVoicesToSelect;
}

function onSubmit(e){
    e.preventDefault();

    const textInput = document.getElementById('text-input');

    const utterThis = new SpeechSynthesisUtterance(textInput.value);

    const selectOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    for(let i=0; i<voices.length; i++){
        if(voices[i].name === selectOption){
            utterThis.voice = voices[i];
        }
    }

    synth.speak(utterThis);
}

document.getElementById('form').addEventListener('submit',onSubmit);