<?php
$files=file("tempdata");
function dirtree($dir, $regex='', $ignoreEmpty=false)
{
    if (!$dir instanceof DirectoryIterator) {
        $dir = new DirectoryIterator((string)$dir);
    }
    $dirs  = array();
    $files = array();
    foreach ($dir as $node) {
        if ($node->isDir() && !$node->isDot()) {
            $tree = dirtree($node->getPathname(), $regex, $ignoreEmpty);
            if ((!$ignoreEmpty || count($tree)) && $node->getFilename()!=".stackedit-trash") {
                $dirs[$node->getFilename()] = $tree;
            }
        } elseif ($node->isFile()) {
            $name = $node->getFilename();
            if ('' == $regex || preg_match($regex, $name)) {
                $files[] = $name;
            }
        }
    }
    asort($dirs);
    sort($files);

    return $dirs + $files;
}
$list["all"]=dirtree("latest");
function strip_comments($html)
{
    $html = str_replace(array("\r\n<!--", "\n<!--"), "<!--", $html);
    while(($pos = strpos($html, "<!--")) !== false)
    {
        if(($_pos = strpos($html, "-->", $pos)) === false)
            $html = substr($html, 0, $pos);
        else
            $html = substr($html, 0, $pos) . substr($html, $_pos+3);
    }
    return $html;
}
function extractT($str){
	$s="";
	$li=explode("\n",$str);
	$i=0;
	foreach($li as $ll){
		if($i<5){
			$i++;
			continue;
		}
		$s.=$ll."\n";
		$i++;
	}
	$s=str_replace("\n","  ",strip_comments($s));
	$s=preg_replace("/[^[:alnum:][:space:]]/u", '', $s);
	return mb_substr($s,0,300);
}
foreach($files as $file){
	$file=trim($file);
	$w=explode("/",$file);
	$list["recent"][]=[
		"path"=>$file,
		"size"=>filesize($file),
		"subject"=>$w[1],
		"extract"=>extractT(file_get_contents($file)),
		"humanDay"=>str_replace("_"," ",$w[4])." ".$w[3]." ".$w[2]
	];
}
$list["lastUpdate"]=["unix"=>time(),"human"=>date("d/m/Y H:i:s")",timezone"=>date_default_timezone_get()];
file_put_contents("list.json",json_encode($list,JSON_PRETTY_PRINT));
