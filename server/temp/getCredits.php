<?php
    require('./db.php');

    if (isset($_SESSION["publicKey"])) {
        $sql = "SELECT ROUND(sum(value), 2) as currentBalance FROM `transactions` join `users` on `users`.`id` = `transactions`.`userId` where publicKey = ?;";
        $stmt = mysqli_stmt_init($con);
        mysqli_stmt_prepare($stmt,$sql);
        mysqli_stmt_bind_param($stmt, "s", $_SESSION['publicKey']);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $transactionsFound = false;
        while($row = mysqli_fetch_assoc($result)){
            if($row['currentBalance'] == ""){
                echo '0';
            }else{
                echo $row['currentBalance'];
            }
            $transactionsFound = true;
            break;
        }

    }else{
        echo '0';
    }

?>