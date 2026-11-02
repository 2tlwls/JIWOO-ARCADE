
function beep(type='pop'){
  try{const A=window.AudioContext||window.webkitAudioContext; const ctx=new A(); const o=ctx.createOscillator(); const g=ctx.createGain(); o.connect(g);g.connect(ctx.destination);
  const map={pop:[520,.07],merge:[760,.09],clear:[900,.13],lose:[190,.35],move:[320,.025]}; const [f,d]=map[type]||map.pop; o.frequency.value=f;o.type=type==='lose'?'sawtooth':'square';g.gain.setValueAtTime(.035,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+d);o.start();o.stop(ctx.currentTime+d);o.onended=()=>ctx.close();}catch(e){}
}
function setBest(key,val){const old=+(localStorage.getItem(key)||0);if(val>old)localStorage.setItem(key,val);return Math.max(old,val)}
