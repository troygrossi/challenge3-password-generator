// Assignment code here

// Get references to the #generate element
var beginEl = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var criteriaLength = {
  divLengthEl: document.createElement("div"),
  inputLengthEl: document.createElement("input"),
  labelLengthEl: document.createElement("label"),
  constructor: function () {
    this.divLengthEl.setAttribute("class", "criteria-length");
    this.inputLengthEl.setAttribute("type", "text");
    this.inputLengthEl.setAttribute("id", "length");
    this.inputLengthEl.setAttribute("maxlength", "15");
    this.labelLengthEl.setAttribute("for", "length");
    this.labelLengthEl.textContent = "Amount of characters:  ";
    this.divLengthEl.append(this.labelLengthEl, this.inputLengthEl);
  },
};
criteriaLength.constructor();

var criteriaCase = {
  divCaseEl: document.createElement("div"),
  textCaseEl: document.createElement("p"),
  inputLowerEl: document.createElement("input"),
  labelLowerEl: document.createElement("label"),
  inputUpperEl: document.createElement("input"),
  labelUpperEl: document.createElement("label"),
  constructor: function () {
    this.divCaseEl.setAttribute("class", "criteria-case");
    this.textCaseEl.textContent = "Possible character cases:  ";
    this.inputLowerEl.setAttribute("id", "lower");
    this.inputLowerEl.setAttribute("type", "checkbox");
    this.labelLowerEl.setAttribute("for", "lower");
    this.labelLowerEl.textContent = "Lower";
    this.inputUpperEl.setAttribute("id", "upper");
    this.inputUpperEl.setAttribute("type", "checkbox");
    this.labelUpperEl.setAttribute("for", "upper");
    this.labelUpperEl.textContent = " Upper";
    this.divCaseEl.append(
      this.textCaseEl,
      this.labelLowerEl,
      this.inputLowerEl,
      this.labelUpperEl,
      this.inputUpperEl
    );
  },
};
criteriaCase.constructor();

var criteriaCharacters = {
  divCharEl: document.createElement("div"),
  textCharEl: document.createElement("p"),
  inputAlphaEl: document.createElement("input"),
  labelAlphaEl: document.createElement("label"),
  inputNumEl: document.createElement("input"),
  labelNumEl: document.createElement("label"),
  inputSpecialEl: document.createElement("input"),
  labelSpecialEl: document.createElement("label"),
  constructor: function () {
    this.divCharEl.setAttribute("class", "criteria-characters");
    this.textCharEl.textContent = "Possible character types: ";
    this.inputAlphaEl.setAttribute("id", "alpha");
    this.inputAlphaEl.setAttribute("type", "checkbox");
    this.labelAlphaEl.setAttribute("for", "alpha");
    this.labelAlphaEl.textContent = "Alpha";
    this.inputNumEl.setAttribute("id", "num");
    this.inputNumEl.setAttribute("type", "checkbox");
    this.labelNumEl.setAttribute("for", "num");
    this.labelNumEl.textContent = " Numeric";
    this.inputSpecialEl.setAttribute("id", "special");
    this.inputSpecialEl.setAttribute("type", "checkbox");
    this.labelSpecialEl.setAttribute("for", "special");
    this.labelSpecialEl.textContent = " Special";
    this.divCharEl.append(
      this.textCharEl,
      this.labelAlphaEl,
      this.inputAlphaEl,
      this.labelNumEl,
      this.inputNumEl,
      this.labelSpecialEl,
      this.inputSpecialEl
    );
  },
};
criteriaCharacters.constructor();

// container for criteria questions, displayed after begin is clicked
var criteriaContainer = {
  formContainerEl: document.createElement("div"),
  constructor: function () {
    this.formContainerEl.setAttribute("class", "criteria-container");
  },
};
criteriaContainer.constructor();

var passwordGenerator = {
  password: [],
  inputLength: 0,
  lower: false,
  upper: false,
  alpha: false,
  numeric: false,
  special: false,
  ASCIIupper: [],
  ASCIIspread: [],
  index: 0,
  setValues: function () {
    this.inputLength = criteriaLength.inputLengthEl.value;
    this.lower = criteriaCase.inputLowerEl.checked;
    this.upper = criteriaCase.inputUpperEl.checked;
    this.alpha = criteriaCharacters.inputAlphaEl.checked;
    this.numeric = criteriaCharacters.inputNumEl.checked;
    this.special = criteriaCharacters.inputSpecialEl.checked;
  },
  determineOptions: function () {
    if (this.alpha && this.lower) {
      this.ASCIIspread.push(26);
      this.ASCIIupper.push(122);
      this.index += 1;
    }
    if (this.alpha && this.upper) {
      this.ASCIIspread.push(26);
      this.ASCIIupper.push(90);
      this.index += 1;
    }
    if (this.numeric) {
      this.ASCIIspread.push(10);
      this.ASCIIupper.push(57);
      this.index += 1;
    }
    if (this.special) {
      this.ASCIIspread.push(15);
      this.ASCIIupper.push(47);
      this.ASCIIspread.push(7);
      this.ASCIIupper.push(64);
      this.ASCIIspread.push(6);
      this.ASCIIupper.push(96);
      this.ASCIIspread.push(4);
      this.ASCIIupper.push(126);
      this.index += 4;
    }
  },
  generateOne: function () {
    this.password.push(
      String.fromCharCode(
        this.ASCIIupper[0] - Math.floor(Math.random() * this.ASCIIspread[0])
      )
    );
  },
  generateTwo: function () {
    let randomCriteria = Math.floor(Math.random() * 2);
    if (randomCriteria === 0) {
      this.password.push(
        String.fromCharCode(
          this.ASCIIupper[0] - Math.floor(Math.random() * this.ASCIIspread[0])
        )
      );
    } else {
      this.password.push(
        String.fromCharCode(
          this.ASCIIupper[1] - Math.floor(Math.random() * this.ASCIIspread[1])
        )
      );
    }
  },
  generateThree: function () {
    let randomCriteria = Math.floor(Math.random() * 3);
    if (randomCriteria === 0) {
      this.password.push(
        String.fromCharCode(
          this.ASCIIupper[0] - Math.floor(Math.random() * this.ASCIIspread[0])
        )
      );
    } else if (randomCriteria === 1) {
      this.password.push(
        String.fromCharCode(
          this.ASCIIupper[1] - Math.floor(Math.random() * this.ASCIIspread[1])
        )
      );
    } else if (randomCriteria === 2) {
      this.password.push(
        String.fromCharCode(
          this.ASCIIupper[2] - Math.floor(Math.random() * this.ASCIIspread[2])
        )
      );
    }
  },
  generateSpecial: function (indexOne, indexTwo, indexThree, indexFour) {
    var rand;
    let randomCriteria = Math.floor(Math.random() * 4);
    if (randomCriteria === 0) {
      rand = String.fromCharCode(
        this.ASCIIupper[indexOne] -
          Math.floor(Math.random() * this.ASCIIspread[indexOne])
      );
      this.password.push(rand);
    } else if (randomCriteria === 1) {
      rand = String.fromCharCode(
        this.ASCIIupper[indexTwo] -
          Math.floor(Math.random() * this.ASCIIspread[indexTwo])
      );
      this.password.push(rand);
    } else if (randomCriteria === 2) {
      rand = String.fromCharCode(
        this.ASCIIupper[indexThree] -
          Math.floor(Math.random() * this.ASCIIspread[indexThree])
      );
      this.password.push(rand);
    } else if (randomCriteria === 3) {
      rand = String.fromCharCode(
        this.ASCIIupper[indexFour] -
          Math.floor(Math.random() * this.ASCIIspread[indexFour])
      );
      this.password.push(rand);
    }
  },
  generate: function () {
    if (this.index === 1) {
      for (let i = 0; i < this.inputLength; i++) {
        this.generateOne();
      }
    } else if (this.index === 2) {
      for (let i = 0; i < this.inputLength; i++) {
        this.generateTwo();
      }
    } else if (this.index === 3) {
      for (let i = 0; i < this.inputLength; i++) {
        this.generateThree();
      }
    } else if (this.index === 4) {
      for (let i = 0; i < this.inputLength; i++) {
        this.generateSpecial(0, 1, 2, 3);
      }
    } else if (this.index === 5) {
      for (let i = 0; i < this.inputLength; i++) {
        let randomCriteria = Math.floor(Math.random() * 2);
        if (randomCriteria === 0) {
          this.generateSpecial(1, 2, 3, 4);
        } else {
          this.generateOne();
        }
      }
    } else if (this.index === 6) {
      for (let i = 0; i < this.inputLength; i++) {
        let randomCriteria = Math.floor(Math.random() * 2);
        if (randomCriteria === 0) {
          this.generateSpecial(2, 3, 4, 5);
        } else {
          this.generateTwo();
        }
      }
    } else {
      for (let i = 0; i < this.inputLength; i++) {
        let randomCriteria = Math.floor(Math.random() * 2);
        if (randomCriteria === 0) {
          this.generateSpecial(3, 4, 5, 6);
        } else {
          this.generateThree();
        }
      }
    }
  },
  clear: function () {
    this.password.length = 0;
    this.inputLength = 0;
    this.lower = false;
    this.upper = false;
    this.alpha = false;
    this.numeric = false;
    this.special = false;
    this.ASCIIupper.length = 0;
    this.ASCIIspread.length = 0;
    this.index = 0;
  },
};

var getLength = function () {
  criteriaContainer.formContainerEl.append(criteriaLength.divLengthEl);
  var elementBefore = document.querySelector(".card-body");
  elementBefore.insertAdjacentElement(
    "afterend",
    criteriaContainer.formContainerEl
  );
};
var getCase = function () {
  if (
    parseInt(criteriaLength.inputLengthEl.value) < 8 ||
    parseInt(criteriaLength.inputLengthEl.value) > 128
  ) {
    window.alert("Length must be number between 8 and 128");
    criteriaLength.inputLengthEl.value = "";
    steps--;
    getLength();
    return 0;
  }
  criteriaLength.divLengthEl.remove();
  criteriaContainer.formContainerEl.append(criteriaCase.divCaseEl);
};

var getCharacters = function () {
  if (
    !criteriaCase.inputLowerEl.checked &&
    !criteriaCase.inputUpperEl.checked
  ) {
    window.alert("Please check at least one box");
    steps--;
    getCase();
    return 0;
  }
  criteriaCase.divCaseEl.remove();
  criteriaContainer.formContainerEl.append(criteriaCharacters.divCharEl);
};

var clearElements = function () {
  criteriaLength.inputLengthEl.value = "";
  criteriaCase.inputLowerEl.checked = false;
  criteriaCase.inputUpperEl.checked = false;
  criteriaCharacters.inputAlphaEl.checked = false;
  criteriaCharacters.inputNumEl.checked = false;
  criteriaCharacters.inputSpecialEl.checked = false;
};

// Write password to the #password input
var steps = 1;
var getCriteria = function (event) {
  event.preventDefault();
  if (beginEl.innerText === "Clear") {
    clearElements();
    passwordGenerator.clear();
    passwordText.value = "";
    beginEl.textContent = "Begin";
    return;
  }
  if (steps === 1) {
    beginEl.textContent = "Submit";
    steps++;
    getLength();
  } else if (steps === 2) {
    steps++;
    getCase();
  } else if (steps === 3) {
    steps++;
    getCharacters();
  } else {
    if (
      !criteriaCharacters.inputAlphaEl.checked &&
      !criteriaCharacters.inputNumEl.checked &&
      !criteriaCharacters.inputSpecialEl.checked
    ) {
      window.alert("Please check at least one box");
      return 0;
    }
    criteriaCharacters.divCharEl.remove();
    criteriaContainer.formContainerEl.remove();
    generatePassword();
    steps = 1;
    beginEl.textContent = "Clear";
  }
};
var generatePassword = function () {
  passwordGenerator.setValues();
  passwordGenerator.determineOptions();
  passwordGenerator.generate();
  passwordText.value = passwordGenerator.password.join("");
};

// Add event listener to generate button
beginEl.addEventListener("click", getCriteria);
