document.querySelector("#items").addEventListener("click", (e) => {
  if (e.target.id) {
    window.location.href = "/" + e.target.id;
  }
});
