<?php
header('Content-Type: application/json');
$data = array(
    "message" => "Olá do PHP!",
    "value" => 42
);
echo json_encode($data);
?>
