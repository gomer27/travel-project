function userAdd() {
  let ad = document.getElementById("userAd").value;
  let sifre = document.getElementById("userSifre").value;
  let mail = document.getElementById("user-email").value;
  if (ad && sifre && mail) {
    let kullanicilar = JSON.parse(localStorage.getItem("kullanıcılar") || "[]");

    const i = kullanicilar.findIndex((k) => k.ad === ad);

    if (i === -1) {
      kullanicilar.push({
        ad: ad,
        password: sifre,
        mail: mail,
      });

      localStorage.setItem("kullanıcılar", JSON.stringify(kullanicilar));
    }
  }
}
function sil() {
  localStorage.removeItem("kullanıcı");
  console.log("naber");
  document.getElementById("cikis-btn").addEventListener("load", UIClearUser());
  function UIClearUser() {
    var x = document.getElementById("login");
    var z = document.getElementById("register");
    var y = document.getElementById("toggle-btn");
    function register() {
      x.style.left = "-40rem";
      z.style.left = "3.5rem";
      y.style.left = "8rem";
      y.style.width = "12rem";
    }
    function login() {
      x.style.left = "4rem";
      z.style.left = "40rem";
      y.style.left = "0rem";
      y.style.width = "10rem";
    }
  }
  var close = document.getElementById("cikisbtn");
  var entry = document.getElementById("girisbtn");
  entry.style.display = "block";
  close.style.display = "none";
}
var x = document.getElementById("login");
var z = document.getElementById("register");
var y = document.getElementById("toggle-btn");
function register() {
  x.style.left = "-40rem";
  z.style.left = "3.5rem";
  y.style.left = "8rem";
  y.style.width = "12rem";
}
function login() {
  x.style.left = "4rem";
  z.style.left = "40rem";
  y.style.left = "0rem";
  y.style.width = "10rem";
}
function userLoading(event) {
  let ad = document.getElementById("userAd2").value;
  let sifre = document.getElementById("userSifre2").value;
  var users = JSON.parse(localStorage.getItem("kullanıcılar") || "[]");
  const user = users.find((user) => user.ad === ad);
  if (user && sifre == user.password) {
    delete user.password;
    localStorage.setItem("kullanıcı", JSON.stringify(user));
  }
}
