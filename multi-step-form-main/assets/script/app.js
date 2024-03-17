const steps = document.querySelectorAll(".stp");
const circleSteps = document.querySelectorAll(".step");
const formInputs = document.querySelectorAll(".step-1 form input");
const plans = document.querySelectorAll(".plan-card");
const switcher = document.querySelector(".switch");
const addons = document.querySelectorAll(".box");
const total = document.querySelector(".total b");
const planPrice = document.querySelector(".plan-price");
let time;
let currentStep = 1;
let currentCircle = 0;
const obj = {
  plan: null,
  kind: null,
  price: null,
};

// Adımların ve döngülerin tanımlanması
steps.forEach((step) => {
  const nextBtn = step.querySelector(".next-stp");
  const prevBtn = step.querySelector(".prev-stp");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      document.querySelector(`.step-${currentStep}`).style.display = "none";
      currentStep--;
      document.querySelector(`.step-${currentStep}`).style.display = "flex";
      circleSteps[currentCircle].classList.remove("active");
      currentCircle--;
    });
  }
  nextBtn.addEventListener("click", () => {
    document.querySelector(`.step-${currentStep}`).style.display = "none";
    if (currentStep < 5 && validateForm()) {
      currentStep++;
      currentCircle++;
      setTotal();
    }
    document.querySelector(`.step-${currentStep}`).style.display = "flex";
    circleSteps[currentCircle].classList.add("active");
    summary(obj);
  });
});

// Adımların gösterilmesi ve gizlenmesi
function showStep(stepNumber) {
  document.querySelector(`.step-${stepNumber}`).style.display = "flex";
}

function hideStep(stepNumber) {
  document.querySelector(`.step-${stepNumber}`).style.display = "none";
}

// Dairelerin güncellenmesi
function updateCircle(circleIndex, isActive) {
  if (isActive) {
    circleSteps[circleIndex].classList.add("active");
  } else {
    circleSteps[circleIndex].classList.remove("active");
  }
}

// Form doğrulama
function validateForm() {
  let isValid = true;
  formInputs.forEach((input) => {
    if (!input.value) {
      isValid = false;
      input.classList.add("err");
      findLabel(input).nextElementSibling.style.display = "flex";
    } else {
      input.classList.remove("err");
      findLabel(input).nextElementSibling.style.display = "none";
    }
  });
  return isValid;
}

// Etiket bulma
function findLabel(input) {
  const idVal = input.id;
  const labels = document.getElementsByTagName("label");
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor == idVal) return labels[i];
  }
}

// Planların seçilmesi
plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    document.querySelector(".selected").classList.remove("selected");
    plan.classList.add("selected");
    const planName = plan.querySelector("b");
    const planPrice = plan.querySelector(".plan-priced");
    obj.plan = planName;
    obj.price = planPrice;
  });
});

// Fiyat değişimini sağlama (aylık/yıllık)
switcher.addEventListener("click", () => {
  const isChecked = switcher.querySelector("input").checked;
  switchPrice(isChecked);
  obj.kind = isChecked;
});


function switchPrice(checked) {
  const yearlyPrice = [90, 120, 150];
  const monthlyPrice = [9, 12, 15];
  const prices = document.querySelectorAll(".plan-priced");
  if (checked) {
    prices[0].innerHTML = `$${yearlyPrice[0]}/yr`;
    prices[1].innerHTML = `$${yearlyPrice[1]}/yr`;
    prices[2].innerHTML = `$${yearlyPrice[2]}/yr`;
    setTime(true);
  } else {
    prices[0].innerHTML = `$${monthlyPrice[0]}/mo`;
    prices[1].innerHTML = `$${monthlyPrice[1]}/mo`;
    prices[2].innerHTML = `$${monthlyPrice[2]}/mo`;
    setTime(false);
  }
}

// Ek hizmetlerin gösterilmesi
addons.forEach((a) => {
  a.addEventListener("click", (e) => {
    const addonSelect = a.querySelector("input");
    if (addonSelect.checked) {
      addonSelect.checked = false;
      a.classList.remove("ad-selected");
      showAddon(false);
    } else {
      addonSelect.checked = true;
      a.classList.add("ad-selected");
      showAddon(a,true);
      e.preventDefault();
    }
  });
});

function showAddon(ad, val) {
  const temp = document.getElementsByTagName("template")[0];
  const clone = temp.content.cloneNode(true);
  const serviceName = clone.querySelector(".service-name");
  const servicePrice = clone.querySelector(".servic-price");
  const serviceID = clone.querySelector(".selected-addon");
  if (ad && val) {
    serviceName.innerText = ad.querySelector("label").innerText;
    servicePrice.innerText = ad.querySelector(".price").innerText;
    serviceID.setAttribute("data-id", ad.dataset.id);
    document.querySelector(".addons").appendChild(clone);
  } else {
    const addons = document.querySelectorAll(".selected-addon");
    addons.forEach((addon) => {
      const attr = addon.getAttribute("data-id");
      if (attr == ad) {
        addon.remove();
      }
    });
  }
}

// calculate
function setTotal() {
  const planPriceValue = parseFloat(extractNumbersFromString(planPrice.textContent));
  const addonPrices = document.querySelectorAll(".selected-addon .servic-price");
  let totalAddonPrice = 0;
  addonPrices.forEach((addonPrice) => {
    totalAddonPrice += parseFloat(extractNumbersFromString(addonPrice.textContent));
  });
  const totalPrice = planPriceValue + totalAddonPrice;
  const duration = time ? "yr" : "mo";
  total.textContent = `$${totalPrice}/${duration}`;
}

function setTime(isYearly) {
  time = isYearly;
}

// Metinden sayıları çıkarma
function extractNumbersFromString(str) {
  let numberString = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!isNaN(char) || char === ".") {
      numberString += char;
    }
  }
  return numberString;
}
