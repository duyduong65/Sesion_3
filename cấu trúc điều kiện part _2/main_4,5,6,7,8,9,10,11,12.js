function acreageSquare() {
    let leght = document.getElementById("lenght").value;
    let width = document.getElementById("width").value;
    let equal = leght * width;
    document.getElementById('equal').value = equal;
}

function STamgiac() {
    let edge_1 = document.getElementById('Edge_1').value;
    let edge_2 = document.getElementById('Edge_2').value;
    let dTamgiac = (1 / 2) * edge_1 * edge_2;
    document.getElementById('sTamgiac').value = dTamgiac;
}