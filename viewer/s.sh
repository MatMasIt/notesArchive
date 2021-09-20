git config core.quotepath off
rm tempdata
touch tempdata
tree -ifFCD --timefmt '%Y%m%d %H%M%S' latest | sort -k1 -k2 | grep "md" | awk '{print($3)}' | tail -n 10 | tee tempdata
php viewer/jp.php
rm tempdata
mv list.json viewer/list.json
