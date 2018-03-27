<?php
    header('Access-Control-Allow-Origin: *');
    //Database connection configuration
    $host = "host = localhost";
    $port = "port = 5435";
    $dbname = "dbname = ferozalizada";
    $credentials = "user = ferozalizada password = ";

    $db = pg_connect("$host $port $dbname $credentials");
    if($db){
        echo "Connection Successfull";
    }else{
        echo "Could not conect to the server...";

        // //connection to database successfull
        // // echo $db;

        // $schema_name = "\"project_test\"";
        // //select schema from database
        // $setpath = pg_query($db, "SET search_path = $schema_name;");
    
        // $query = "SELECT * FROM rater;";
        // $raters = pg_query($db, $query);
        // $output = "";
        // // echo "hdfgdggdfs";

        // while($rater = pg_fetch_assoc($raters)){
            
        //     $spaces = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        //     $output .= $rater["name"] . $spaces . $rater["email"] . $spaces . $rater["userid"] . "<br>";    
        // }

        // echo $output;
        // pg_close($db);
    }
?>