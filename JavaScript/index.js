
document.addEventListener("DOMContentLoaded", function () {
  const mainHeroImg = document.querySelector(".main-hero-img");
  const body = document.body;

  if (mainHeroImg) {
    // ローディング用の白背景を作成
    const loadingScreen = document.createElement("div");
    loadingScreen.style.position = "fixed";
    loadingScreen.style.top = "0";
    loadingScreen.style.left = "0";
    loadingScreen.style.width = "100%";
    loadingScreen.style.height = "100%";
    loadingScreen.style.background = "white";
    loadingScreen.style.display = "flex";
    loadingScreen.style.justifyContent = "center";
    loadingScreen.style.alignItems = "center";
    loadingScreen.style.zIndex = "9999";
    loadingScreen.style.transition = "opacity 1s ease-out";

    const loadingText = document.createElement("div");
    loadingText.innerText = "Loading";
    loadingText.style.fontSize = "1rem";
    loadingText.style.color = "red";
    loadingText.style.animation = "blink 1s infinite alternate";

    loadingScreen.appendChild(loadingText);
    document.body.appendChild(loadingScreen);

    // ローディングアニメーション用のCSSを追加
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes blink {
        0% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(style);

    mainHeroImg.style.opacity = "0";
    mainHeroImg.style.filter = "blur(10px) contrast(50%)";
    mainHeroImg.style.transform = "scale(1.1)";

    setTimeout(() => {
      mainHeroImg.style.transition = "opacity 1s ease-out, filter 2.5s cubic-bezier(.215,.61,.355,1), transform 3.75s cubic-bezier(.215,.61,.355,1)";
      mainHeroImg.style.opacity = "1";
      mainHeroImg.style.filter = "blur(3px) contrast(80%)";
      mainHeroImg.style.transform = "scale(1.05)";
    }, 100);

    setTimeout(() => {
      mainHeroImg.style.filter = "blur(0) contrast(100%)";
      mainHeroImg.style.transform = "scale(1)";
    }, 2000);

    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => loadingScreen.remove(), 1000);
    }, 1500);
  }
});




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


document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const drawerMenu = document.getElementById("drawerMenu");
  const lineDisappear = document.getElementById("lineDisappear");
  const lineAppear = document.getElementById("lineAppear");


  // メニューを開閉する
  menuButton.addEventListener("click", function () {
    drawerMenu.classList.toggle("active");

    if (drawerMenu.classList.contains("active")) {
      lineDisappear.style.display = "none";
      lineAppear.style.backgroundColor = "#ffffff"; // メニューを開いたら非表示
    } else {
      lineDisappear.style.display = "block";
      lineAppear.style.backgroundColor = "#000000"; // メニューを閉じたら表示
    }

  });

  // ナビゲーションのリンクをクリックしたらメニューを閉じる
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function () {
      drawerMenu.classList.remove("active");
    });
  });

});

