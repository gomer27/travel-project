const element = document.querySelector("#turkiye-haritasi");
const info = document.querySelector(".il-isimleri");
const cityName = document.querySelector("#cityName");
document
  .querySelector("#turkiye-haritasi")
  .addEventListener("click", turkiyeharitasi);
function turkiyeharitasi() {
  element.addEventListener("mouseover", function (event) {
    if (
      event.target.tagName === "path" &&
      event.target.parentNode.id !== "guney-kibris"
    ) {
      info.innerHTML = [
        "<div>",
        event.target.parentNode.getAttribute("data-iladi"),
        "</div>",
      ].join("");
    }
  });

  element.addEventListener("mousemove", function (event) {
    info.style.top = event.pageY + 25 + "px";
    info.style.left = event.pageX + "px";
  });

  element.addEventListener("mouseout", function (event) {
    info.innerHTML = "";
  });
  element.addEventListener("click", function (event) {
    if (event.target.tagName === "path") {
      const parent = event.target.parentNode;
      const id = parent.getAttribute("id");
      if (id === "guney-kibris") {
        return;
      }
      window.location.href = `http://127.0.0.1:5501/city.html?sehir=${id}`;
    }
  });
}

// arama butonu start
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
// arama butonu end

// navbar-start
const home = document.querySelector(".home");
home.addEventListener("mouseover", homeLine);
function homeLine() {
  document.querySelector("#navbar-home").classList.add("active");
  document.querySelector("#navbar-city").classList.remove("active");
  document.querySelector("#navbar-about").classList.remove("active");
  document.querySelector("#navbar-contact").classList.remove("active");
}
const city = document.querySelector(".city");
city.addEventListener("mouseover", cityLine);
function cityLine() {
  document.querySelector("#navbar-city").classList.add("active");
  document.querySelector("#navbar-home").classList.remove("active");
  document.querySelector("#navbar-about").classList.remove("active");
  document.querySelector("#navbar-contact").classList.remove("active");
}
const about = document.querySelector(".about");
about.addEventListener("mouseover", aboutLine);
function aboutLine() {
  document.querySelector("#navbar-city").classList.remove("active");
  document.querySelector("#navbar-home").classList.remove("active");
  document.querySelector("#navbar-about").classList.add("active");
  document.querySelector("#navbar-contact").classList.remove("active");
}
const contact = document.querySelector(".contact");
contact.addEventListener("mouseover", contactLine);
function contactLine() {
  document.querySelector("#navbar-city").classList.remove("active");
  document.querySelector("#navbar-home").classList.remove("active");
  document.querySelector("#navbar-about").classList.remove("active");
  document.querySelector("#navbar-contact").classList.add("active");
}
// navbar-end

// deneme start
// var dnm = document.querySelector("#turkiye");
// dnm.addEventListener("mouseover", dnmLoad);
// function dnmLoad(event) {
//   console.log(`şehir:${event.target}`);
// }

// var dnm = document.getElementById('turkiye')
// dnm.addEventListener('change', function() {
//   const turkiye = this.value;
//   console.log(`değer${turkiye}`)
// deneme end

// let search = document.getElementById("searchCity");
// function runEvents() {
//   search.addEventListener("keyup", cityFind);
// }
// function cityFind(e) {
//   const searchCity = e.target.value;
//   console.log(searchCity);
// }
