var first = document.getElementById("first");
var second = document.getElementById("second");
var btn = document.getElementById("btn");
var ans = document.getElementById("ans");
var ten = 10,
    count, count1;

function work() {

    if (first.value >= second.value) {
        count = first.value;
        count1 = second.value;
    } else {
        count1 = first.value;
        count = second.value;
    }
    while (1) {
        if (ten < count) {
            ten *= 10;
        } else {
            break;
        }
    }
    while (1) {
        let num = Math.floor(Math.random() * ten);
        if (num > count1 && num < count) {
            return num;


        }

    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    ans.textContent = work();
}, false);