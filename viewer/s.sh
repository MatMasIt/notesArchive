git config core.quotepath off
rm tempdata
touch tempdata
 git ls-files -z | xargs -0 -n1 -I{} -- git log -1 --format="%ai {}" {} | grep appunti.md | sort | awk '{for (i=4; i<=NF; i++) print $i}' | tail -n 20 | tac | tee tempdata
php viewer/jp.php
rm tempdata
mv list.json viewer/list.json
