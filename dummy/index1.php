<?php
require 'config.php';
$isBOT = false;
$hash = '<script>document.write(document.location.hash.substring(2))</script>';
$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//echo $l = "$actual_link"."$hash";
//$d = explode("/", $l);
//echo count($d);
//echo $d[count($d)-1];
//die();
if (preg_match('/Applebot|baiduspider|Bingbot|Discordbot|facebookexternalhit|Googlebot|Googlebot-Image|ia_archiver|LinkedInBot|msnbot|Naverbot|Pinterestbot|seznambot|Slurp|teoma|TelegramBot|Twitterbot|Yandex|Yeti/i', $_SERVER['HTTP_USER_AGENT'])) {
    //echo "This is bot...<br>";
    $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $isBOT = true;
    //echo "<hr>$actual_link$hash<br>";
    // $html = file_get_contents('templates/footer.html');
    // echo $html;
}
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
require 'templates/html_head.php';
if ($isBOT) {
  require 'templates/header.html';
  require 'templates/cart.html';
  require 'templates/footer.html';
}else {
?>
<body ng-controller="catalogController as ctlgCtrl">

    <div ng-include="'templates/header.html'"></div>

    <div ng-view></div>

    <div ng-include="'templates/footer.html'"></div>

    <?php echo $footer; ?>
</body>
<?php
}
require 'templates/html_foot.php';
?>
