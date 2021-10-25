<?php
    include 'db_connection.php';

    $conn = OpenCon();

//   $sql = "SELECT * FROM users where name = '".$_POST["nickname"]."' and password = '".$_POST["password"]."'";
//
//    if($result = $conn->query($sql))
//    {
//        CloseCon($conn);
//        echo json_encode(array('result'=> $result->num_rows));
//    }

    $sql = "SELECT * FROM users";

    if($result = $conn->query($sql))
    {
        for ($set = array (); $row = $result->fetch_assoc(); $set[] = $row);
        CloseCon($conn);
        echo json_encode($set);
    }

?>