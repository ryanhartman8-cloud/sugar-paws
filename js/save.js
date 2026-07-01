  export function loadSave(){ try{ return JSON.parse(localStorage.getItem("sugarPawsSave")||"{}"); }catch(e){ return {}; } }
  export function getSave(k,d){ const s=loadSave(); return k in s ? s[k] : d; }
  export function setSave(k,v){ const s=loadSave(); s[k]=v; localStorage.setItem("sugarPawsSave",JSON.stringify(s)); }
