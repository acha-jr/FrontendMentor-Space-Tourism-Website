//side navigation toggle
const menu = document.getElementById("menu");
const menuClose = document.getElementById("close");
const nav = document.querySelector("nav");
//opens side nav
menu.addEventListener("click", () => {
  nav.style.width = "254px";
});
//closes side nav
menuClose.addEventListener("click", () => {
  nav.style.width = "0px";
});

//Destination change
const moon = document.querySelector(".moon");
const mars = document.querySelector(".mars");
const europa = document.querySelector(".europa");
const titan = document.querySelector(".titan");
const moonLink = document.querySelectorAll(".moon-link");
const marsLink = document.querySelectorAll(".mars-link");
const europaLink = document.querySelectorAll(".europa-link");
const titanLink = document.querySelectorAll(".titan-link");
//remove default behaviour for planet links
const planet = document.querySelectorAll(".planet");
planet.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
//view mars
marsLink.forEach((e) => {
  e.addEventListener("click", () => {
    moon.style.display = "none";
    europa.style.display = "none";
    titan.style.display = "none";
    mars.style.display = "block";
  });
});
//view europa
europaLink.forEach((e) => {
  e.addEventListener("click", () => {
    moon.style.display = "none";
    europa.style.display = "block";
    titan.style.display = "none";
    mars.style.display = "none";
  });
});
//view titan
titanLink.forEach((e) => {
  e.addEventListener("click", () => {
    moon.style.display = "none";
    europa.style.display = "none";
    titan.style.display = "block";
    mars.style.display = "none";
  });
});
//view moon
moonLink.forEach((e) => {
  e.addEventListener("click", () => {
    moon.style.display = "block";
    europa.style.display = "none";
    titan.style.display = "none";
    mars.style.display = "none";
  });
});

//Crew change
const commander = document.querySelector(".commander");
const specialist = document.querySelector(".specialist");
const pilot = document.querySelector(".pilot");
const engineer = document.querySelector(".engineer");
const commanderLink = document.querySelectorAll(".commander-link");
const specialistLink = document.querySelectorAll(".specialist-link");
const pilotLink = document.querySelectorAll(".pilot-link");
const engineerLink = document.querySelectorAll(".engineer-link");
//remove default behaviour for crew links
const crew = document.querySelectorAll(".crew");
crew.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
//view commander
commanderLink.forEach((e) => {
  e.addEventListener("click", () => {
    commander.style.display = "block";
    specialist.style.display = "none";
    pilot.style.display = "none";
    engineer.style.display = "none";
  });
});
//view specialist
specialistLink.forEach((e) => {
  e.addEventListener("click", () => {
    commander.style.display = "none";
    specialist.style.display = "block";
    pilot.style.display = "none";
    engineer.style.display = "none";
  });
});
//view pilot
pilotLink.forEach((e) => {
  e.addEventListener("click", () => {
    commander.style.display = "none";
    specialist.style.display = "none";
    pilot.style.display = "block";
    engineer.style.display = "none";
  });
});
//view engineer
engineerLink.forEach((e) => {
  e.addEventListener("click", () => {
    commander.style.display = "none";
    specialist.style.display = "none";
    pilot.style.display = "none";
    engineer.style.display = "block";
  });
});

//Tech change
const vehicle = document.querySelector(".vehicle");
const port = document.querySelector(".port");
const capsule = document.querySelector(".capsule");
const vehicleLink = document.querySelectorAll(".vehicle-link");
const portLink = document.querySelectorAll(".port-link");
const capsuleLink = document.querySelectorAll(".capsule-link");
//remove default links for tech
const tech = document.querySelectorAll(".tech");
tech.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
//view launch vehicle
vehicleLink.forEach((e) => {
  e.addEventListener("click", () => {
    vehicle.style.display = "block";
    port.style.display = "none";
    capsule.style.display = "none";
  });
});
//view spaceport
portLink.forEach((e) => {
  e.addEventListener("click", () => {
    vehicle.style.display = "none";
    port.style.display = "block";
    capsule.style.display = "none";
  });
});
//view space capsule
capsuleLink.forEach((e) => {
  e.addEventListener("click", () => {
    vehicle.style.display = "none";
    port.style.display = "none";
    capsule.style.display = "block";
  });
});
