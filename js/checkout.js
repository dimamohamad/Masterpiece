function selectPayment(element) {
    const method = element.getAttribute('data-method');
    document.getElementById('selectedPayment').value = method;
    document.querySelectorAll('.payment-card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.payment-details').forEach(details => details.style.display = 'none');

    element.classList.add('selected');
    document.getElementById(`${method}Details`).style.display = 'block';
}

document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!document.getElementById('selectedPayment').value) {
        alert('Please select a payment method');
        return;
    }
    // Here you would typically send the form data to your server
    alert('Booking submitted successfully!');
});