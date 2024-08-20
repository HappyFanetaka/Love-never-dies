document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.fade-in-image');
    const messageElement = document.getElementById('message');
    const message = "これからもよろしくね(⋈◍＞◡＜◍)。✧♡";
    let index = 0;
    const delay = 150; // 文字が表示される間隔（ミリ秒）
    const messageDelay = 3800; // 画像が表示されてからメッセージが表示されるまでの遅延（ミリ秒）

    function showNextCharacter() {
        if (index < message.length) {
            messageElement.textContent += message.charAt(index);
            index++;
            setTimeout(showNextCharacter, delay);
        }
    }

    function displayMessageAfterDelay() {
        setTimeout(showNextCharacter, messageDelay);
    }

    // すべての画像が読み込まれるまで待つ
    let imagesLoaded = 0;
    images.forEach(img => {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                // すべての画像が読み込まれたらメッセージの表示を開始
                displayMessageAfterDelay();
            }
        });

        // 画像がすでにキャッシュされている場合
        if (img.complete) {
            img.classList.add('loaded');
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                // すべての画像が読み込まれたらメッセージの表示を開始
                displayMessageAfterDelay();
            }
        }
    });
});
