document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('お問い合わせありがとうございます！');
    this.reset();
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".flowchart-item");
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.5}s`;
    });
});
