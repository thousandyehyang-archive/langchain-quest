async function main() {
  async function hanldeCC(event) {
    event.preventDefault(); // Form의 기본 submit 막아줘야하고...
    const url = "http://127.0.0.1:3000";
    const formData = new FormData(document.querySelector("#explore-form"));
    const text = formData.get("text");
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const json = await response.json();

    document.querySelector("#explore-text").textContent = JSON.stringify(json);
  }

  document.querySelector("#explore-form").addEventListener("submit", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);
