function click_1(val) {
    let img = document.getElementById(val);
    switch (img.alt) {
        case "1" :
            img.src = "b1.jpg";
            img.alt = '4';
            break;
        case "2" :
            img.src = "b2.jpg";
            img.alt = '5';
            break;
        case "3" :
            img.src = "b3.jpg";
            img.alt = '6';
            break;
        case "4" :
            img.src = "a1.jpg";
            img.alt = '1';
            break;
        case "5" :
            img.src = "a2.jpg";
            img.alt = '2';
            break;
        case "6" :
            img.src = "a3.jpg";
            img.alt = '3';
            break;


    }

}
