<?php
session_start();
if($_SERVER["REQUEST_METHOD"] === "POST") {
    $rideId = json_decode(file_get_contents("php://input"), true);
    if(isset($rideId["rideId"])) {
    require_once("../database/connect.php");
    $id = $rideId["rideId"];
    $_SESSION["ride-id"] = $id;
    $status = "started";
    $stmt = $conn->prepare("UPDATE rides SET status= :status WHERE id= :id");
    $stmt->bindParam(":id", $id);
    $stmt->bindParam(":status", $status);
    $stmt->execute();
    echo json_encode("status updated");
}
}
$conn = null;