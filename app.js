// json veri çekme gönderme

document.querySelector("#getGezi").addEventListener("click", loadGezi);
function loadGezi() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "city.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      let gezi = JSON.parse(this.responseText);
      console.log(gezi.Istanbul.gezilecek_yerler[0].ad);
      console.log(gezi.Adana.gezilecek_yerler[0].konum);
      var geziler = document.getElementById("geziler");

      gezi.Adana.gezilecek_yerler.forEach(function (elem) {
        var html = `
                        <h1 class="city-title">Yöresel <span>Yemekler</span> </h1>
                        <div class="box-container">
                            <div class="box">
                                <div class="box-head">
                                    <img src="./img/araba.jpg" alt="">
                                    <div class="city-name">${elem.ad}</div>
                                    <div class="city-comment">${elem.aciklama}</div>
                                </div>
                                <div class="box-bottom">
                                    <a id="map-btn" target="_blank" href="${elem.konum}">Harita</a>
                                    <div id="konum">${elem.location}</div>
                                </div>
                            </div>
                        </div>    
                            `;
        geziler.innerHTML += html;
      });
    }
  };

  xhr.send();
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
const urlParams = new URLSearchParams(window.location.search);
const sehirAdi = urlParams.get("sehir");
