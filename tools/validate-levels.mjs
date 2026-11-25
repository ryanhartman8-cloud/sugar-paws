// Playability validator — drives the real stepPlayer over the real LEVELS data
// and checks every world can actually be finished.
//
//   node tools/validate-levels.mjs
//
// A level passes if SOME sensible strategy clears it, because players retry:
// the bot varies how early it jumps at a ledge, whether it hops stepping
// stones, and the moving-platform phase it happens to meet. It has caught real
// design bugs — a pond with no bridging branch, a pickup pinned under a stone.
import { stepPlayer, GROUND_Y, WORLD_H, BIG } from "../js/physics.js";
import { LEVELS } from "../js/levels.js";

const FLOAT_LIFT = 22;

// mirror loadLevel's platform transform (deterministic phase, for repeatability)
function buildPlatforms(L, phase){
  return L.platforms.map(pl => {
    const p2 = (pl.y < 420 && pl.y + pl.h < 430) ? {...pl, y: pl.y - FLOAT_LIFT} : {...pl};
    if(p2.moveX !== undefined){ p2.baseX = p2.x; p2.phase = phase; p2.dx = 0; }
    return p2;
  });
}

function run(idx, edgeDist, phase, hop){
  const L = LEVELS[idx];
  const platforms = buildPlatforms(L, phase);
  const p = {x:40, y:GROUND_Y-BIG.h, w:BIG.w, h:BIG.h, vx:0, vy:0, onGround:true, big:true,
             coyote:0, jumpBuf:0, facing:1, animT:0, activePower:null};
  const keys = {left:false, right:true, jump:false, jumpHeld:false};
  let bonks = 0, jumps = 0, stuck = 0, maxX = 0;
  const fx = { jump(){}, flyPuff(){}, bonk(){ bonks++; } };

  const overhead = () => platforms.some(pl => pl.y + pl.h <= p.y + 1 && pl.y + pl.h > p.y - 160
                                        && p.x + p.w > pl.x && p.x < pl.x + pl.w);
  for(let f=0; f<8000; f++){
    if(keys.jumpHeld && p.vy >= 0 && !p.onGround) keys.jumpHeld = false;
    if(p.onGround){
      keys.jumpHeld = false;
      const on = platforms.find(pl => Math.abs((p.y+p.h) - pl.y) < 2 && p.x+p.w > pl.x && p.x < pl.x+pl.w);
      // edge-jump: near the end of the platform underfoot, nothing ahead at the
      // same height, and no ceiling to bonk (else run off and coyote-jump)
      if(on && (on.x + on.w) - (p.x + p.w) < edgeDist && !overhead()){
        const aheadX = on.x + on.w + 10;
        const ahead = platforms.some(pl => pl !== on && aheadX >= pl.x && aheadX <= pl.x+pl.w
                                     && pl.y <= on.y + 4 && pl.y >= on.y - 60);
        if(!ahead){ keys.jump = true; keys.jumpHeld = true; jumps++; }
      }
      // stone-hopping: jump onto a higher float ahead, given runway to clear its top
      if(hop && on && !keys.jumpHeld && !overhead()){
        const gapAhead = on.x + on.w - (p.x + p.w) < hop;
        const target = platforms.find(pl => {
          if(pl === on || pl.y + pl.h >= 429) return false;
          const dx = pl.x - (p.x + p.w);
          if(pl.x + pl.w <= p.x + p.w || dx >= 100) return false;
          const rise = (p.y + p.h) - pl.y;
          if(pl.y >= on.y || rise > 150) return false;
          let k = 0, cum = 0, v = 13.4;
          while(cum < rise && k < 30){ cum += v; v -= 0.6; k++; }
          return dx >= k * 4.8 - 16;
        });
        if(gapAhead && target){ keys.jump = true; keys.jumpHeld = true; jumps++; }
      }
      // blocked-jump: holding right but not moving (pipe / stair / wall) -> hop
      if(!keys.jumpHeld && Math.abs(p.vx) < 0.6 && f > 30){
        if(++stuck > 4){ keys.jump = true; keys.jumpHeld = true; stuck = 0; jumps++; }
      } else if(Math.abs(p.vx) >= 0.6) stuck = 0;
    } else if(p.coyote > 0 && p.vy > 0 && !keys.jumpHeld && !overhead()){
      keys.jump = true; keys.jumpHeld = true; jumps++;
    }
    stepPlayer(p, platforms, keys, fx);
    p.animT++;
    maxX = Math.max(maxX, p.x);
    if(p.y > WORLD_H) return {ok:false, reason:"fell", x:Math.round(p.x), maxX:Math.round(maxX), f, bonks, jumps};
    if(p.x + p.w >= L.goalX) return {ok:true, x:Math.round(p.x), f, bonks, jumps};
  }
  return {ok:false, reason:"timeout", x:Math.round(p.x), maxX:Math.round(maxX), f:8000, bonks, jumps};
}

const EDGE  = [40, 60, 25, 80, 100, 12];
const PHASE = [0, 0.8, 1.6, 2.4, 3.1, 3.9, 4.7, 5.5];
const HOP   = [0, 200, 420];

let fails = 0;
for(let i=0; i<LEVELS.length; i++){
  let best = null, pass = null;
  outer: for(const hop of HOP) for(const e of EDGE) for(const ph of PHASE){
    const r = run(i, e, ph, hop);
    if(r.ok){ pass = {...r, e, ph, hop}; break outer; }
    if(!best || r.maxX > best.maxX) best = {...r, e, ph, hop};
  }
  const name = LEVELS[i].name.padEnd(26);
  if(pass){
    console.log(`W${String(i+1).padStart(2)} ${name} OK   x=${String(pass.x).padStart(4)} frames=${pass.f} jumps=${pass.jumps}${pass.bonks?` bonks=${pass.bonks}`:""}${pass.hop?" hop":""}`);
  } else {
    fails++;
    console.log(`W${String(i+1).padStart(2)} ${name} FAIL best maxX=${best.maxX} reason=${best.reason} (edge=${best.e}, phase=${best.ph}, hop=${best.hop})`);
  }
}
console.log(fails ? `\n${fails} world(s) FAILED` : `\nall ${LEVELS.length} worlds clear`);
process.exit(fails ? 1 : 0);
