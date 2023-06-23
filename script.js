var cel = document.getElementById("inp1");
var fah = document.getElementById("inp2");
var kil = document.getElementById("inp3");


cel.addEventListener('input',function(){
   let c=this.value;
   let f=(c*9/5) + 32 ;
   let k= (c*5/5)+ 273 ;
   if (!Number.isInteger(f) && !Number.isInteger(k)) {
       f=f.toFixed(2);
       k=k.toFixed(2);
   }
   fah.value=f;
   kil.value=k;
});
fah.addEventListener('input',function(){
    let f=this.value;
    let c= (f - 32)*5/9;
    let k= (f - 32)*5/9 + 273;
    if (!Number.isInteger(c) && !Number.isInteger(k)) {
       c=c.toFixed(2);
       k=k.toFixed(2);
   }
    cel.value=c;
    kil.value=k;
});
kil.addEventListener('input',function(){
    let k=this.value;
    let c= k - 273;
    let f=((k-273)*9/5) + 32;
    if (!Number.isInteger(c) && !Number.isInteger(f)) {
       c=c.toFixed(2);
       f=f.toFixed(2);
   }
    fah.value=f;
    cel.value=c;
});
