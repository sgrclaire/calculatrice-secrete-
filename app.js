const display = document.getElementById('display');
const keys = document.querySelector('.keys');
let expr = "";
keys.addEventListener('click', e=>{
  if(!e.target.matches('button')) return;
  let t = e.target.textContent;
  if(t=="C") expr=""; else if(t=="=") expr=eval(expr); else expr+=t;
  display.textContent = expr || "0";
});
