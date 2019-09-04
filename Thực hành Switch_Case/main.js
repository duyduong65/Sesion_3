function findDayOfMonth() {
    let month = document.getElementById('Month').value;
    switch (month) {
        case '1' :
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            document.getElementById("Month").value = "Tháng này có 31 ngày";
            break;
        case '2':
            document.getElementById("Month").value = "tháng này có 28 ngày";
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            document.getElementById("Month").value = "Tháng này có 30 ngày"
            break;
        default: document.getElementById("Month").value = "Default";
   }
}