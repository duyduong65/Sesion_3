function displayValue(value) {
    document.getElementById("inputNumbers").value += value;
}


function tinhtoan() {
    let ketqua = document.getElementById("inputNumbers").value;
    result = eval(ketqua);
    document.getElementById("inputNumbers").value = result;
}

function del_1() {
    let del = document.getElementById("inputNumbers").value;
    result = del.substring(0, del.length - 1);
    document.getElementById("inputNumbers").value = result;
}