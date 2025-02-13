document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const alertBox = document.getElementById('custom-alert');

    // Basic validation
    if (username.value.trim() === '' || password.value.trim() === '') {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    // Show success message alert
    showAlert('Form successfully submitted!', 'success');

    // Clear the form
    username.value = '';
    password.value = '';
});

// Function to show alert
function showAlert(message, type) {
    const alertBox = document.getElementById('custom-alert');
    alertBox.textContent = message;
    
    if (type === 'error') {
        alertBox.style.background = '#f44336';
    } else {
        alertBox.style.background = '#4caf50';
    }

    alertBox.classList.add('show');

    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}
