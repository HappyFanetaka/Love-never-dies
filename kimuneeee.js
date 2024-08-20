document.addEventListener("DOMContentLoaded", function () {
  const fullText = "これからも頑張って下さい！";
  let index = 0;
  const visibleText = document.getElementById("visible-text");

  // フォントサイズを小さくする
  visibleText.style.fontSize = "12px"; // 小さなフォントサイズに変更

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
