<?php
// Check if the 'url' query parameter is set
if (isset($_GET['url'])) {
    // Get the URL from the query parameter
    $url = $_GET['url'];

    // Validate the URL
    if (filter_var($url, FILTER_VALIDATE_URL)) {
        // Redirect to the URL
        header("Location: $url");
        exit();
    } else {
        echo "Invalid URL.";
    }
} else {
    echo "No URL provided.";
}
