function updateCountdown() {
    const birthDate = new Date('2025-03-16T00:00:00');
    const now = new Date();
    const timeDifference = birthDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerText = 'お誕生日おめでとう!';
        return;
    }

    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;
    const secondsInDay = secondsInHour * 24;
    const secondsInMonth = secondsInDay * 30; // 平均的な月の長さ

    const totalSeconds = Math.floor(timeDifference / 1000);
    
    const months = Math.floor(totalSeconds / secondsInMonth);
    const days = Math.floor((totalSeconds % secondsInMonth) / secondsInDay);
    const hours = Math.floor((totalSeconds % secondsInDay) / secondsInHour);
    const minutes = Math.floor((totalSeconds % secondsInHour) / secondsInMinute);
    const seconds = Math.floor(totalSeconds % secondsInMinute);

    document.getElementById('countdown').innerText = `私の誕生日まで残り...${months}ヶ月 ${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
}

// 更新タイマーを1秒ごとに実行
setInterval(updateCountdown, 1000);

// 初回実行
updateCountdown();
