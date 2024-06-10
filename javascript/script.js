
function whatsapp() {
    var phoneNumber = "+919800314116";
    var message = "Hello, I want to book a stay!";
    var apiLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(apiLink, "_blank");
};

  window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.right-to-left');
    elements.forEach(element => {
      element.classList.add('slide-in2');
    });
  });

  window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.left-to-right');
    elements.forEach(element => {
      element.classList.add('slide-in');
    });
  });

  window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.top-to-bottom');
    elements.forEach(element => {
      element.classList.add('slide-in-from-top');
    });
  });

  window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.bottom-to-top');
    elements.forEach(element => {
      element.classList.add('slide-in-from-bottom');
    });
  });