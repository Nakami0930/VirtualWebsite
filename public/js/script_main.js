// 画像の配列
const images = [
    "images/onsen_img.jpg",
    "images/onsen_img2.jpg",
    "images/onsen_img3.jpg",
    "images/onsen_img4.jpg",
    "images/onsen_img5.jpg"
];

// 画像とリンク先の配列
const links = [
    "index.html",
    "onsen.html",
    "food.html",
    "introduction.html",
    "inquiry.html"
];

// テキスト画像の配列
const textImages = [
    [
        "images/幻想温泉.png",
        "images/最高の一日を.png"
    ],
    [
        "images/癒しの湯.png",
        "images/極楽の気分.png"
    ],
    [
        "images/最高のお食事.png"
    ],
    [
        "images/アクセス.png"
    ],
    [
        "images/お問い合わせ.png"
    ]
];

function changeImage(direction, event) {
    // イベントのバブルアップを停止
    if (event) event.stopPropagation();

    const imgElement = document.getElementById('onsen-image');
    const textImagesElement = document.getElementById('text-images');
    // 現在の画像のインデックスを取得
    const currentImage = imgElement.src;
    const currentImageFilename = currentImage.split('/').pop();
    const currentIndex = images.indexOf("images/" + currentImageFilename);

    // 新しいインデックスを計算
    let newIndex = (currentIndex + direction) % images.length;
    if (newIndex < 0) {
        newIndex = images.length - 1;
    }

    // フェードアウトアニメーション
    imgElement.classList.remove('fade');
    textImagesElement.classList.remove('fade');
    void imgElement.offsetWidth; // 強制的に再描画
    imgElement.classList.add('fade');
    textImagesElement.classList.add('fade');

    // 画像を新しいものに切り替え
    imgElement.src = images[newIndex];

    // テキスト画像を新しいものに切り替え
    const newTextImages = textImages[newIndex];
    textImagesElement.innerHTML = newTextImages.map(src => `<img src="${src}" alt="${src}">`).join('');

    // クリックイベントを更新
    imgElement.parentNode.onclick = function() {
        window.location.href = links[newIndex];
    }
}

// 初期化時にクリックイベントを設定
document.querySelector('.image-wrapper').onclick = function() {
    window.location.href = links[0];
}

// 8秒ごとに自動で画像を切り替える
setInterval(function() {
    changeImage(1);
}, 8000);
