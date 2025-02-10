async function main() {
  async function hanldeCC() {
    document.querySelector("#recommend-text").textContent = await (
      await fetch("http://127.0.0.1:3000")
    ).text();
  }

  document
    .querySelector("#recommend-button")
    .addEventListener("click", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);
