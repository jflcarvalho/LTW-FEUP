<?php
    if (!isset($_GET['username'])) die('username not set');
    if (!isset($_GET['tries'])) die('tries not set');
    var_dump(http_response_code(400));
?>