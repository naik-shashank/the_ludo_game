

let k=2999;
let cr=0,cy=0,cg=0,cb=0;


let arr=[]
let di=document.querySelector("#die")

function reduce(a)
{
 return new Promise(resolve =>{
let i=a.offsetHeight
 i=i-1;  

 let x=setInterval(()=>{
  if(i<1){
    
   window.clearInterval(x)
   resolve();
  }
  else{
    
  a.style.height=i.toString()+"px";
  a.style.width=i.toString()+"px";
  i=i-1
  }
 },8);

})
}

function produce(a,sz)
{
 return new Promise(resolve =>{
let i=a.offsetHeight
 i=i+1;  

 let x=setInterval(()=>{
  if(i>sz){
   
   window.clearInterval(x)
   resolve();
  }
  else{
    
  a.style.height=i.toString()+"px";
  a.style.width=i.toString()+"px";
  i=i+1
  }
 },8);

})
}


async function fun(subHost,a,p,d=null)
     {
      await reduce(a);
      subHost.append(a)
      await produce(a,p)
      if(d==1)
       a.innerText="click"
      
     }
function fun2(ele)
{
  
 let i=1  

 let x=setInterval(()=>{
  if(i>28)
   window.clearInterval(x);
  
  else{  
  ele.style.fontSize=i.toString()+"px";
  i=i+1
  }
 },8);
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function ishome(arr,ty)
{
 for(let i of arr)
  if(i==ty)
   return 1;
 return 0;
}

function checkworthy(element)
{
  for(let el of element)
  {
    if(el.getAttribute("Tadd")==el.getAttribute("Padd"))
    {
     if(n1==6){
      
      c=1;
      break;
     }
    }
    else if(el.getAttribute("vr")=="1")
    {
      
      let t1=parseInt(el.getAttribute("Tadd"))+parseInt(n1);
      if(t1<=parseInt(el.getAttribute("Vno"))+5)
      {
        c=1;
        break;
      }
    }
    else{
    c=1;
      break;
    }
  }
}

function kaiturn()
{
  if(turn==2000)
   elm="R"

  else if(turn==2001)
    elm="Y"
   
  else if(turn==2002)
    elm="G"
  
  else if(turn==2003)
    elm="B"
  
}
function selectkai()
{
  let kays=document.querySelectorAll(".kayi")
      for(let kay of kays)
      {
        if(kay.getAttribute("type")!=elm)
        {
         kay.style.boxShadow="0 0 0 0px orange"
         kay.setAttribute("allow","no")
        }
        else{
        kay.setAttribute("allow","yes")
        kay.style.boxShadow="0 0 0 1px orange";
        
        }
      }
}

function changedie()
{ 
  di.disabled=false;
  turn=(turn-2000+1)%4+2000;
  if(turn==2000 && ishome(arr,"R")==1)
      changedie()

  else if(turn==2001 && ishome(arr,"Y")==1)
      changedie()

  else if(turn==2002 && ishome(arr,"G")==1)
      changedie()
  
  else if(turn==2003 && ishome(arr,"B")==1)
      changedie()

      let fath=document.getElementById(turn.toString());
     
     di.innerText=null
     fun(fath,di,38,1)
}

for(let i=0;i<52;i++)
{
 let no=i.toString();
 let div=document.getElementById(no);

div.setAttribute("flag","0")

}

function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 800);
  });
}
async function setdelay() {
  await delay();
  n1=number.toString();
  element= document.querySelectorAll('[type="' + elm + '"]');
  checkworthy(element);
  if(c==0)
  { 
    sixCount=0
    changedie();
    kaiturn();
    selectkai();
   
  }
  else c=0;

}

let a=document.querySelectorAll(".btn");
let n1="0";
let turn=2000;
let elm;
let element;
let c=0;
let number
let sixCount=0
kaiturn();
selectkai();
di.innerText="click"
   di.addEventListener("click", ()=>{
    if(sixCount==2){
    number =getRandomInt(1,5); 
    sixCount=0;
    }
    else
     number =getRandomInt(1,6); 
     
     if(number==6)
       sixCount=sixCount+1
     else
      sixCount=0

    di.innerText=number.toString();
      setdelay(); 
      di.disabled=true;
      
      }) 
/*let dem=document.querySelectorAll(".demo")
for(let drr of dem)
{
  drr.addEventListener("click", ()=>{
    number = parseInt(drr.innerText)           //for die input manualy
    
   di.innerText=number.toString();
     setdelay(); 
     di.disabled=true;
     
     })
}*/

function remflag(a)
{
   let temp=document.getElementById(a);
   temp.setAttribute("flag","0")
}



function won(newhos)
{
  k=k+1;
  
  while(newhos.firstElementChild!=null)
    { 
      let a=newhos.firstElementChild
      a.remove();
    }

  let ele=document.getElementById(k.toString())
  ele.style.visibility="visible";
  newhos.append(ele)
  fun2(ele)

  if(k==3002)
  {
   if(cr<4)
   {
    let newhos=document.getElementById("R")
    won(newhos);
   }
  else if(cg<4)
       {
        let newhos=document.getElementById("G")
        won(newhos);
       }
   else if(cb<4)
       {
        let newhos=document.getElementById("B")
        won(newhos);
       }
   else if(cy<4)
       {
        let newhos=document.getElementById("Y")
        won(newhos);
       }
  }
}

function winning(a)
{
  let ty=a.getAttribute("type")
    if(ty=="R")
     {
      cr=cr+1;
      if(cr==4)
       {
        let newhos=document.getElementById("R")
        won(newhos);
        arr.push(ty);
       }
     }
    else if(ty=="G")
     {
      cg=cg+1;
      if(cg==4)
       {
        let newhos=document.getElementById("G")
        won(newhos);
        arr.push(ty);
       }
     }
     else if(ty=="B")
     {
      cb=cb+1;
      if(cb==4)
       {
        let newhos=document.getElementById("B")
        won(newhos);
        arr.push(ty);
       }
     }
     else if(ty=="Y")
     {
      cy=cy+1;
      if(cy==4)
       {
        let newhos=document.getElementById("Y")
        won(newhos);
        arr.push(ty);
       }
     }
}

function addtoV(a,n,x)
{ 
 
  if(x==2)
   {
    winning(a);
     
    let dest='h'+a.getAttribute("id");
    let hom=document.getElementById(dest);
    a.remove();
    a.style.boxShadow="0 0 0 0px orange"
    a.setAttribute("class",null)
    a.setAttribute("type",null)
    hom.style.backgroundColor=hom.getAttribute("color");
    turn=(turn-2000-1)%4+2000;
    n1="0";
    changedie();
    kaiturn();
    selectkai();
   
    
   }
  else
  {
   
  a.setAttribute("Tadd",n)
  let host=document.getElementById(n);
  let vnum=parseInt(host.getAttribute("step"));
  let c="1"
  do{
    vnum=vnum+1;
    let vi=document.getElementById(vnum.toString());
    if(vi.getAttribute("flag")=="0")
     {
      c="0";
      vi.setAttribute("flag",a.getAttribute("type"))
     }
  } while(c!="0");
  let subHost=document.getElementById(vnum.toString());
     
     fun(subHost,a,16)
     a.setAttribute("T1add",vnum.toString())
  
     if(n1==6) turn=(turn-2000-1)%4+2000;
     n1="0";
     changedie();
     kaiturn();
     selectkai();
     
   }
}





function add(a,n)
{
  let host=document.getElementById(n);
  if(host.getAttribute("flag")!=a.getAttribute("type"))
    a.setAttribute("Tadd",n)
  
  if(host.getAttribute("class")=="gatta")
   { 
    
    let gnum=parseInt(host.getAttribute("gattaNo"));
    let c="1"
    
    do
    {
     gnum=gnum+1;
     let di=document.getElementById(gnum.toString());
     
     if(di.getAttribute("flag")=="0")
     {
      c="0";
      di.setAttribute("flag",a.getAttribute("type"))
     }
    } while(c!="0");

    let subHost=document.getElementById(gnum.toString());
     
     fun(subHost,a,10)
     
     


     a.setAttribute("T1add",gnum.toString())
     
     if(n1==6) turn=(turn-2000-1)%4+2000;
     n1="0";
     changedie();
     kaiturn();
     selectkai();
    
     
   }

   else if(host.getAttribute("flag")=="0")
   {
   
    fun(host,a,33)
    host.setAttribute("flag",a.getAttribute("type"))

    if(n1==6) turn=(turn-2000-1)%4+2000;
    n1="0";
    changedie();
    kaiturn();
    selectkai();
   
  }
  else if(host.getAttribute("flag")!=a.getAttribute("type"))
  { 
    turn=(turn-2000-1)%4+2000;
    let hoyt=host.firstElementChild
    
    hoyt.setAttribute("Tadd",hoyt.getAttribute("Padd"))
    let ho=document.getElementById(hoyt.getAttribute("Padd"))

    fun(ho,hoyt,38)

    fun(host,a,33)
   
    host.setAttribute("flag",a.getAttribute("type"))

    
    n1="0";
    changedie();
    kaiturn();
    selectkai();
   
  }
  
}

function homeCondition(pres,a,n)
{
 if(parseInt(pres.getAttribute("id"))+n<parseInt(a.getAttribute("Vno"))+5)
  return 1;
 else if(parseInt(pres.getAttribute("id"))+n==parseInt(a.getAttribute("Vno"))+5)
  return 2;
 else return 0;
}

 let ka=document.querySelectorAll(".kayi")
 for(let kai of ka)
 {
  kai.addEventListener("click",()=>{
    if((kai.getAttribute("allow")==null || kai.getAttribute("allow")=="yes") && n1!="0")
    {
    let no=parseInt(n1);
    let pres=document.getElementById(kai.getAttribute("Tadd"))
    
    if(pres.getAttribute("class")=="inner1" || pres.getAttribute("class")=="inner2" ){
      if(no==6)
      {
       
        add(kai,kai.getAttribute("ent"))

      }
    
    }
    else if(pres.getAttribute("class")=="gatta" || pres.getAttribute("class")=="mid")
   {
     let num=parseInt(pres.getAttribute("id"));
     let m=parseInt(n1)

     for(let i=1;(i<=m) && (kai.getAttribute("vr")==="0");i=i+1)
     {

      num=(num+1)%52;
      if(num.toString()==kai.getAttribute("Hno"))
       {
  
       kai.setAttribute("vr","1")
        let v=parseInt(kai.getAttribute("Vno"));
        
        if(pres.getAttribute("class")=="gatta")
        remflag(kai.getAttribute("T1add"))
       else
        remflag(pres.getAttribute("id"))
       
        v=v+m-i;
        if(m-i==5) addtoV(kai,v.toString(),2);
        else addtoV(kai,v.toString(),1);
        
        break;
       }
       

     } 
     if(kai.getAttribute("vr")==="0")
     {
     if(pres.getAttribute("class")=="gatta")
      remflag(kai.getAttribute("T1add"))
     else
      remflag(pres.getAttribute("id"))
     num=num.toString();
     add(kai,num);  
    }
    
   }

   else
   {
    let m=parseInt(n1)
    let x=homeCondition(pres,kai,m);
    if(x!=0)
    {
     let vi=document.getElementById(kai.getAttribute("T1add"));
     vi.setAttribute("flag","0");
     let n0=parseInt(pres.getAttribute("id"));
     n0=n0+m;
     addtoV(kai,n0.toString(),x)
    }
    }
  }
  })
 }