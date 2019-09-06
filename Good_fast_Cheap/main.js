let good = document.getElementById('good');
let fast = document.getElementById('fast');
let cheap = document.getElementById('cheap');

function changeChecked(eval) {
    switch (eval) {
        case 'good' :
            if (good.checked && fast.checked) {
                cheap.checked = false;
            } else if (fast.checked && cheap.checked) {
                good.checked = false;
            }
            break;
        case "fast":
            if (fast.checked && cheap.checked) {
                good.checked = false;
            } else if (cheap.checked && good.checked) {
                fast.checked = false;
            }
            break;
        case "cheap" :
            if (cheap.checked && good.checked) {
                fast.checked = false;
            } else if (cheap.checked && fast.checked) {
                good.checked = false;
            }
            break;
    }
}


