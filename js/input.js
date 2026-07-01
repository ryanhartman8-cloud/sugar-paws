  // ---------- Input ----------
  export const keys = { left:false, right:false, jump:false, jumpHeld:false };
  const keymap = {
    ArrowLeft:"left", KeyA:"left",
    ArrowRight:"right", KeyD:"right",
    Space:"jump", ArrowUp:"jump", KeyW:"jump"
  };
  addEventListener("keydown", e => {
    const k = keymap[e.code];
    if(k){ e.preventDefault();
      if(k==="jump"){ if(!keys.jumpHeld) keys.jump=true; keys.jumpHeld=true; }
      else keys[k]=true;
    }
  });
  addEventListener("keyup", e => {
    const k = keymap[e.code];
    if(k){ e.preventDefault();
      if(k==="jump"){ keys.jumpHeld=false; }
      else keys[k]=false;
    }
  });
  function bindTouch(id, on, off){
    const el = document.getElementById(id);
    const start = e => { e.preventDefault(); on(); };
    const end   = e => { e.preventDefault(); off(); };
    el.addEventListener("touchstart", start, {passive:false});
    el.addEventListener("touchend", end, {passive:false});
    el.addEventListener("touchcancel", end, {passive:false});
    el.addEventListener("mousedown", start);
    el.addEventListener("mouseup", end);
    el.addEventListener("mouseleave", end);
  }
  bindTouch("tleft",  ()=>keys.left=true,  ()=>keys.left=false);
  bindTouch("tright", ()=>keys.right=true, ()=>keys.right=false);
  bindTouch("tjump",  ()=>{ if(!keys.jumpHeld) keys.jump=true; keys.jumpHeld=true; },
                      ()=>{ keys.jumpHeld=false; });
  if("ontouchstart" in window){ document.getElementById("touch").classList.add("on"); }
