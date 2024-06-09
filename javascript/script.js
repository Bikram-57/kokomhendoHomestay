
function book() {
    var phoneNumber = "+917478459652";
    var message = "Hello, I want to book a cab!";
    var apiLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiLink, "_blank");
};