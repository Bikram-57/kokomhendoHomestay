
function whatsapp() {
    var phoneNumber = "+919800314116";
    var message = "Hello, I want to book a stay!";
    var apiLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiLink, "_blank");
};