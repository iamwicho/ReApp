<?php
    include 'db_connection.php';

    $conn = OpenCon();

    echo "Conexion Successfully";

    if($resultado = $conn->query("SELECT * FROM users where name = 'wicho' and password = 'wicho'"))
    {
        printf("La selección devolvió %d filas. \n", $resultado->num_rows);

        /* Liberar el conjunto de resultados */
        CloseCon($conn);
    }

?>