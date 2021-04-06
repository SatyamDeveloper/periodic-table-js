const group = document.querySelector("body > main > div");

const nonMetalColor = "#42A5F5";
const metalColor = "#FFF176";
const metalloidColor = "#FF9800";
const nobleGasColor = "#B71C1C";

const periodicData = [
  {
    atomicNumber: 1,
    symbol: "h",
    name: "hydrogen",
    atomicMass: 1.008,
    state: "g",
    backgroundColor: nonMetalColor,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    atomicNumber: 1,
    symbol: "h",
    name: "hydrogen",
    atomicMass: 1.008,
    state: "g",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 2,
    symbol: "he",
    name: "helium",
    atomicMass: 4.003,
    state: "g",
    backgroundColor: nonMetalColor,
    color: nobleGasColor,
  },
  // 2nd Group
  {
    atomicNumber: 3,
    symbol: "li",
    name: "lithium",
    atomicMass: 6.941,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 4,
    symbol: "be",
    name: "beryllium",
    atomicMass: 9.012,
    state: "s",
    backgroundColor: metalColor,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    atomicNumber: 5,
    symbol: "b",
    name: "boron",
    atomicMass: 10.811,
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 6,
    symbol: "c",
    name: "carbon",
    atomicMass: 12.011,
    state: "s",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 7,
    symbol: "n",
    name: "nitrogen",
    atomicMass: 14.007,
    state: "g",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 8,
    symbol: "o",
    name: "oxygen",
    atomicMass: 15.999,
    state: "g",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 9,
    symbol: "f",
    name: "fluorine",
    atomicMass: 18.998,
    state: "g",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 10,
    symbol: "ne",
    name: "neon",
    atomicMass: 20.18,
    state: "g",
    backgroundColor: nonMetalColor,
    color: nobleGasColor,
  },

  // 3rd Group
  {
    atomicNumber: 11,
    symbol: "na",
    name: "sodium",
    atomicMass: 22.99,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 12,
    symbol: "mg",
    name: "magnesium",
    atomicMass: 24.305,
    state: "s",
    backgroundColor: metalColor,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    atomicNumber: 13,
    symbol: "al",
    name: "aluminium",
    atomicMass: 26.982,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 14,
    symbol: "si",
    name: "silicon",
    atomicMass: 28.086,
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 15,
    symbol: "p",
    name: "phosphorus",
    atomicMass: 30.914,
    state: "s",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 16,
    symbol: "s",
    name: "sulphur",
    atomicMass: 32.066,
    state: "s",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 17,
    symbol: "cl",
    name: "chlorine",
    atomicMass: 35.453,
    state: "g",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 18,
    symbol: "ar",
    name: "argon",
    atomicMass: 39.948,
    state: "g",
    backgroundColor: nonMetalColor,
    color: nobleGasColor,
  },

  //4th  Group
  {
    atomicNumber: 19,
    symbol: "k",
    name: "potassium",
    atomicMass: 39.098,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 20,
    symbol: "ca",
    name: "calcium",
    atomicMass: 40.078,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 21,
    symbol: "sc",
    name: "scandium",
    atomicMass: 44.956,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 22,
    symbol: "ti",
    name: "titanium",
    atomicMass: 47.867,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 23,
    symbol: "v",
    name: "vanadium",
    atomicMass: 50.942,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 24,
    symbol: "cr",
    name: "chromium",
    atomicMass: 51.996,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 25,
    symbol: "mn",
    name: "manganese",
    atomicMass: 54.938,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 26,
    symbol: "fe",
    name: "iron",
    atomicMass: 55.845,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 27,
    symbol: "co",
    name: "cobalt",
    atomicMass: 58.933,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 28,
    symbol: "ni",
    name: "nickel",
    atomicMass: 58.693,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 29,
    symbol: "cu",
    name: "copper",
    atomicMass: 63.546,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 30,
    symbol: "zn",
    name: "zinc",
    atomicMass: 65.39,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 31,
    symbol: "ga",
    name: "gallium",
    atomicMass: 69.723,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 32,
    symbol: "ge",
    name: "germanium",
    atomicMass: 72.61,
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 33,
    symbol: "as",
    name: "arsenic",
    atomicMass: 74.922,
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 34,
    symbol: "se",
    name: "selenium",
    atomicMass: 78.96,
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 35,
    symbol: "br",
    name: "bromine",
    atomicMass: 79.904,
    state: "l",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 36,
    symbol: "kr",
    name: "krypton",
    atomicMass: 83.3,
    state: "g",
    backgroundColor: nonMetalColor,
    color: nobleGasColor,
  },

  //5th  Group
  {
    atomicNumber: 37,
    symbol: "rb",
    name: "rubidium",
    atomicMass: 85.468,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 38,
    symbol: "sr",
    name: "strontium",
    atomicMass: 87.62,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 39,
    symbol: "y",
    name: "yttrium",
    atomicMass: 88.906,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 40,
    symbol: "zr",
    name: "zirconium",
    atomicMass: 91.224,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 41,
    symbol: "nb",
    name: "niobium",
    atomicMass: 92.906,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 42,
    symbol: "mo",
    name: "molybdenum",
    atomicMass: 95.94,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 43,
    symbol: "tc",
    name: "technetium",
    atomicMass: "(98)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 44,
    symbol: "ru",
    name: "ruthenium",
    atomicMass: 101.07,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 45,
    symbol: "rh",
    name: "rhodium",
    atomicMass: 102.906,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 46,
    symbol: "pd",
    name: "palladium",
    atomicMass: 106.42,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 47,
    symbol: "ag",
    name: "silver",
    atomicMass: 107.868,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 48,
    symbol: "cd",
    name: "cadmium",
    atomicMass: 112.411,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 49,
    symbol: "in",
    name: "indium",
    atomicMass: 114.818,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 50,
    symbol: "sn",
    name: "tin",
    atomicMass: 118.71,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 51,
    symbol: "sb",
    name: "antimony",
    atomicMass: 121.76,
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 52,
    symbol: "te",
    name: "tellurium",
    atomicMass: 127.6,
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 53,
    symbol: "i",
    name: "iodine",
    atomicMass: 126.904,
    state: "s",
    backgroundColor: nonMetalColor,
  },
  {
    atomicNumber: 54,
    symbol: "xe",
    name: "xenon",
    atomicMass: 131.29,
    state: "g",
    backgroundColor: nonMetalColor,
    color: nobleGasColor,
  },

  //6th  Group
  {
    atomicNumber: 55,
    symbol: "cs",
    name: "caesium",
    atomicMass: 132.905,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 56,
    symbol: "ba",
    name: "barium",
    atomicMass: 137.327,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 57,
    symbol: "la",
    name: "lanthanum",
    atomicMass: 138.906,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 72,
    symbol: "hf",
    name: "hafnium",
    atomicMass: 178.49,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 73,
    symbol: "ta",
    name: "tantalum",
    atomicMass: 180.948,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 74,
    symbol: "w",
    name: "tungsten",
    atomicMass: 183.84,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 75,
    symbol: "re",
    name: "rhenium",
    atomicMass: 186.207,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 76,
    symbol: "os",
    name: "osmium",
    atomicMass: 190.23,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 77,
    symbol: "ir",
    name: "iridium",
    atomicMass: 192.217,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 78,
    symbol: "pt",
    name: "platinum",
    atomicMass: 195.078,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 79,
    symbol: "au",
    name: "gold",
    atomicMass: 196.967,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 80,
    symbol: "hg",
    name: "mercury",
    atomicMass: 200.59,
    state: "l",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 81,
    symbol: "ti",
    name: "thallium",
    atomicMass: 204.383,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 82,
    symbol: "pb",
    name: "lead",
    atomicMass: 207.2,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 83,
    symbol: "bi",
    name: "bismuth",
    atomicMass: 208.98,
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 84,
    symbol: "po",
    name: "polonium",
    atomicMass: "(209)",
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 85,
    symbol: "at",
    name: "astatine",
    atomicMass: "(210)",
    state: "s",
    backgroundColor: metalloidColor,
  },
  {
    atomicNumber: 86,
    symbol: "rn",
    name: "radon",
    atomicMass: "(222)",
    state: "g",
    backgroundColor: nonMetalColor,
    color: nobleGasColor,
  },

  //7th  Group
  {
    atomicNumber: 87,
    symbol: "fr",
    name: "francium",
    atomicMass: "(223)",
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 88,
    symbol: "ra",
    name: "radium",
    atomicMass: "(226)",
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 89,
    symbol: "ac",
    name: "actinium",
    atomicMass: "(227)",
    state: "s",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 104,
    symbol: "rf",
    name: "rutherfordium",
    atomicMass: "(261)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 105,
    symbol: "db",
    name: "dubnium",
    atomicMass: "(262)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 106,
    symbol: "sg",
    name: "seaborgium",
    atomicMass: "(263)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 107,
    symbol: "bh",
    name: "bohrium",
    atomicMass: "(262)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 108,
    symbol: "hs",
    name: "hassium",
    atomicMass: "(265)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 109,
    symbol: "mt",
    name: "meitnerium",
    atomicMass: "(266)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 110,
    symbol: "uun",
    name: "ununnilium",
    atomicMass: "(269)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 111,
    symbol: "uuu",
    name: "unununium",
    atomicMass: "(272)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 112,
    symbol: "uub",
    name: "ununbium",
    atomicMass: "(277)",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 113,
    symbol: "",
    name: "",
    atomicMass: "",
    state: "",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 114,
    symbol: "uuq",
    name: "ununquadium",
    atomicMass: "",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 115,
    symbol: "",
    name: "",
    atomicMass: "",
    state: "",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 116,
    symbol: "uuh",
    name: "ununhexium",
    atomicMass: "",
    state: "x",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 117,
    symbol: "",
    name: "",
    atomicMass: "",
    state: "",
    backgroundColor: metalColor,
  },
  {
    atomicNumber: 118,
    symbol: "",
    name: "",
    atomicMass: "",
    state: "",
    backgroundColor: metalColor,
  },
];

for (let i = 0; i < periodicData.length; i++) {
  const data = periodicData[i];
  const element = document.createElement("div");
  element.classList.add("element");
  const h4 = document.createElement("h4");
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const h5 = document.createElement("h5");
  const state = document.createElement("div");
  state.classList.add("state");
  const h2 = document.createElement("h2");
  state.appendChild(h2);
  element.appendChild(h4);
  element.appendChild(h1);
  element.appendChild(h3);
  element.appendChild(h5);
  element.appendChild(state);

  if (!data.atomicNumber) {
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
  } else {
    element.style.background = data.backgroundColor;
    h4.innerText = data.atomicNumber;
    h1.innerText = data.symbol;
    h1.style.color = data.color || "black";
    h3.innerText = data.name;
    h5.innerText = data.atomicMass;
    h2.innerText = data.state;
  }
  group.appendChild(element);
}

const element = document.querySelectorAll("body > main > div > div");
const pop = document.querySelector("body > div");
const closeBtn = document.querySelector("body > div > button");
const closeImg = document.querySelector("body > div > img");

function closePop() {
  pop.style.display = "none";
  pop.style.opacity = 0;
  pop.style.pointerEvents = "none";
}

closeImg.onclick = function closePop() {
  pop.style.display = "none";
  pop.style.opacity = 0;
  pop.style.pointerEvents = "none";
};

// closeBtn.onclick = function closePop() {
//   pop.style.display = "none";
//   pop.style.opacity = 0;
//   pop.style.pointerEvents = "none";
// };

const number = document.querySelector("body > div > div > h2");
const atomName = document.querySelector("body > div > div > h3");
const symbol = document.querySelector("body > div > div > h1");
const type = document.querySelector("body > div > div > h4.box.type");
const mass = document.querySelector("body > div > div > h4.box.mass");
const state = document.querySelector("body > div > div > div.box.state");
const valency = document.querySelector("body > div > div > div.box.valency");
const configuration = document.querySelector(
  "body > div > div > div.box.configuration"
);
const where = document.querySelector("body > div > div > div.box.location");
const shell = document.querySelector("body > div > div > div.box.shell");
const block = document.querySelector("body > div > div > div.box.block");

for (let i = 0; i < element.length; i++) {
  const cell = element[i];
  cell.onclick = function clickCell() {
    number.innerHTML = periodicData[i].atomicNumber;

    atomName.innerHTML = periodicData[i].name;

    symbol.innerHTML = periodicData[i].symbol;

    if (periodicData[i].backgroundColor === metalColor) {
      type.innerHTML = "metal";
    } else if (periodicData[i].backgroundColor === nonMetalColor) {
      type.innerHTML = "non-metal";
    } else {
      type.innerHTML = "metalloid";
    }

    mass.innerHTML = periodicData[i].atomicMass;

    state.innerHTML = periodicData[i].state;

    let lastShell = "";
    let lastShell1 = "";
    let lastShell2 = "";
    let lastShell3 = "";
    let lastShell4 = "";
    let lastShell5 = "";

    if (periodicData[i].atomicNumber) {
      if (periodicData[i].atomicNumber <= 2) {
        configuration.innerHTML = `Configuration: ${periodicData[i].atomicNumber}`;
      } else if (
        periodicData[i].atomicNumber <= 10 &&
        periodicData[i].atomicNumber >= 2
      ) {
        lastShell = `${periodicData[i].atomicNumber - 2}`;
        configuration.innerHTML = `Configuration: 2,${lastShell}`;
      } else if (
        periodicData[i].atomicNumber <= 28 &&
        periodicData[i].atomicNumber >= 10
      ) {
        lastShell = `${periodicData[i].atomicNumber - 10}`;

        if (lastShell <= 8) {
          configuration.innerHTML = `Configuration: 2,8,${lastShell}`;
        } else {
          lastShell1 = lastShell - 8;

          if (lastShell1 <= 8) {
            configuration.innerHTML = `Configuration: 2,8,8,${lastShell1}`;
          } else {
            lastShell2 = lastShell1 - 8;
            configuration.innerHTML = `Configuration: 2,8,8,8,${lastShell2}`;
          }
        }
      } else if (
        periodicData[i].atomicNumber <= 60 &&
        periodicData[i].atomicNumber >= 28
      ) {
        lastShell = periodicData[i].atomicNumber - 28;
        if (lastShell <= 8) {
          configuration.innerHTML = `Configuration: 2,8,18,${lastShell}`;
        } else if (lastShell >= 8) {
          lastShell1 = lastShell - 8;
          if (lastShell1 <= 8) {
            configuration.innerHTML = `Configuration: 2,8,18,8,${lastShell1}`;
          } else if (lastShell1 <= 10) {
            lastShell2 = lastShell1 - 8;
            configuration.innerHTML = `Configuration: 2,8,18,8,8,${lastShell2}`;
          } else if (lastShell1 >= 10) {
            lastShell2 = lastShell1 - 10;
            if (lastShell2 <= 8) {
              configuration.innerHTML = `Configuration: 2,8,18,18,${lastShell2}`;
            } else if (lastShell2 >= 8) {
              lastShell3 = lastShell2 - 8;
              configuration.innerHTML = `Configuration: 2,8,18,18,8,${lastShell3}`;
            }
          }
        }
      } else if (
        periodicData[i].atomicNumber <= 110 &&
        periodicData[i].atomicNumber >= 60
      ) {
        lastShell = periodicData[i].atomicNumber - 68;
        if (lastShell <= 8) {
          configuration.innerHTML = `Configuration: 2,8,18,32,${lastShell}`;
        } else if (lastShell <= 10) {
          lastShell1 = lastShell - 8;
          configuration.innerHTML = `Configuration: 2,8,18,32,8,8,${lastShell1}`;
        } else if (lastShell >= 10) {
          lastShell1 = lastShell - 10;
          if (lastShell1 <= 8) {
            configuration.innerHTML = `Configuration: 2,8,18,32,18,${lastShell1}`;
          } else if (lastShell1 >= 8) {
            lastShell2 = lastShell1 - 8;
            if (lastShell2 <= 8) {
              configuration.innerHTML = `Configuration: 2,8,18,32,18,8,${lastShell2}`;
            } else if (lastShell2 >= 8) {
              lastShell3 = lastShell2 - 8;
              if (lastShell3 >= 10) {
                lastShell4 = lastShell3 - 6;
                if (lastShell4 <= 8) {
                  configuration.innerHTML = `Configuration: 2,8,18,32,32,8,${lastShell4}`;
                } else if (lastShell4 >= 8) {
                  lastShell5 = lastShell4 - 8;
                  configuration.innerHTML = `Configuration: 2,8,18,32,32,8,8,${lastShell5}`;
                }
              }
            }
          }
        }
      } else if (
        periodicData[i].atomicNumber <= 118 &&
        periodicData[i].atomicNumber >= 110
      ) {
        lastShell = periodicData[i].atomicNumber - 108;
        if (lastShell <= 2) {
          configuration.innerHTML = `Configuration: 2,8,18,32,32,8,8,${lastShell}`;
        } else {
          lastShell1 = lastShell - 2;
          configuration.innerHTML = `Configuration: 2,8,18,32,50,${lastShell1}`;
        }
      } else {
        configuration.innerHTML = "I don't Know";
      }
    }

    const myData = configuration.innerHTML.replace("Configuration: ", "");
    const arr = myData.split(",");

    const lastVal = arr.length - 1;
    let val = arr[lastVal];

    if (val) {
      if (val < 4) {
        valency.innerHTML = `valency: ${val}, valence electron : ${val}`;
      } else {
        const a = 8 - val;
        valency.innerHTML = `valency: ${a}, valence electron : ${val}`;
      }
    }

    shell.innerHTML = `No. Of Shell: ${arr.length}`;

    if (i) {
      if (
        periodicData[i].atomicNumber === 1 ||
        periodicData[i].atomicNumber === 3 ||
        periodicData[i].atomicNumber === 4 ||
        periodicData[i].atomicNumber === 11 ||
        periodicData[i].atomicNumber === 12 ||
        periodicData[i].atomicNumber === 19 ||
        periodicData[i].atomicNumber === 20 ||
        periodicData[i].atomicNumber === 37 ||
        periodicData[i].atomicNumber === 38 ||
        periodicData[i].atomicNumber === 55 ||
        periodicData[i].atomicNumber === 56 ||
        periodicData[i].atomicNumber === 87 ||
        periodicData[i].atomicNumber === 88
      ) {
        block.innerHTML = `s-block`;
      } else if (
        (periodicData[i].atomicNumber >= 21 &&
          periodicData[i].atomicNumber <= 30) ||
        (periodicData[i].atomicNumber >= 39 &&
          periodicData[i].atomicNumber <= 48) ||
        (periodicData[i].atomicNumber >= 57 &&
          periodicData[i].atomicNumber <= 80) ||
        (periodicData[i].atomicNumber >= 89 &&
          periodicData[i].atomicNumber <= 112)
      ) {
        console.log(periodicData[i].atomicNumber);
        block.innerHTML = `p-block`;
      } else if (
        (periodicData[i].atomicNumber >= 1 &&
          periodicData[i].atomicNumber <= 2) ||
        (periodicData[i].atomicNumber >= 5 &&
          periodicData[i].atomicNumber <= 10) ||
        (periodicData[i].atomicNumber >= 13 &&
          periodicData[i].atomicNumber <= 18) ||
        (periodicData[i].atomicNumber >= 31 &&
          periodicData[i].atomicNumber <= 36) ||
        (periodicData[i].atomicNumber >= 49 &&
          periodicData[i].atomicNumber <= 54) ||
        (periodicData[i].atomicNumber >= 81 &&
          periodicData[i].atomicNumber <= 86) ||
        (periodicData[i].atomicNumber >= 113 &&
          periodicData[i].atomicNumber <= 118)
      ) {
        block.innerHTML = `d-block`;
      } else {
        block.innerHTML = `f-block`;
      }
    }

    let period = "";
    let group = "";

    if (i) {
      if (i <= 0 || i <= 17) {
        period = 1;
      } else if (i <= 18 || i <= 35) {
        period = 2;
      } else if (i <= 36 || i <= 53) {
        period = 3;
      } else if (i <= 54 || i <= 71) {
        period = 4;
      } else if (i <= 72 || i <= 89) {
        period = 5;
      } else if (i <= 90 || i <= 107) {
        period = 6;
      } else if (i <= 108 || i <= 127) {
        period = 7;
      } else {
        period = 1;
      }
    }

    if (i) {
      if (
        i === 0 ||
        i === 18 ||
        i === 36 ||
        i === 54 ||
        i === 72 ||
        i === 90 ||
        i === 108
      ) {
        group = 1;
      } else if (
        i === 19 ||
        i === 37 ||
        i === 55 ||
        i === 73 ||
        i === 91 ||
        i === 109
      ) {
        group = 2;
      } else if (i === 56 || i === 74 || i === 92 || i === 110) {
        group = 3;
      } else if (i === 57 || i === 75 || i === 93 || i === 111) {
        group = 4;
      } else if (i === 58 || i === 76 || i === 94 || i === 112) {
        group = 5;
      } else if (i === 59 || i === 77 || i === 95 || i === 113) {
        group = 6;
      } else if (i === 60 || i === 78 || i === 96 || i === 114) {
        group = 7;
      } else if (i === 61 || i === 79 || i === 97 || i === 115) {
        group = 8;
      } else if (i === 62 || i === 80 || i === 98 || i === 116) {
        group = 9;
      } else if (i === 63 || i === 81 || i === 99 || i === 117) {
        group = 10;
      } else if (i === 64 || i === 82 || i === 100 || i === 118) {
        group = 11;
      } else if (i === 65 || i === 83 || i === 101 || i === 119) {
        group = 12;
      } else if (
        i === 30 ||
        i === 48 ||
        i === 66 ||
        i === 84 ||
        i === 102 ||
        i === 120
      ) {
        group = 13;
      } else if (
        i === 31 ||
        i === 49 ||
        i === 67 ||
        i === 85 ||
        i === 103 ||
        i === 121
      ) {
        group = 14;
      } else if (
        i === 32 ||
        i === 50 ||
        i === 68 ||
        i === 86 ||
        i === 104 ||
        i === 122
      ) {
        group = 15;
      } else if (
        i === 33 ||
        i === 51 ||
        i === 69 ||
        i === 87 ||
        i === 105 ||
        i === 123
      ) {
        group = 16;
      } else if (
        i === 16 ||
        i === 34 ||
        i === 52 ||
        i === 70 ||
        i === 88 ||
        i === 106 ||
        i === 124
      ) {
        group = 17;
      } else if (
        i === 17 ||
        i === 35 ||
        i === 53 ||
        i === 71 ||
        i === 89 ||
        i === 107 ||
        i === 125
      ) {
        group = 18;
      }
    }

    where.innerHTML = `Period: ${period}, Group : ${group}`;
    pop.style.display = "flex";
    pop.style.opacity = 1;
    pop.style.pointerEvents = "all";
  };
}
