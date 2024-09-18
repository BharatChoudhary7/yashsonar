<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OAuth Callback</title>
</head>
<body>
    <h1>OAuth Callback</h1>
    <div id="message"></div>

    <script>
        // Function to get query parameters
        function getQueryParams() {
            const params = {};
            window.location.search.substr(1).split("&").forEach(function (item) {
                const parts = item.split("=");
                params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1] || '');
            });
            return params;
        }

        // Handle the OAuth response
        const params = getQueryParams();
        const messageDiv = document.getElementById('message');

        if (params.code) {
            // Authorization code received
            messageDiv.innerHTML = `Authorization Code: ${params.code}`;
            
            // You can send the code to your server for token exchange here
            // Example:
            /*
            fetch('https://yourserver.com/exchange-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: params.code })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Token data:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
            */
        } else if (params.error) {
            // Handle error
            messageDiv.innerHTML = `Error: ${params.error}`;
        } else {
            messageDiv.innerHTML = 'No authorization code found.';
        }
    </script>
</body>
</html>
