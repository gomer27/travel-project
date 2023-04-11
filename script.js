const element = document.querySelector("#turkiye-haritasi");
const info = document.querySelector(".il-isimleri");
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

      window.location.href =
        "#" + id + "-" + parent.getAttribute("data-plakakodu");
    }
  });
}
