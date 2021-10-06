<?php
    include 'db_connection.php';

    $conn = OpenCon();
    echo "Conexion Successfully";

    $sql = "SELECT * FROM users where name = '".$_POST["nickname"]."' and password = '".$_POST["password"]."'";

    if($result = $conn->query($sql))
    {
        //printf("La selección devolvió %d filas. \n", $resultado->num_rows);
        /* Liberar el conjunto de resultados */
        CloseCon($conn);
        echo'result '.json_encode($result->num_rows);
    }

?>