const countryFilter = document.querySelector(".country-filter"),
  filterSelect = document.querySelector(".filter-select"),
  filterSelectText = filterSelect.querySelector("p"),
  filterOptions = document.querySelectorAll(".filter-option");

filterSelect.addEventListener("click", () => {
  countryFilter.classList.toggle("show");
});

filterOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    let optionText = option.querySelector("p").textContent;
    filterSelectText.textContent = optionText;
    countryFilter.classList.remove("show");
    filterByRegion(optionText);
  });
});

let countriesContainer = document.querySelector(".countries-container");
let countrySearchInput = document.querySelector("#country-search");
let themeText = document.querySelector(".header-content > p");
let textSpan = themeText.querySelector("span");
let allData;
let theme = localStorage.getItem("theme");
if (theme === "dark") {
  textSpan.textContent = "Dark Mode";
  document.body.classList.add("dark");
}

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    allData = data;
    repeatCountry(data);
  });

function filterByRegion(region) {
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((res) => res.json())
    .then(repeatCountry);
}

function repeatCountry(data) {
  countriesContainer.innerHTML = "";
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/country-detail.html?name=${country.name.common}`;

    const cardHTML = `
    <a href="country-detail.html" >

                <div class="card-flag">
                    <img src="${country.flags.svg}" alt="flag" />
                </div>
                <div class="card-description">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p class="card-population">Population: <span>${country.population.toLocaleString(
                      "en-AZ"
                    )}</span></p>
                    <p class="card-region">Region: <span>${
                      country.region
                    }</span></p>
                    <p class="card-capital">Capital: <span>${
                      country.capital?.[0]
                    }</span></p>
                </div>

                </a>

            `;
    countryCard.innerHTML = cardHTML;

    countriesContainer.appendChild(countryCard);
  });
}

countrySearchInput.addEventListener("input", (e) => {
  let searchCountry = allData.filter((country) => {
    return country.name.common
      .toUpperCase()
      .includes(e.target.value.toUpperCase());
  });
  repeatCountry(searchCountry);
});

themeText.addEventListener("click", function (e) {
  document.body.classList.toggle("dark");
  if (textSpan.textContent === "Light Mode") {
    textSpan.textContent = "Dark Mode";
    localStorage.setItem("theme", "dark");
  } else {
    textSpan.textContent = "Light Mode";
    localStorage.removeItem("theme");
  }
});
