import {
  createContext,
  useEffect,
  useReducer,
  useRef,
  useContext,
} from 'react';

type AudioObject = {
  src?: string;
  title?: string;
  isPlaying?: boolean;
  progress?: number;
  duration?: number;
  speed?: number;
  requestedSkip?: number | null;
};

const initialAudio: AudioObject = {
  src: '',
  title: '',
  isPlaying: false,
  progress: 0,
  duration: 0,
  speed: 1,
  requestedSkip: null,
};

const AudioContext = createContext(initialAudio);
const AudioDispatchContext = createContext<React.Dispatch<Action> | null>(null);

type AudioProviderProps = {
  children: React.ReactNode;
};

const localStorageKey = 'podcastListeningTo';

export function AudioProvider({ children }: AudioProviderProps) {
  const [audio, dispatch] = useReducer(audioReducer, initialAudio);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fromStorage = localStorage.getItem(localStorageKey);
    if (fromStorage) {
      dispatch({
        type: AUDIO_ACTION.SET_AUDIO,
        payload: JSON.parse(fromStorage),
      });
    }
  }, []);

  useEffect(() => {
    if (audio !== initialAudio) {
      localStorage.setItem(localStorageKey, JSON.stringify(audio));
    }
  }, [audio]);

  useEffect(() => {
    if (audio.src && audioRef.current) {
      audioRef.current.setAttribute('src', audio.src);
    }
  }, [audio.src]);

  useEffect(() => {
    if (audio.isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [audio.isPlaying]);

  useEffect(() => {
    if (
      audioRef.current &&
      (audio.requestedSkip || audio.requestedSkip === 0)
    ) {
      audioRef.current.currentTime = audio.requestedSkip;
      dispatch({
        type: AUDIO_ACTION.SKIP_TO,
        payload: { requestedSkip: null },
      });
    }
  }, [audio.requestedSkip]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = audio.speed || 1;
    }
  }, [audio.speed]);

  function handleLoadedData() {
    dispatch({
      type: AUDIO_ACTION.SET_DURATION,
      payload: { duration: audioRef.current?.duration || 0 },
    });
  }

  function handleTimeUpdate() {
    dispatch({
      type: AUDIO_ACTION.SET_PROGRESS,
      payload: { progress: audioRef.current?.currentTime },
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
          autoPlay
        ></audio>
        {children}
      </AudioDispatchContext.Provider>
    </AudioContext.Provider>
  );
}

enum AUDIO_ACTION {
  SET_AUDIO = 'SET_AUDIO',
  START_AUDIO = 'START_AUDIO',
  CLOSE_AUDIO = 'CLOSE_AUDIO',
  TOGGLE_PLAY = 'TOGGLE_PLAY',
  SET_DURATION = 'SET_DURATION',
  SET_PROGRESS = 'SET_PROGRESS',
  SET_SPEED = 'SET_SPEED',
  SKIP_TO = 'SKIP_TO',
}

type Action = {
  type: AUDIO_ACTION;
  payload: AudioObject;
};

function audioReducer(audio: AudioObject, action: Action): AudioObject {
  switch (action.type) {
    case AUDIO_ACTION.SET_AUDIO:
      return {
        ...action.payload,
        isPlaying: false,
        progress: action.payload.progress,
        requestedSkip: action.payload.progress,
      };
    case AUDIO_ACTION.START_AUDIO:
      return {
        ...audio,
        src: action.payload.src,
        title: action.payload.title,
        speed: 1,
        isPlaying: true,
      };
    case AUDIO_ACTION.TOGGLE_PLAY:
      return { ...audio, isPlaying: !audio.isPlaying };
    case AUDIO_ACTION.SET_DURATION:
      return { ...audio, duration: action.payload.duration };
    case AUDIO_ACTION.SET_PROGRESS:
      return { ...audio, progress: action.payload.progress };
    case AUDIO_ACTION.SET_SPEED:
      return { ...audio, speed: action.payload.speed };
    case AUDIO_ACTION.SKIP_TO:
      return { ...audio, requestedSkip: action.payload.requestedSkip };
    case AUDIO_ACTION.CLOSE_AUDIO:
      return initialAudio;
    default:
      return audio;
  }
}

export const useAudio = () => {
  const audio = useContext(AudioContext);
  const dispatch = useContext(AudioDispatchContext) as React.Dispatch<Action>;

  function startAudio(src: string, title: string) {
    dispatch({ type: AUDIO_ACTION.START_AUDIO, payload: { src, title } });
  }

  function closeAudio() {
    dispatch({ type: AUDIO_ACTION.CLOSE_AUDIO, payload: {} });
  }

  function togglePlay() {
    dispatch({ type: AUDIO_ACTION.TOGGLE_PLAY, payload: {} });
  }

  function skipTo(time: number) {
    dispatch({ type: AUDIO_ACTION.SKIP_TO, payload: { requestedSkip: time } });
  }

  function changeSpeed(speed: number) {
    dispatch({ type: AUDIO_ACTION.SET_SPEED, payload: { speed } });
  }

  if (!dispatch) {
    throw new Error('useAudio must be used within an AudioProvider');
  }

  return { audio, startAudio, closeAudio, togglePlay, skipTo, changeSpeed };
};
