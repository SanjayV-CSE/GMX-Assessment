"use strict";
const vv = document.querySelector(".imgtah12");

fetch("https://hp-api.onrender.com/api/characters/students")
  .then((res1) => res1.json())
  .then((data1) => {
    console.log(data1);
    for (let i = 0; i < data1.length; i++) {
      vv.src = `${data1[4].image}`;
      document.querySelector(".sp1").textContent = `${data1[4].species}`;
      document.querySelector(".sp2").textContent = `${data1[4].gender}`;
      document.querySelector(".sp3").textContent = `${data1[4].house}`;
      document.querySelector(".sp4").textContent = `   ${data1[4].yearOfBirth}`;
      document.querySelector(".sp5").textContent = `${data1[4].core}`;
      document.querySelector(".sp6").textContent = `${data1[4].eyeColour}`;
      document.querySelector(".sp7").textContent = `${data1[4].hairColour}`;
      document.querySelector(".sp8").textContent = "wood:holly";
      document.querySelector(".sp9").textContent = `stag`;
    }
  });
