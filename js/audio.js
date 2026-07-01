  // ---------- Audio (tiny synth, optional) ----------
  let actx = null;
  export function beep(freq, dur=0.08, type="square", vol=0.06){
    try{
      if(!actx) actx = new (window.AudioContext||window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type; o.frequency.value = freq;
      g.gain.value = vol;
      o.connect(g); g.connect(actx.destination);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
      o.stop(actx.currentTime + dur);
    }catch(e){}
  }
  // Synthetic "meow": pitch rise-then-fall through a resonant lowpass that
  // sweeps from an "ee" formant down to an "ow" formant.
  export function meow(vol=0.09){
    try{
      if(!actx) actx = new (window.AudioContext||window.webkitAudioContext)();
      const t = actx.currentTime, dur = 0.28;
      const o = actx.createOscillator(), f = actx.createBiquadFilter(), g = actx.createGain();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(480, t);
      o.frequency.linearRampToValueAtTime(760, t + 0.07);
      o.frequency.exponentialRampToValueAtTime(360, t + dur);
      f.type = "lowpass"; f.Q.value = 9;
      f.frequency.setValueAtTime(1100, t);
      f.frequency.linearRampToValueAtTime(1500, t + 0.07);
      f.frequency.exponentialRampToValueAtTime(700, t + dur);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
      g.gain.setValueAtTime(vol, t + 0.09);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(f); f.connect(g); g.connect(actx.destination);
      o.start(t); o.stop(t + dur + 0.02);
    }catch(e){}
  }
  export const sfx = {
    jump:  () => meow(),
    coin:  () => { beep(880,.07,"triangle",.06); setTimeout(()=>beep(1320,.09,"triangle",.05),60); },
    power: () => { beep(523,.1,"square",.06); setTimeout(()=>beep(659,.1,"square",.06),90); setTimeout(()=>beep(880,.14,"square",.06),180); },
    stomp: () => beep(220,.12,"sawtooth",.06),
    hurt:  () => beep(160,.22,"sawtooth",.07),
    lava:  () => { beep(120,.3,"sawtooth",.08); setTimeout(()=>beep(90,.3,"sawtooth",.07),120); },
    win:   () => { [523,659,784,1046].forEach((f,i)=>setTimeout(()=>beep(f,.18,"triangle",.07), i*150)); }
  };
  // iOS/Safari suspend the AudioContext until a user gesture; called from startPlay.
  export function resumeAudio(){
    if(actx && actx.state==="suspended") actx.resume();
  }
