$(document).ready(function () {
    $('#registerForm').submit(function (e) {
        e.preventDefault();

        // Collect form data
        var formData = {
            username: $('#username').val(),
            password: $('#password').val()
        };

        // Sanitize user input (optional)
        formData.username = $.trim(formData.username);

        // Validate user input (optional)
        if (!formData.username || !formData.password) {
            alert('Please fill in all fields');
            return;
        }

        // Make AJAX request to register.php
        $.ajax({
            type: 'POST',
            url: '../php/register.php', // Replace with the actual endpoint
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.status === 'success') {
                    // Redirect to login page after successful registration
                    window.location.href = '../login.html';
                } else {
                    // Clear sensitive data and handle registration error
                    formData.password = '';
                    alert('Registration failed: ' + data.message);
                }
            },
            error: function () {
                console.log('Error in AJAX request');
            }
        });
    });
});
