<?php
header("content-type:text/html;charset=utf-8");

$page = $_GET["page"];

$result = file_get_contents("https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=8&page_start={$page}");

echo $result;


?>