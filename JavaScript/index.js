
// 画像を全画面表示
function setUpFullscreen(imageToShowId, openButtonId, fullscreenImageId) {
  const imageToShow = document.getElementById(imageToShowId);
  const openButton = document.getElementById(openButtonId);
  const fullscreenImage = document.getElementById(fullscreenImageId);

  openButton.addEventListener("click", function () {
    fullscreenImage.src = imageToShow.src; // 画像のsrcを設定
    fullscreenImage.classList.add("show"); // 画像を表示
    fullscreenImage.classList.remove("hide"); // 非表示クラスを削除
  });

  fullscreenImage.addEventListener("click", function () {
    fullscreenImage.classList.add("hide"); // 画像を非表示にする
    fullscreenImage.classList.remove("show"); // 表示クラスを削除
  });
}

// 各セクションに対してセットアップ
setUpFullscreen("imageToShow1", "openButton1", "fullscreenImage1");
setUpFullscreen("imageToShow2", "openButton2", "fullscreenImage2");
setUpFullscreen("imageToShow3", "openButton3", "fullscreenImage3");
