document.addEventListener("DOMContentLoaded", function () {
  const fullText = "これまでお世話になりました！きむねーさんの豊富な知識にはいつも驚かされたくさん学ばせていただきました．私も今後はきむねーさんの分まで頑張りたいと思います（笑）";
  let index = 0;
  const visibleText = document.getElementById("visible-text");

  const intervalId = setInterval(() => {
    if (index < fullText.length) {
      visibleText.textContent += fullText[index];
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 100);

  const hintButton = document.getElementById("hint-button");
  const hintText = document.getElementById("hint-text");

  hintButton.addEventListener("click", function () {
    hintText.style.display = hintText.style.display === "none" ? "block" : "none";
  });
});
