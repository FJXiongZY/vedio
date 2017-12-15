<?php
header("content-type:text/html;charset=utf-8");


$result = file_get_contents("https://movie.douban.com/j/search_tags?type=tv&tag=%E7%83%AD%E9%97%A8&source=index");

echo $result;


?>