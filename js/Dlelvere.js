
let countdown = 20 * 60; // تحويل الدقائق إلى ثواني
let countdownElement = document.getElementById("countdown");

function startCountdown() {
    let interval = setInterval(function() {
        let minutes = Math.floor(countdown / 60);
        let seconds = countdown % 60;

        countdownElement.textContent =` ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (countdown === 0) {
            clearInterval(interval);
            countdownElement.textContent = "00:00";
        } else {
            countdown--;
        }
    }, 1000); // كل ثانية واحدة
}

startCountdown();

    var name=document.getElementById('name').textContent;
    var place=document.getElementById('place').textContent;

    var orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
//         name= orderDetails.fullName;
// place = orderDetails.address;

msg.innerHTML=`Welcome Mr/Mis :${orderDetails.fullName} The delivery is expected to arrive at the place: ${orderDetails.address} during`;
