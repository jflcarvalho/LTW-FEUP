<?php

if (isset($_SESSION['success_messages'])) {
    echo '<div id="success-messages" class="log-messages">' . $_SESSION['success_messages'] . '</div>';
} else if (isset($_SESSION['error_messages'])) {
    echo '<div id="error_messages" class="log-messages">' . $_SESSION['error_messages'] . '</div>';
}

?>