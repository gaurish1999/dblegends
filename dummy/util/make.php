<?php
require '../config.php';
switch ($_GET["what"]) {
  case 'sitemap':
    $data = file_get_contents("https://reportingserver.iretaill.com/module.php?to=API.storeSiteMap&store=".$CONFIG_store);
    $file = fopen("sitemap.xml", "w");
    fwrite($file, $data);
    fclose($file);
    break;

  case 'google-feed':
    $data = file_get_contents("https://reportingserver.iretaill.com/module.php?to=tAPI.googleproductfeed&store=".$CONFIG_store."&debug");
    $file = fopen("google.csv", "w");
    fwrite($file, $data);
    fclose($file);
    break;

  case 'fb-feed':
    $data = file_get_contents("https://reportingserver.iretaill.com/module.php?to=tAPI.fbproductfeed&store=".$CONFIG_store."&debug");
    $file = fopen("fb.csv", "w");
    fwrite($file, $data);
    fclose($file);
    break;

  case 'all':
    $data = file_get_contents("https://reportingserver.iretaill.com/module.php?to=API.storeSiteMap&store=".$CONFIG_store);
    $file = fopen("sitemap.xml", "w");
    fwrite($file, $data);
    fclose($file);

    $data = file_get_contents("https://reportingserver.iretaill.com/module.php?to=tAPI.googleproductfeed&store=".$CONFIG_store."&debug");
    $file = fopen("google.csv", "w");
    fwrite($file, $data);
    fclose($file);

    $data = file_get_contents("https://reportingserver.iretaill.com/module.php?to=tAPI.fbproductfeed&store=".$CONFIG_store."&debug");
    $file = fopen("fb.csv", "w");
    fwrite($file, $data);
    fclose($file);
    break;

  default:
    echo "I will not ..... :)";
    break;
}
?>
