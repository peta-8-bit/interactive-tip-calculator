let bill, custom, tip, tipamt, NOP;
let TAPP = document.querySelector(".TAPP");
let ToAPP = document.querySelector(".ToAPP");
let cstval = document.querySelector("input[name=customvalue]");

getBill = () => {
  bill = parseInt(document.querySelector("input[name=bill]").value);
  console.log("BILL:" + bill);
  calculation();
};

getNop = () => {
  NOP = parseInt(document.querySelector("input[name=NOP]").value);
  console.log("NOP:" + NOP);
  calculation();
};

getCustom = () => {
  custom = document.querySelector("input[name=select]:checked").value;
  console.log("custom:" + custom);
  console.log("TYPE custom:" + typeof custom);

  if (custom !== "custom") {
    tip = parseInt(custom);
    console.log("Radio TIP:" + tip);
    calculation();
  } else {
    if (cstval.disabled === false) {
      cstval.disabled = true;
    } else {
      cstval.disabled = false;
    }
  }
};

customTip = () => {
  tip = parseInt(cstval.value);
  console.log("Custom TIP():" + tip);
  calculation();
};

calculation = () => {
  console.log("*********");
  console.log("BILL:" + bill + typeof bill);
  console.log("NOP:" + NOP + typeof NOP);
  console.log("TIP:" + tip + typeof tip);
  console.log("@@@@@@@@@@");

  if (
    bill !== NaN &&
    tip !== NaN &&
    NOP !== NaN &&
    bill !== undefined &&
    NOP !== undefined &&
    tip !== undefined
  ) {
    TAPP.textContent = (bill * (tip / 100)) / NOP;
    ToAPP.textContent = (bill + bill * (tip / 100)) / NOP;
    if (custom === "custom") {
      document.querySelector("input[name=customvalue]").disabled = true;
    }
  }
};
// Remove value from form after submitting || onchange || onclick
