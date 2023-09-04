// ページが読み込まれたときにボタンの状態を復元する関数
function restoreButtonState() {
    const buttonTypes = ["A", "B"];

    buttonTypes.forEach((type) => {
        for (let i = 1; i <= 6; i++) {
            const button = document.querySelector(`.button${type}[data-button-type="${type}"][data-button-index="${i}"]`);
            const storedState = localStorage.getItem(`button${type}_${i}`);

            if (storedState) {
                const { text, color } = JSON.parse(storedState);
                button.textContent = text;
                button.style.backgroundColor = color;
            }
        }
    });
}

// ボタンがクリックされたときの処理
function handleButtonClick(event) {
    const button = event.target;
    const buttonType = button.getAttribute("data-button-type");
    const buttonIndex = button.getAttribute("data-button-index");
    const currentText = button.textContent;

    // ボタンの状態を変更するロジック
    if (currentText === "養護教諭が行います") {
        button.textContent = "どなたかお願いします";
        button.style.backgroundColor = "#db3434";
    } else if (currentText === "未実施です") {
        button.textContent = "完了しました";
        button.style.backgroundColor = "#ffcc00";
    } else if (currentText === "どなたかお願いします") {
        button.textContent = "養護教諭が行います";
        button.style.backgroundColor = "#3498db";
    } else {
        button.textContent = "未実施です";
        button.style.backgroundColor = "#87cfa8";
    }

    // ボタンの状態をローカルストレージに保存
    const buttonState = {
        text: button.textContent,
        color: button.style.backgroundColor,
    };
    localStorage.setItem(`button${buttonType}_${buttonIndex}`, JSON.stringify(buttonState));
}

// ページ読み込み時の処理
document.addEventListener("DOMContentLoaded", () => {
    // ボタンがクリックされたときの処理を登録
    const buttons = document.querySelectorAll(".buttonA, .buttonB");
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    // ページが読み込まれたときにボタンの状態を復元
    restoreButtonState();
});

// 削除ボタンのクリックイベントをリッスン
const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", function () {
    // ローカルストレージ内のデータを削除
    localStorage.clear(); // すべてのデータを削除する場合

    // または特定のデータを削除する場合は、以下のようにキーを指定して削除
    // localStorage.removeItem("キー名");
    
    // ページをリロードしてボタンの状態をリセットする（オプション）
    location.reload();
});
