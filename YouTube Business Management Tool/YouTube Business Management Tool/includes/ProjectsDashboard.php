<?php

    $sql = "exec SP_PROJECTS_OVERVIEW";
    $stmt = sqlsrv_query( $conn, $sql );
    if( $stmt === false) {
        die( print_r( sqlsrv_errors(), true) );
    }
    while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
        $incompleteProjects = $row['incompleteProjects'];
        $publishedVideos   = $row['publishedVideos'];
        $completeProjects  = $row['completeProjects'];
    }
    sqlsrv_free_stmt( $stmt);


    function getProjectsSelect() {

        include "../includes/databaseConn.php";

        $sql = "select project_Name from project order by project_id desc";

        echo ('         <i class="fa fa-clock-o fa-fw"></i>Project Name
                        <select id="videoList" name="videoList">');

        $stmt = sqlsrv_query( $conn, $sql );
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
        while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
            echo ('<option value="' . $row['project_Name']. '">'. $row['project_Name'].'</option>');
        }

        sqlsrv_free_stmt( $stmt);

        echo ('</select>');
    }

    function getProjectInfo() {

        include "../includes/databaseConn.php";

        $sql = "exec SP_PROJECT_GetEvents null";
        $stmt = sqlsrv_query( $conn, $sql );
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
        }
        $count = 0;
        while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC) ) {
            $icon = 'null';
            $invert = '';
            $style = 'info';

            if ($row['Type'] == "Creation") {$icon = 'plus'; $style = 'success';}
            else if ($row['Type'] == "Production") {$icon = 'film';}
            else if ($row['Type'] == "Update") {$icon = 'save';}
            else if ($row['Type'] == "Publish") {$icon = 'arrow-up';}
            else if ($row['Type'] == "Completion") {$icon = 'check'; $style = 'success';}
            else {$icon = 'save';}

            if ($count % 2 == 0) {$invert = 'class="timeline-inverted"';}



            echo ('<li '. $invert .'>
                                <div class="timeline-badge '. $style .'">
                                    <i class="fa fa-'. $icon .'"></i>
                                </div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4 class="timeline-title">'. $row['Type'] .'</h4>
                                        <p>
                                            <small class="text-muted"><i class="fa fa-clock-o"></i> ' . $row['PublishedTime']. '</small>
                                        </p>
                                    </div>
                                    <div class="timeline-body fillerText">
                                    '. $row['Details'] .'
                                    </div>
                                </div>
                            </li> ');
            $count ++;
        }

        sqlsrv_free_stmt( $stmt);


    }

    function getProjectsStatus() {

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
    }
?>