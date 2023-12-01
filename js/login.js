$(document).ready(function () {
    $('#loginForm').submit(function (e) {
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

        // Make AJAX request to login.php
        $.ajax({
            type: 'POST',
            url: '../php/login.php', // Replace with the actual endpoint
            data: formData,
            dataType: 'json',
            success: function (data) {
                if (data.status === 'success') {
                    // Redirect to profile page after successful login
                    window.location.href = '../profile.html';
                } else {
                    // Clear sensitive data and handle login error
                    formData.password = '';
                    alert('Login failed: ' + data.message);
                }
            },
            error: function () {
                console.log('Error in AJAX request');
            }
        });
    });
});
