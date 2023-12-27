window.onload = function() {

    // 이미지 슬라이드 구현
    showSlides(0);

    // javascript 내용 작성
}

// showSlides 함수 내용 작성
function showSlides(current) {
    var slides = document.querySelectorAll(".slides > a");
    for(var i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    current++;
    if(current > slides.length) {
        current = 1;
    }
    slides[current - 1].style.display = "block";
    setTimeout(function() {showSlides(current);}, 2000);
}