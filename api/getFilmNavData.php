<?php
header("content-type:text/html;charset=utf-8");


$result = file_get_contents("https://movie.douban.com/j/search_tags?type=movie&source=index");

// echo json_encode($result);
echo $result;


?>