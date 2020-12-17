function createAuraGlow() {
   //const count = 20;
   let auraGlow1 = document.getElementsByClassName("auraGlow");
   if (auraGlow1.length > 50)
      return;

   let bg = document.getElementById("container");
   let centerX = bg.offsetLeft + bg.offsetWidth / 2;
   let centerY = bg.offsetTop + bg.offsetHeight / 2;

   // for (let i = 0; i < count; i++) {
   //    let auraGlow = document.createElement("div");
   //    auraGlow.className = "auraGlow";
   //    bg.appendChild(auraGlow);
   // }
   let auraGlow = document.createElement("div");
   auraGlow.className = "auraGlow";
   bg.appendChild(auraGlow);

   //let auraGlow = document.getElementsByClassName("auraGlow");
   let glowHeight = Math.floor(Math.random() * 70 + 30);
   auraGlow.style.width = Math.floor(Math.random() * 200) + "px";
   auraGlow.style.height = glowHeight + "vh";

   // let isN = Math.floor(Math.random * 2) + 1;
   // if (isN == 1)
   // isN=-1;
   // else
   // isN=2
   if (Math.floor(Math.random() * 3) == 0)
      auraGlow.style.left = centerX - Math.floor(Math.random() * 300);
   else if (Math.floor(Math.random() * 3) == 1)
      auraGlow.style.left = centerX + Math.floor(Math.random() * 100);
   else {
      auraGlow.style.left = centerX - Math.floor(Math.random() * 200);
      auraGlow.style.opacity = "50%";
      auraGlow.style.background = "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(250,229,199,1) 33%, rgba(255,255,255,0) 100%)";

   }


   auraGlow.style.top = centerY;
   let distance = 0;
   var movement = setInterval(() => {
      distance += 100;
      auraGlow.style.top = centerY - distance;
      if (distance >= (centerY + glowHeight) * 2) {
         clearInterval(movement);
         bg.removeChild(auraGlow);
      }

   }, 50);
}

function aura() {
   const count = 20;
   let bg = document.getElementById("container");
   // for (let i = 0; i < count; i++) {
   //    let auraGlow = document.createElement("div");
   //    auraGlow.className = "auraGlow";
   //    bg.appendChild(auraGlow);
   // }
   // console.log("sweetAnita");
   // let centerX = bg.offsetLeft + bg.offsetWidth / 2;
   // let centerY = bg.offsetTop + bg.offsetHeight / 2;

   //let auraGlowCollective = document.getElementsByClassName("auraGlow");

   setInterval(() => {
      createAuraGlow();
   }, Math.floor(Math.random * 10000 + 5000));

}