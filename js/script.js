window.onload = function() {

    // 이미지 슬라이드 구현
    showSlides();

    // javascript 내용 작성
}

// showSlides 함수 내용 작성
function showSlides(n) {
    var slides = document.querySelectorAll("slides > img");
    for(var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    current++;
    if(current > slides.length) {
        current = 1;
    }
    slides[current - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}