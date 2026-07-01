  // ---------- Physics constants ----------
  // Tuned "challenging but fair": jump rise ~150px, max gap ~181px.
  export const GRAV = 0.6, JUMP_VEL = -13.4, GROUND_Y = 430, WORLD_H = 600;
  export const SPD_SMALL = 4.2, SPD_BIG = 4.8, VX_EASE = 0.34;
  export const COYOTE = 7, JUMP_BUFFER = 7;
  export const SMALL = {w:30, h:30}, BIG = {w:36, h:46};

  export function aabb(a,b){ return a.x < b.x+b.w && a.x+a.w > b.x && a.y < b.y+b.h && a.y+a.h > b.y; }

  // One physics step for the player: moving platforms, input easing, jump
  // (coyote time + buffer), gravity, fly thrust, axis-separated collision,
  // and moving-platform carry. Pure of DOM/canvas/audio so a Node-based
  // level validator can drive it; side effects go through the fx callbacks.
  export function stepPlayer(p, platforms, keys, fx = { jump(){}, flyPuff(){} }){
    // moving platforms
    for(const pl of platforms){
      if(pl.baseX === undefined) continue;
      const prevX = pl.x;
      pl.phase += 0.022 * pl.moveSpeed;
      pl.x = pl.baseX + pl.moveX * Math.sin(pl.phase);
      pl.dx = pl.x - prevX;
    }

    // horizontal input
    const speed = p.big ? SPD_BIG : SPD_SMALL;
    let ax = 0;
    if(keys.left)  ax -= 1;
    if(keys.right) ax += 1;
    if(ax!==0){ p.facing = ax>0?1:-1; }
    const target = ax*speed;
    p.vx += (target - p.vx)*VX_EASE;
    if(Math.abs(p.vx)<0.05) p.vx=0;

    // jump: coyote-time + input buffer
    if(p.onGround) p.coyote = COYOTE; else if(p.coyote>0) p.coyote--;
    if(keys.jump){ p.jumpBuf = JUMP_BUFFER; keys.jump=false; }
    if(p.jumpBuf>0) p.jumpBuf--;
    if(p.jumpBuf>0 && p.coyote>0){
      p.vy = JUMP_VEL; p.onGround=false; p.coyote=0; p.jumpBuf=0; fx.jump(p);
    }
    if(!keys.jumpHeld && p.vy<-6 && p.activePower!=="fly") p.vy = -6;   // variable jump height

    // gravity
    p.vy += GRAV;
    if(p.vy>16) p.vy=16;

    // flying power-up: hold jump to thrust upward (overrides terminal cap upward)
    if(p.activePower==="fly" && keys.jumpHeld){
      p.vy -= 1.8;
      if(p.vy < -8) p.vy = -8;
      if(p.animT % 3 === 0){
        fx.flyPuff({
          x:p.x + p.w/2 + (Math.random()-.5)*8, y:p.y + p.h - 2,
          vx:(Math.random()-.5)*1.2, vy:1.2+Math.random()*1.8,
          life:0.6, color: Math.random()<0.5 ? "#ffd23f" : "#ff8a4d",
          r:Math.random()*2+1.5
        });
      }
    }
    // soft ceiling so flying doesn't leave the visible play area
    if(p.y < 0){ p.y = 0; if(p.vy<0) p.vy = 0; }

    // move + collide X
    p.x += p.vx;
    for(const pl of platforms){
      if(aabb(p,pl)){
        if(p.vx>0) p.x = pl.x - p.w;
        else if(p.vx<0) p.x = pl.x + pl.w;
        p.vx=0;
      }
    }
    if(p.x<0) p.x=0;

    // move + collide Y
    p.y += p.vy;
    p.onGround=false;
    for(const pl of platforms){
      if(aabb(p,pl)){
        if(p.vy>0){ p.y = pl.y - p.h; p.vy=0; p.onGround=true; }
        else if(p.vy<0){ p.y = pl.y + pl.h; p.vy=0; }
      }
    }

    // carry player horizontally on moving platforms
    if(p.onGround){
      for(const pl of platforms){
        if(!pl.dx) continue;
        if(Math.abs((p.y + p.h) - pl.y) < 2 && p.x + p.w > pl.x && p.x < pl.x + pl.w){
          p.x += pl.dx;
          if(p.x < 0) p.x = 0;
          break;
        }
      }
    }
  }
