"use strict";
const vv = document.querySelector(".imgtah12");

fetch("https://hp-api.onrender.com/api/characters/students")
  .then((res1) => res1.json())
  .then((data1) => {
    console.log(data1);
    for (let i = 0; i < data1.length; i++) {
      let j = 3;
      vv.src = `${data1[j].image}`;
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
