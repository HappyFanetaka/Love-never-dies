document.addEventListener("DOMContentLoaded", function () {
  const fullText = "きむねーさんから教わったことを余すことなく胸に刻み今後も活かしていきたいと思います";
  let index = 0;
  const visibleText = document.getElementById("visible-text");

  const intervalId = setInterval(() => {
    if (index < fullText.length) {
      visibleText.textContent += fullText[index];
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 800);

  const hintButton = document.getElementById("hint-button");
  const hintText = document.getElementById("hint-text");

  hintButton.addEventListener("click", function () {
    hintText.style.display = hintText.style.display === "none" ? "block" : "none";
  });
});
