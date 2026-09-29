// Web Audio API synthesizer for festival sound effects

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play authentic quirky retro "HORN OK PLEASE" dual-tone truck horn
 */
export function playHornSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    // Dual tone horn frequencies (authentic truck horn chord)
    const freqs = [350, 440, 520];

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      // slight pitch dip like an air horn release
      osc.frequency.linearRampToValueAtTime(freq * 0.96, now + 0.35);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.18 / freqs.length, now + 0.04);
      gain.gain.setValueAtTime(0.18 / freqs.length, now + 0.28);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    });

    // Second quick chirp for the "Peep Peep!" signature
    setTimeout(() => {
      try {
        const chirpNow = ctx.currentTime;
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = idx === 0 ? 'sawtooth' : 'triangle';
          osc.frequency.setValueAtTime(freq * 1.05, chirpNow);
          gain.gain.setValueAtTime(0, chirpNow);
          gain.gain.linearRampToValueAtTime(0.2 / freqs.length, chirpNow + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, chirpNow + 0.3);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(chirpNow);
          osc.stop(chirpNow + 0.3);
        });
      } catch {
        // ignore
      }
    }, 180);
  } catch (err) {
    console.warn('Audio not supported or interaction required', err);
  }
}

/**
 * Play a short melodic synthesizer riff for artist preview
 */
let currentPreviewStop: (() => void) | null = null;

export function playArtistPreview(onEnd?: () => void): () => void {
  // Stop existing preview if any
  if (currentPreviewStop) {
    currentPreviewStop();
  }

  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 392.00, 329.63, 293.66]; // C major pentatonic groove
    const noteDuration = 0.22;
    const oscillators: OscillatorNode[] = [];

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * noteDuration);

      gain.gain.setValueAtTime(0, now + i * noteDuration);
      gain.gain.linearRampToValueAtTime(0.12, now + i * noteDuration + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (i + 1) * noteDuration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * noteDuration);
      osc.stop(now + (i + 1) * noteDuration);
      oscillators.push(osc);
    });

    const timeout = setTimeout(() => {
      if (onEnd) onEnd();
      currentPreviewStop = null;
    }, notes.length * noteDuration * 1000);

    const stopFn = () => {
      clearTimeout(timeout);
      oscillators.forEach(o => {
        try { o.stop(); } catch { /* ignore */ }
      });
      if (onEnd) onEnd();
      currentPreviewStop = null;
    };

    currentPreviewStop = stopFn;
    return stopFn;
  } catch {
    if (onEnd) onEnd();
    return () => {};
  }
}

/**
 * Play celebratory chime when tickets or items are added
 */
export function playSuccessChime() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const chords = [523.25, 659.25, 783.99, 1046.50]; // C5 - E5 - G5 - C6

    chords.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.07);

      gain.gain.setValueAtTime(0, now + i * 0.07);
      gain.gain.linearRampToValueAtTime(0.15, now + i * 0.07 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.07);
      osc.stop(now + i * 0.07 + 0.5);
    });
  } catch {
    // audio context might need user gesture
  }
}
