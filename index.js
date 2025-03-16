function main() {
    let num = 0; // Initialize num to 0
    while (num < 10) {
        num = Math.floor(Math.random() * 30 + 1);
    }
    setTimeout(function() {
        window.location.replace("alarm.html");
    }, num * 1000);
}

document.addEventListener("DOMContentLoaded", main);