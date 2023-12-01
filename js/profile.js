// jQuery AJAX for fetching and displaying user data
$(document).ready(function() {
    // Function to fetch and display user data
    function displayUserData() {
        $.ajax({
            type: 'GET',
            url: '../php/getUserData.php', // Replace with the actual path to fetch user data
            success: function(response) {
                // Assuming the response is a JSON object containing user data
                const userData = JSON.parse(response);

                // Display user data
                const profileDisplay = $('#profileDisplay');
                profileDisplay.empty(); // Clear previous content

                if (userData) {
                    profileDisplay.append('<h2>User Profile</h2>');
                    profileDisplay.append('<p><strong>Username:</strong> ' + userData.username + '</p>');
                    profileDisplay.append('<p><strong>Age:</strong> ' + userData.age + '</p>');
                    profileDisplay.append('<p><strong>Date of Birth:</strong> ' + userData.dob + '</p>');
                    profileDisplay.append('<p><strong>Contact:</strong> ' + userData.contact + '</p>');
                } else {
                    profileDisplay.append('<p>No user data available</p>');
                }
            },
            error: function(error) {
                console.error(error);
            }
        });
    }

    // Initial display of user data
    displayUserData();

    // Event listener for the "Edit Profile" button
    $('#editProfileBtn').click(function() {
        // Hide profile display and show the update form
        $('#profileDisplay').hide();
        $('#updateProfileForm').show();
    });

    // jQuery AJAX for updating profile
    $('#profileForm').submit(function(e) {
        e.preventDefault();

        // Validate inputs
        // Perform AJAX profile update here with secure practices
        $.ajax({
            type: 'POST',
            url: '../php/profile.php',
            data: {
                userId: '123', // Replace with the actual user ID
                age: $('#age').val(),
                dob: $('#dob').val(),
                contact: $('#contact').val()
                // Add other profile update data as needed
            },
            success: function(response) {
                // Handle success
                console.log(response);

                // Display updated user data
                displayUserData();

                // Show profile display and hide the update form
                $('#profileDisplay').show();
                $('#updateProfileForm').hide();

                // You can add a notification or redirect logic here
            },
            error: function(error) {
                // Handle error
                console.error(error);
            }
        });
    });
});
