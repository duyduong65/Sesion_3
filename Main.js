function NamNhuan() {
    let year = parseInt(prompt("Enter a year"));
    if (year % 4 == 0 ){
        if (year % 100 == 0){
            if (year % 400 == 0) {
                alert("Năm này là năm nhuận");
            }else {
                alert("năm này không phải năm nhuận");}
        }else {
            alert("Năm này không phải năm nhuận");
        }
    }else {
        alert("Năm này không phải năm nhuận");
    }
}