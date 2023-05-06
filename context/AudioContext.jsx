import { createContext, useEffect, useReducer, useRef } from 'react';

const initialAudio = {
  src: '',
  isPLaying: false,
  progress: 0,
  duration: 0,
  speed: 1,
  requestedSkip: null,
};

export const AudioContext = createContext(initialAudio);
export const AudioDispatchContext = createContext(null);

export function AudioProvider({ children }) {
  const [audio, dispatch] = useReducer(audioReducer, initialAudio);
  const audioRef = useRef();

  useEffect(() => {
    if (audio.src && audioRef.current) {
      audioRef.current.setAttribute('src', audio.src);
      audioRef.current.play();
    }
  }, [audio.src]);

  useEffect(() => {
    if (audio.isPLaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [audio.isPLaying]);

  useEffect(() => {
    if (audio.requestedSkip || audio.requestedSkip === 0) {
      audioRef.current.currentTime = audio.requestedSkip;
      dispatch({ type: AUDIO_ACTIONS.SKIP_TO, requestedSkip: null });
    }
  }, [audio.requestedSkip]);

  useEffect(() => {
    audioRef.current.playbackRate = audio.speed;
  }, [audio.speed]);

  function handleLoadedData() {
    dispatch({
      type: AUDIO_ACTIONS.SET_DURATION,
      duration: audioRef.current.duration,
    });
  }

  function handleTimeUpdate() {
    dispatch({
      type: AUDIO_ACTIONS.SET_PROGRESS,
      progress: audioRef.current.currentTime,
    });
  }

  return (
    <AudioContext.Provider value={audio}>
      <AudioDispatchContext.Provider value={dispatch}>
        <audio
          ref={audioRef}
          src={audio.src}
          onLoadedData={handleLoadedData}
          onTimeUpdate={handleTimeUpdate}
        ></audio>
        {children}
      </AudioDispatchContext.Provider>
    </AudioContext.Provider>
  );
}

export const AUDIO_ACTIONS = {
  START_AUDIO: 'START_AUDIO',
  TOGGLE_PLAY: 'TOGGLE_PLAY',
  SET_DURATION: 'SET_DURATION',
  SET_PROGRESS: 'SET_PROGRESS',
  SET_SPEED: 'SET_SPEED',
  SKIP_TO: 'SKIP_TO',
};

function audioReducer(audio, action) {
  switch (action.type) {
    case AUDIO_ACTIONS.START_AUDIO:
      return { ...audio, src: action.src, speed: 1, isPLaying: true };
    case AUDIO_ACTIONS.TOGGLE_PLAY:
      return { ...audio, isPLaying: !audio.isPLaying };
    case AUDIO_ACTIONS.SET_DURATION:
      return { ...audio, duration: action.duration };
    case AUDIO_ACTIONS.SET_PROGRESS:
      return { ...audio, progress: action.progress };
    case AUDIO_ACTIONS.SET_SPEED:
      return { ...audio, speed: action.speed };
    case AUDIO_ACTIONS.SKIP_TO:
      return { ...audio, requestedSkip: action.skipTo };
    default:
      return audio;
  }
}

export const useAudio = () => {
  const audio = useContext(AudioContext);
  const dispatch = useContext(AudioDispatchContext);

  return {
    ...audio,
    startAudio: (src) => dispatch({ type: AUDIO_ACTIONS.START_AUDIO, src }),
    togglePlay: () => dispatch({ type: AUDIO_ACTIONS.TOGGLE_PLAY }),
    setDuration: (duration) =>
      dispatch({ type: AUDIO_ACTIONS.SET_DURATION, duration }),
    setProgress: (progress) =>
      dispatch({ type: AUDIO_ACTIONS.SET_PROGRESS, progress }),
    setSpeed: (speed) => dispatch({ type: AUDIO_ACTIONS.SET_SPEED, speed }),
    skipTo: (skipTo) => dispatch({ type: AUDIO_ACTIONS.SKIP_TO, skipTo }),
  };
};
