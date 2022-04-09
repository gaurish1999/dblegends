<?php
require 'config.php';
function makefile_fromtemplate($filepath, $template_url, $api_url) {
  $data = file_get_contents($api_url);
  makefile($filepath, $data);
}
function makefile($filepath, $content) {
  $file = fopen($filepath, "w");
  fwrite($file, $content);
  fclose($file);
}
$data = file_get_contents("https://reportingserver.iretaill.com/module.php?to=setup.menu&store=".$CONFIG_store);
$data = json_decode($data, true);
if ($data["status"]=="success") {
  $dir_name = "./website";
  if (!file_exists($dir_name)) {
    mkdir($dir_name);
  }
  makefile($dir_name."/header.html", "<h1>".$data["msg"]."</h1>");
  $data = $data["data"];
  foreach ($data["brands"] as $brand) {
        $dir_name = "./website/".$brand["url_name"];
        if (!file_exists($dir_name)) {
          mkdir($dir_name);
        }
        makefile($dir_name."/header.html", "<h1>".$brand["BrandName"]."</h1>");
        foreach ($brand["master_categories"] as $master_category) {
              $dir_name = "./website/".$brand["url_name"]."/".$master_category["url_name"];
              if (!file_exists($dir_name)) {
                mkdir($dir_name);
              }
              makefile($dir_name."/header.html", "<h1>".$master_category["MasterCategoryName"]."</h1>");
              foreach ($master_category["categories"] as $category) {
                    $dir_name = "./website/".$brand["url_name"]."/".$master_category["url_name"]."/".$category["url_name"];
                    if (!file_exists($dir_name)) {
                      mkdir($dir_name);
                    }
                    if ((int)$category["isvariableproduct"]) {
                      // this is a variable product page, we will only make index.php file here and this will end out workflow.....
                      makefile($dir_name."/header.html", "<h1>Products in ".$category["CategoryName"]."</h1>***Variable Product Page***");
                    }else {
                      makefile($dir_name."/header.html", "<h1>".$category["CategoryName"]."</h1>");
                    }
                    foreach ($category["products"] as $product) {
                      makefile(
                        $dir_name."/".$product["url_name"].".php",
                        "<h1>".$product["ItemName"]."</h1>
                        <h3>".$product["sku"]."</h3>
                        <h2> Rs. ".round($product["MRP"]*1.18,0)."</h2>
                        <img src='".$product["ItemImage"]."' alt='Produc Image for ".$product["ItemName"]."'><hr>");
                    }
              }

        }
  }
  echo "Success";
}else {
  echo "Oops !! Somthing went wrong !!";
}
?>
