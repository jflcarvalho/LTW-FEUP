<?php
    if (!isset($_POST['username'])) die('No username');
    strlen($_POST['username']) > 4 ? $reply['valid'] = 'true' : $reply['valid'] = 'false';
    echo json_encode($reply);
?>