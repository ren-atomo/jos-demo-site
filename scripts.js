document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('お問い合わせありがとうございます！');
    this.reset();
});
