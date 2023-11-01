import { emojiList, isAlphabet, isNumber, random } from './utils.js';

const mainBlock = document.querySelector('main');
const muteButton = document.querySelector('#mute');
const audioPlayer = document.querySelector('#audioPlayer');
const header = document.querySelector('.header');
const speaker = document.querySelector('#speaker');

let speakerName;

speaker.addEventListener('click', (e) => {
  speakerName = e.target.dataset.name;
  Array.from(e.target.parentNode.children).forEach(c => {
    if(c.dataset.name === speakerName ) {
      c.classList.toggle('active');
    } else {
      c.classList.remove('active');
    }
  });
})

let isMuted = false;

//const folderLocation = './media/';

muteButton.addEventListener('click', (e) => {
  isMuted = !isMuted;
  audioPlayer.muted = isMuted;
  e.target.classList.toggle('mute');
});

const getEmoji = (letter) => {
  const { [letter.toUpperCase()]: list = [] } = emojiList;
  if (list.length) {
    const codePoint = random(list);
    return String.fromCodePoint(codePoint);
  }
};

const attachAudio = (key, isNumber = false) => {
  let keyName;
  let location = './media/';
  if (isNumber) {
    keyName = key.replace('Digit', '');
    location += 'numbers';
  } else {
    keyName = key.replace('Key', '').toLowerCase();
    location += 'alphabets';
  }
  const source = `${location}/${speakerName}/${keyName}.ogg`;
  audioPlayer.src = source;
  audioPlayer.load();
  // alternative approach which seems better without adding anything to HTML
  // const audio = new Audio();
  // audio.src = source;
  // audio.play();
  // when the sound has been loaded, execute your code
  audioPlayer.oncanplaythrough = async () => {
    try {
      await audioPlayer.play();
    } catch (e) {
      if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') {
        console.error(e.name);
      }
    }
  };
};

const isNonPrintingKey = (e) => {
  const { altKey, ctrlKey, metaKey, shiftKey } = e;
  return metaKey || ctrlKey || shiftKey || altKey;
};

document.addEventListener(
  'keydown',
  (e) => {
    const { key, keyCode, which, code } = e;
    if (!isNonPrintingKey(e)) {
      header && header.classList.add('scroll');
      if (isAlphabet(which)) {
        const emoji = getEmoji(key);
        mainBlock.innerHTML = key + emoji;
        muteButton && attachAudio(code);
      } else if (isNumber(keyCode)) {
        mainBlock.innerHTML = key;
        muteButton && attachAudio(code, true);
      } else {
        const x = String.fromCodePoint(112080);
        mainBlock.innerHTML = x;
      }
    } else {
      console.log('Printing Key');
    }
  },
  false
);
