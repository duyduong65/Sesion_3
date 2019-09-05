let good = document.getElementById('good') ;
let fast = document.getElementById('fast');
let cheap = document.getElementById('cheap');

function changeChecked(eval) {
    switch (eval) {
        case 'good' :
            if (good && fast) {
                cheap = false;
            } else if (good && cheap) {
                fast = false;
            }
    }
}


