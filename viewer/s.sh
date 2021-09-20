git config core.quotepath off
rm tempdata
touch tempdata
git log -n 300 --pretty=format:"%h"  | for i in $(cat) ; do
    printf '%s\n' $(git show --pretty="format:" --numstat $i | awk '{print($3)}')  >> tempdata
done
cat tempdata |  awk '!x[$0]++'|  perl -ne 'chomp(); if (-e $_) {print "$_\n"}'| grep -v ".stackedit-trash" | tee tempdata
php viewer/jp.php
rm tempdata
mv list.json viewer/list.json
