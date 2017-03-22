<?php

        include "../includes/databaseConn.php";

        $sql = "exec SP_PROJECTS_GETSTATUS";

        echo ('');

        $stmt = sqlsrv_query( $conn, $sql );
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }

        while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
            $percent = 0;
            $color = 'progress-bar';

            if ($row['status'] == "Complete") {$percent = 100; $color = 'progress-bar-success';}
            if ($row['status'] == "Item To Return") {$percent = 90; $color = 'progress-bar-warning';}
            if ($row['status'] == "Published") {$percent = 80; $color = 'progress-bar-success';}
            if ($row['status'] == "Edited") {$percent = 70; $color = 'progress-bar-info';}
            if ($row['status'] == "Filmed") {$percent = 60; $color = 'progress-bar-info';}
            if ($row['status'] == "Production") {$percent = 50; $color = 'progress-bar-info';}
            if ($row['status'] == "Pre-Production") {$percent = 40; $color = 'progress-bar-info';}
            if ($row['status'] == "Awaiting Item") {$percent = 30; $color = 'progress-bar-warning';}
            if ($row['status'] == "Planning") {$percent = 20;}


            echo ('<li>
                                    <a href="#">
                                        <div>
                                            <p>');

            echo ('<strong>'.
                    $row['project_Name'].
                    '</strong>'.
                    '<span class="pull-right text-muted">
                    '.$percent.
                    '% Complete</span>
                    </p>
                    <div class="progress progress-striped active">
                    <div class="progress-bar '.$color.'" role="progressbar" aria-valuenow="'.$percent.' " aria-valuemin="0" aria-valuemax="100" style="width: '.$percent.'%">
                    <span class="sr-only">'
                    .$percent.
                    '% Complete (success)</span>'.
                 $row['status']
                 );


            echo('</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="divider"></li>');
        }

        sqlsrv_free_stmt( $stmt);

        echo ('



');
 
?>