<?php
require 'config.php';
$tu = "./templates_raw/"; // template URL
$url="https://reportingserver.iretaill.com/module.php?to=API.getStore&store=$CONFIG_store";
$curl=curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($curl);
curl_close($curl);
$data=json_decode($response,true);
$store_info=$data['store'];
$storename=$store_info['storename'];
$PageTitle = $storename;
$storelogo=$store_info['logo'];
$header = base64_decode($store_info["custom_header"]);
$footer = base64_decode($store_info["custom_footer"]);
$mbo = 'false';
if ($store_info["mbo"]=="1") {
  $mbo = 'true';
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <?php
    // API call for seeking custom header from the reporting server......
    require $tu.'html_head.php';
    ?>
  </head>
  <body>
    <?php require $tu.'header.php'; ?>
    <?php require $tu.'navbar.php'; ?>
    <!-- Body elements ..... -->
    <?php require $tu.'footer.php'; ?>
  </body>
</html>
