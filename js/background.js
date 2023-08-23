const imges=["paris.jpeg","rom.jpeg","ban.jpeg"];
const chosenimg=imges[Math.floor(Math.random()*imges.length)]
const bgimg=document.createElement("img")
bgimg.src=`../img/${chosenimg}`
document.body.appendChild(bgimg);
