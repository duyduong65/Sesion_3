
function timso() {
    let a = document.getElementById('numbers_1').value;
    let b= document.getElementById('numbers_2').value;
    if (a % b == 0){
        alert("a chia hết cho b");
    } else {
        alert("a không chia hết cho b");
    }
}