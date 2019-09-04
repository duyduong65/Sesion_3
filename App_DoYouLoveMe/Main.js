function bthyes() {
    alert("<3");
}


function abc() {
    //Mat.random() trả về 1 số ngẫu nhiên giữa 0 và 1
    //Window.innerWith trả về giá trị chiều rộng màn hình
    //Window.innerHeight trả về giá trị chiều cao màn hình
    //
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);

    document.getElementById('lacaigi').style.left = x + 'px';
    document.getElementById('lacaigi').style.top = y + 'px';

}