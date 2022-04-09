<!DOCTYPE html>
<html lang="en" ng-app="ngCart">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="preconnect" href="https://reportingserver.iretaill.com">
    <link rel="preconnect" href="https://static.iretaill.com">
    <meta name="apple-mobile-web-app-title" content="<?php echo $storename?> | Powered By iRetaill" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="shortcut icon" type="image/png" href="<?php echo $storelogo?>">
    <meta property="og:title" content="<?php echo $PageTitle?>">
    <title ng-bind="title"><?php echo $PageTitle?></title>
    <meta property="og:image" content="<?php echo $storelogo?>">
    <link rel="apple-touch-icon" href="<?php echo $storelogo?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo $storelogo?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo $storelogo?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo $storelogo?>">
    <!-- jQuery -->
    <script src="js/jquery-2.0.0.min.js" type="text/javascript"></script>
    <!-- Bootstrap4 files-->
    <script src="js/bootstrap.bundle.min.js" type="text/javascript"></script>
    <link href="config.css" rel="stylesheet" type="text/css"/>
    <link href="css/bootstrap.css" rel="stylesheet" type="text/css" />
    <!-- Font awesome 5 -->
    <link href="fonts/fontawesome/css/all.min.css" type="text/css" rel="stylesheet">
    <!-- plugin: slickslider -->
    <link href="plugins/slickslider/slick.css" rel="stylesheet" type="text/css" />
    <link href="plugins/slickslider/slick-theme.css" rel="stylesheet" type="text/css" />
    <script src="plugins/slickslider/slick.min.js"></script>
    <!-- plugin: owl carousel  -->
    <link href="plugins/owlcarousel/assets/owl.carousel.css" rel="stylesheet">
    <link href="plugins/owlcarousel/assets/owl.theme.default.css" rel="stylesheet">
    <script src="plugins/owlcarousel/owl.carousel.min.js"></script>

    <script>
        // You need to initialise the carousel!! when the DOM is ready
        $(function() {
            $('.carousel').carousel();
        });
    </script>

    <!-- ui style -->
    <link href="css/ui.css" rel="stylesheet" type="text/css" />
    <link href="css/responsive.css" rel="stylesheet" />
    <!-- ui javascript -->
    <script src="js/script.js" type="text/javascript"></script>

    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.7.1/loading-bar.min.css' type='text/css' media='all' />
    <!--script type='text/javascript' src='//cdnjs.cloudflare.com/ajax/libs/angular-loading-bar/0.7.1/loading-bar.min.js'></script-->
    <!--script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script-->
    <link href="js/sweetalert/sweetalert2.min.css" rel="stylesheet">
    <style media="screen">
        btn-primary {
            background-color: var(--customUIcolor) !important;
            border-color: #d161ae !important;
        }
        /* loader */

        .loader {
            position: fixed;
            color: white;
            background: #ffffff;
            width: 100%;
            height: 100%;
            z-index: 9999;
        }

        .loader>div {
            text-align: center;
            margin: 0px auto;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
        }

        .left-wrapper,
        .right-wrapper {
            padding-right: 0px;
            padding-left: 0px;
        }

        .productContainer img {
            width: 100%;
            height: auto;
        }
    </style>
    <link href="css/snow.css" rel="stylesheet">
    <link href="plugins/owlcarousel/assets/owl.carousel.css" rel="stylesheet">
    <link href="plugins/owlcarousel/assets/owl.theme.default.css" rel="stylesheet">
    <?php echo $header; ?>
</head>
