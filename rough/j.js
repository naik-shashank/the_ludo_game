let p=document.getElementById("ab")
let x=0
r="red"
g="green"
let a=setInterval(() => {
    if(i%2==0)
     p.style.color="red"
    else
    p.style.color="green"
    if(i==3)
      window.clearInterval(a)
    i=i+1
}, 25);
