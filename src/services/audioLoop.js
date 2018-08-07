import { getAudioContext, getCurrentBeat } from './audioContext';
import { scheduleNotes } from './audioScheduler';
import { setStartTime } from '../common';
import { INTERVAL } from './audioEngine.config';

export const initializeAudio = (store) => {
  const audioCtx = getAudioContext(); // Start the clock
  setInterval(() => {
    const { playbackSession, channels } = store.getState();
    if (playbackSession.playing) {
      scheduleNotes(playbackSession, channels, getCurrentBeat(playbackSession));

      // Loop if we reached the end of the bar
      const barLength = 4 * 60 / playbackSession.bpm;
      if (audioCtx.currentTime > playbackSession.startTime + barLength) {
        store.dispatch(setStartTime(playbackSession.startTime + barLength));
      }
    }
  }, INTERVAL);
};