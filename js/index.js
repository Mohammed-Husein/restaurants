document.querySelectorAll('.btn').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        var name = this.parentElement.querySelector('.Food-title').innerText;
        var image = this.parentElement.parentElement.querySelector('.img-curve').getAttribute('src');
        var price = this.parentElement.querySelector('.Food-price').innerText;

        var order = {
            name: name,
            image: image,
            price: price
        };

        localStorage.setItem('order', JSON.stringify(order));
        window.location.href = 'order.html'; // Redirect to order page
    });
});