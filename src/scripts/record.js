// setup basic variables for loop
// Reference: https://mdn.github.io/web-dictaphone/

const recordButton = document.querySelector('.record');
const stopButton = document.querySelector('.stop');
const pauseButton = document.querySelector('.pause');
const soundClips = document.querySelector('.clips');
const canvas = document.querySelector('.visualizer');
const mainSection = document.querySelector('.section--controls');

let paused = false;
let isRecording = false;

// disable stop button while not recording

stopButton.disabled = true;
pauseButton.disabled = true;

// visualizer setup - create web audio api context and canvas

let audioContext;

const toggleActionButton = ({ isRecording = false }) => {
  console.log(`recording is ${isRecording ? 'on' : 'off'}`);
  recordButton.classList.toggle('record--on');
  recordButton.disabled = isRecording; // disable while recording is on
  stopButton.disabled = !isRecording;
  pauseButton.disabled = !isRecording; // enable while recording is on
  pauseButton.classList.remove('resume');
};

const canvasCtx = canvas.getContext('2d');

//main block for doing the audio recording

const createAudioElement = (audioClip) => {
  console.log('data available after MediaRecorder.stop() called.');
  const clipName = prompt('Enter a name for your sound clip?', 'My unnamed clip');
  const clipContainer = document.createElement('article');
  const clipLabel = document.createElement('p');
  const audio = document.createElement('audio');
  const deleteButton = document.createElement('button');

  audio.controls = true;
  audio.src = audioClip;

  clipContainer.classList.add('clip');
  audio.setAttribute('controls', '');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';

  if (clipName === null) {
    clipLabel.textContent = 'My unnamed clip';
  } else {
    clipLabel.textContent = clipName;
  }

  clipContainer.appendChild(audio);
  clipContainer.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  console.log('recorder stopped');

  deleteButton.addEventListener('click', (e) => {
    let { target } = e;
    target.parentNode.parentNode.parentNode.removeChild(target.parentNode);
  });

  clipLabel.addEventListener('click', () => {
    const existingName = clipLabel.textContent;
    const newClipName = prompt('Enter a new name for your sound clip?');
    if (newClipName === null) {
      clipLabel.textContent = existingName;
    } else {
      clipLabel.textContent = newClipName;
    }
  });
  return clipContainer;
};

const createAudioURL = (recordChunks) => {
  const blob = new Blob(recordChunks, { type: 'audio/ogg; codecs=opus' });
  const audioURL = window.URL.createObjectURL(blob);
  return audioURL;
};

const recordAudio = async () => {
  if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia Supported');
    const constraints = { audio: true, video: false };
    let chunks = [];
    const handleSuccess = (stream) => {
      const options = { mimeType: 'audio/webm' };
      const mediaRecorder = new MediaRecorder(stream, options);
      visualize(stream);

      recordButton.addEventListener('click', () => {
        mediaRecorder.start();
        isRecording = true;
        console.log(mediaRecorder.state);
        toggleActionButton({ isRecording });
      });

      stopButton.addEventListener('click', () => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        isRecording = false;
        toggleActionButton({ isRecording });
      });

      pauseButton.addEventListener('click', () => {
        pauseButton.classList.toggle('resume');
        if (!paused) {
          paused = true;
          pauseButton.textContent = 'Resume';
          mediaRecorder.pause();
        } else {
          paused = false;
          pauseButton.textContent = 'Pause';
          mediaRecorder.resume();
        }
      });

      mediaRecorder.onstop = () => {
        console.log('data available');
        const audioURL = createAudioURL(chunks);
        chunks = [];
        const audioClipElement = createAudioElement(audioURL);
        soundClips.appendChild(audioClipElement);
      };

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    try {
      handleSuccess(stream);
    } catch (error) {
      console.error('Error occurred during recording audio');
      console.trace(error);
    }
  } else {
    console.log('getUserMedia not supported on your browser!');
  }
};

function visualize(stream) {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  const source = audioContext.createMediaStreamSource(stream);

  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);
  //analyser.connect(audioCtx.destination);

  draw();

  function draw() {
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

    canvasCtx.beginPath();

    let sliceWidth = (WIDTH * 1.0) / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128.0;
      let y = (v * HEIGHT) / 2;

      if (i === 0) {
        canvasCtx.moveTo(x, y);
      } else {
        canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    canvasCtx.lineTo(canvas.width, canvas.height / 2);
    canvasCtx.stroke();
  }
}

window.onresize = function () {
  canvas.width = mainSection.offsetWidth;
};

window.onresize();
recordAudio();
