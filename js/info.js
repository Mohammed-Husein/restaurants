document.addEventListener('DOMContentLoaded', function() {
    var orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    var order = JSON.parse(localStorage.getItem('order'));
    var quantity = orderDetails.qty;
var pricePerUnit = order.price;

var totalPrice = quantity * pricePerUnit;
    document.getElementById('Quantity').textContent = orderDetails.qty;
    document.getElementById('head').innerHTML = `Mr,Mis: ${orderDetails.fullName}`;
    document.getElementById('food-title').textContent = order.name;
    document.getElementById('food-price').textContent = `${totalPrice}$`;
    document.getElementById('food-image').src = order.image;
});