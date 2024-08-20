document.addEventListener("DOMContentLoaded", function () {
  const fullText = "これからも応援しています";
  let index = 0;
  const visibleText = document.getElementById("visible-text");

  const intervalId = setInterval(() => {
    if (index < fullText.length) {
      visibleText.textContent += fullText[index];
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 200);

  const hintButton = document.getElementById("hint-button");
  const hintText = document.getElementById("hint-text");

  hintButton.addEventListener("click", function () {
    hintText.style.display = hintText.style.display === "none" ? "block" : "none";
  });
});
