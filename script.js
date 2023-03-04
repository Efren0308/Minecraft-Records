let trophy1 = document.querySelector("#trophy1");
let trophy2 = document.querySelector("#trophy2");
let trophy3 = document.querySelector("#trophy3");
let trophy4 = document.querySelector("#trophy4");
let trophy5 = document.querySelector("#trophy5");
let trophy6 = document.querySelector("#trophy6");
let trophy7 = document.querySelector("#trophy7");
let trophy8 = document.querySelector("#trophy8");

var mtl = "Showing The Trophy: ";
let allAwardBoxes = document.querySelectorAll(".award-box");
let allVideoBoxes = document.querySelectorAll(".video-box");
let allTrophys = document.querySelectorAll(".trophy-case")
let CreatorAward = document.querySelectorAll(".CreatorAward");
let PVPAward = document.querySelectorAll(".PVPAward");
let SpeedRunAward = document.querySelectorAll(".SpeedRunAward");
let WinStreakAward = document.querySelectorAll(".WinStreakAward");
let RedstoneAward = document.querySelectorAll(".RedstoneAward");
let PotatoAward = document.querySelectorAll(".PotatoAward");
let Communityaward = document.querySelectorAll(".Communityaward");

let MinecraftImages = document.querySelectorAll(".MinecraftImages");
function hide() {
  hideAwards();
  hideVideos();
};
hide();

function hideAwards() {
  allAwardBoxes.forEach((div) => {
    div.style.display = "none";
  });
  console.log('hid awards');
};
function HideMinecarf() {
  MinecraftImages.forEach((div) => {
    div.style.display = "none";  
  });
  console.log('hid awards');
};

function hideVideos() {
  allVideoBoxes.forEach((div) => {
    div.style.display = "none";  

  });
  console.log('hid videos');
  
};

function hideBackground() {
  allVideoBoxes.forEach((div) => {
    div.style.display = "none";  

  });
  console.log('hid videos');
  
};


// .style.display.background = "hex";
  function colorchanga() {
  trophy1.style.backgroundColor = "gold";
  trophy2.style.backgroundColor = "gold";
  trophy3.style.backgroundColor = "gold";
  trophy4.style.backgroundColor = "gold";
  trophy5.style.backgroundColor = "gold";
  trophy5.style.backgroundColor = "gold";
  trophy6.style.backgroundColor = "gold";
  trophy7.style.backgroundColor = "gold";
  }

function yttrophy() {
 hide();
  CreatorAward.forEach((div) => {
    div.style.display = "block";
   
  });
  console.log("hehahaha");
  HideMinecarf()
  colorchanga()
    setTimeout(() => {    trophy1.style.backgroundColor = "green";
 }, 5);

}
function diamondtrophy() {
hide();
  PVPAward.forEach((div) => {
    div.style.display = "block";
  });
  console.log("hehahaha");
  HideMinecarf()

  colorchanga()
    setTimeout(() => {    trophy2.style.backgroundColor = "green";
 }, 5);
}

function speedruntrophy() {
hide()
  SpeedRunAward.forEach((div) => {
    div.style.display = "block";
  });
  console.log("hehahaha");
  HideMinecarf()
  colorchanga()
    setTimeout(() => {    trophy3.style.backgroundColor = "green";
 }, 5);
}
function wstrophy() {
hide()
  WinStreakAward.forEach((div) => {
    div.style.display = "block";
  });

  console.log("hehahaha");
    HideMinecarf()
     colorchanga()
    setTimeout(() => {    trophy4.style.backgroundColor = "green";
 }, 5);
}

function redstonetrophy() {
hide();
  RedstoneAward.forEach((div) => {
    div.style.display = "block";
  });
  console.log("hehahaha");
  HideMinecarf()
    colorchanga()
    setTimeout(() => {    trophy5.style.backgroundColor = "green";
 }, 5);
}  

function potatotrophy() {
hide()

    PotatoAward.forEach((div) => {
    div.style.display = "block";
  });

  console.log("hehahaha");
  HideMinecarf()
  colorchanga()
    setTimeout(() => {    trophy6.style.backgroundColor = "green";
 }, 5);
}
function Communitytrophy() {
hide()
    Communityaward.forEach((div) => {
    div.style.display = "block";
  });
  console.log("hehahaha");
HideMinecarf()
  colorchanga()
    setTimeout(() => {    trophy7.style.backgroundColor = "green";
 }, 5);
}






