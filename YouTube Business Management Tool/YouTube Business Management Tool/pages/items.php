<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Goldkey - Inventory</title>

    <!-- Bootstrap Core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../vendor/metisMenu/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../dist/css/sb-admin-2.css" rel="stylesheet">
    <link href="../dist/css/goldkeyCustom.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../vendor/morrisjs/morris.css" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon"
        type="image/png"
        href="../img/goldkeyfav.png" />

    <!-- Custom Fonts -->
    <link href="../vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.php">Goldkey v1.0</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-messages">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Tom Honeyands</strong>
                                    <span class="pull-right text-muted">
                                        <em>37 minutes ago</em>
                                    </span>
                                </div>
                                <div>Hey mate. Wondering if you had the chance to look at my email...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Bill Garner</strong>
                                    <span class="pull-right text-muted">
                                        <em>2 hours ago</em>
                                    </span>
                                </div>
                                <div>Yo, just saw your latest video. Nice job. Do you have any...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>Rollo Goldstaub</strong>
                                    <span class="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Hi Marcus. Thanks for showing up yesterday, great to see you again...</div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-messages -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> New Comment
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span class="pull-right text-muted small">12 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-envelope fa-fw"></i> Message Sent
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-tasks fa-fw"></i> New Task
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span class="pull-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a class="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                    <!-- /.dropdown-alerts -->
                </li>
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="sidebar-search">
                            <div class="input-group custom-search-form">
                                <input type="text" class="form-control" placeholder="Search..." />
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                            <!-- /input-group -->
                        </li>
                        <li>
                            <a href="index.php">
                                <i class="fa fa-dashboard fa-fw"></i>Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-youtube-play fa-fw"></i>Projects
                                <span class="fa arrow"></span>
                            </a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="projects.php">New Project</a>
                                </li>
                                <li>
                                    <a href="projects.php">Overview</a>
                                </li>
                                <li>
                                    <a href="projects.php">In Progress</a>
                                </li>
                                <li>
                                    <a href="projects.php">Completed</a>
                                </li>
                            </ul>
                            <!-- /.nav-second-level -->
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-briefcase fa-fw"></i>Items
                                <span class="fa arrow"></span>
                            </a>
                            <ul class="nav nav-second-level">
                                <li>
                                    <a href="items.php">New Item</a>
                                </li>
                                <li>
                                    <a href="items.php">All Items</a>
                                </li>
                                <li>
                                    <a href="items.php">Assigned</a>
                                </li>
                                <li>
                                    <a href="items.php">Unassigned</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="analytics.html">
                                <i class="fa fa-bar-chart-o fa-fw"></i>Analytics
                            </a>
                        </li>
                        <li>
                            <a href="events.html">
                                <i class="fa fa-calendar fa-fw"></i>Events
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>
            <!-- /.navbar-static-side -->
        </nav>

        <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Inventory</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-red">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-warning fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div id="unassigned" class="huge">0</div>
                                    <div>Unassigned Items</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-red">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-briefcase fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div id="assigned" class="huge">0</div>
                                    <div>Assigned Items</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-red">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-youtube-play fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div id="published" class="huge">0</div>
                                    <div>Video Items Published</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="panel panel-red">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-3">
                                    <i class="fa fa-inbox fa-5x"></i>
                                </div>
                                <div class="col-xs-9 text-right">
                                    <div id="archived" class="huge">0</div>
                                    <div>Archived Items</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-9">

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-briefcase fa-fw"></i>
                            Current Items
                            <div class="pull-right">
                                <input type="text" class="filterSearch" id="itemSearch" placeholder="Item search..." />
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle filterButton" data-toggle="dropdown">
                                        Filter
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right" role="menu">
                                        <li>
                                            <a id="unassign" class="filter" onclick="filterToggle('unassign')" href="#">Unassigned Items</a>
                                        </li>
                                        <li>
                                            <a id="assign" class="filter" onclick="filterToggle('assign')" href="#">Assigned Items</a>
                                        </li>
                                        <li>
                                            <a id="archive" class="filter" onclick="filterToggle('archive')" href="#">Archived Items</a>
                                        </li>
                                        <li class="divider"></li>
                                        <li>
                                            <a id="reset" onclick="filterToggle('reset')" href="#">Reset Filters</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-hover table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Brand</th>
                                                    <th>Sender</th>
                                                    <th>Active Project</th>
                                                    <th>Category</th>
                                                    <th>Subcategory</th>
                                                    <th>Details</th>
                                                    <th>Return By</th>
                                                    <th>Archived?</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody id="itemsTable">
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- /.table-responsive -->
                                </div>
                                <!-- /.col-lg-8 (nested) -->
                            </div>
                            <!-- /.row -->
                        </div>
                        <!-- /.panel-body -->
                    </div>

                    
                    <!-- /.panel -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <i class="fa fa-bar-chart-o fa-fw"></i> Monthly Item Flow
                            <div class="pull-right">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                        Actions
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu pull-right" role="menu">
                                        <li>
                                            <a href="#">Last 30 Days</a>
                                        </li>
                                        <li>
                                            <a href="#">This Year</a>
                                        </li>
                                        <li>
                                            <a href="#">All Time</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="row">
                                <!-- /.col-lg-4 (nested) -->
                                <div class="col-lg-12">
                                    <div id="morris-bar-chart"></div>
                                </div>
                                <!-- /.col-lg-8 (nested) -->
                            </div>
                            <!-- /.row -->
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-8 -->
                <div class="col-lg-3">
                    <div class="row">
                        <div class="panel panel-default">
                            <div id="lowerPanel" class="panel-heading">
                                <i class="fa fa-plus fa-fw"></i>New Item
                            </div>
                            <!-- /.panel-heading -->
                            <div class="panel-body newItem" id="newItem">
                                <div class="panel-body">
                                    <form id="itemForm">
                                        
                                            <div class="form-group itemLong">
                                                <label for="itemName">Item Name</label>
                                                <input required type="text" class="form-control" id="newItemName" placeholder="Name of item" />
                                            </div>
                                        
                                        <div class="col-md-6 itemInput">
                                            <div class="form-group">
                                                <label for="itemName">Item Category</label>
                                                <input required type="text" class="form-control itemCat" id="newItemCategory" placeholder="Type of item" name="category" />
                                            </div>
                                            <div class="form-group">
                                                <label for="subcat">Item Subcategory</label>
                                                <input type="text" required class="form-control itemSub" id="newItemSubCategory" placeholder="Item subcategory" />
                                            </div>
                                            <div class="form-group">
                                                <label for="brand">Brand</label>
                                                <input type="text" required class="form-control brand" id="newitemBrand" placeholder="Item brand" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 itemInput">
                                            <div class="form-group">
                                                <label for="sender">Sender</label>
                                                <input type="text" class="form-control projSender" id="newItemSender" placeholder="(Can be blank)" />
                                            </div>
                                            <div class="form-group">
                                                <label for="shipDate">Date Shipped</label>
                                                <input type="date" class="form-control" id="newItemShipDate" />
                                            </div>
                                            <div class="form-group">
                                                <label for="returnDate">Date Returnable</label>
                                                <input type="date" class="form-control" id="newItemReturnDate" />
                                            </div>
                                        </div>
                                        <div class="form-group itemLong">
                                            <label for="details">Item Details</label>
                                            <textarea class="form-control" id="newItemDetails" rows="3"></textarea>
                                        </div>
                                            
                                            
                                            <button type="button" id="newItemSubmit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <i class="fa fa-bar-chart-o fa-fw"></i>Current Inventory
                            </div>
                            <div class="panel-body">
                                <div id="morris-donut-chart"></div>
                            </div>
                            <!-- /.panel-body -->
                        </div>
                        </div>
                        <!-- /.panel -->
                    </div>
                <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../vendor/raphael/raphael.min.js"></script>
    <script src="../vendor/morrisjs/morris.min.js"></script>
    <script src="../data/custom_morris.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../dist/js/sb-admin-2.js"></script>

    <script src="../js/items.js"></script>

</body>

</html>
