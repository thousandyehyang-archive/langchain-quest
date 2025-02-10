async function main() {
  async function hanldeCC(event) {
    event.preventDefault(); // Form의 기본 submit 막아줘야하고...

    // 로딩을 추가했다가...
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    document.querySelector("#explore-text").appendChild(spinner);

    const url = "https://thousandhyehyang-langchain-darong.glitch.me";
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

    const { image, desc } = json;

    const explore_text = document.querySelector("#explore-text");
    explore_text.innerHTML = "";

    const imageTag = document.createElement("img");
    imageTag.classList.add("img-fluid");
    imageTag.src = image;

    const descTag = document.createElement("p");
    descTag.textContent = desc;

    explore_text.appendChild(imageTag);
    explore_text.appendChild(descTag);
  }

  document.querySelector("#explore-form").addEventListener("submit", hanldeCC);
}

document.addEventListener("DOMContentLoaded", main);
