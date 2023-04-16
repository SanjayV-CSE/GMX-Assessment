"use strict";
const vv = document.querySelector(".imgtah12");
vv.addEventListener("click", () => {
  window.location = "fold1/index.html";
});

fetch("https://hp-api.onrender.com/api/characters/staff")
  .then((res1) => res1.json())
  .then((data1) => {
    console.log(data1);
    for (let i = 0; i < data1.length; i++) {
      let j = 8;
      document.title = `${data1[j].name} 🪄`;
      vv.src = "images/Rectangle 48.png";
      document.querySelector(".txr4").textContent = `${data1[j].name}`;
      document.querySelector(".sp1").textContent = `${data1[j].species}`;
      document.querySelector(".sp2").textContent = `${data1[j].gender}`;
      document.querySelector(".sp3").textContent = `${data1[j].house}`;
      document.querySelector(".sp4").textContent = `   ${data1[j].yearOfBirth}`;
      document.querySelector(".sp5").textContent = `${data1[j].core}`;
      document.querySelector(".sp6").textContent = `${data1[j].eyeColour}`;
      document.querySelector(".sp7").textContent = `${data1[j].hairColour}`;
      document.querySelector(".sp8").textContent = "wood:holly";
      document.querySelector(".sp9").textContent = `stag`;
    }
  });
