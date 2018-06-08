UPDATE posts
SET title = $2, username = $3, content = $4
where id = $1;
select *
from posts;