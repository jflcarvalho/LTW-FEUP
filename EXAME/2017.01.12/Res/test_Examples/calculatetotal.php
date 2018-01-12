<?php
  $stock["Apple"] = 5;
  $stock["Banana"] = 20;
  $stock["Pear"] = 10;
 
  $products = json_decode($_POST["products"], true);
  $total = 0;
 
  foreach ($products as $product) {
    $name = $product["name"];
    $quantity = $product["qty"];
    if($stock[$name] < $quantity) {
      $total = -1;
      break;
    } else $total += $quantity;
  }
 
  echo json_encode($total);
?>