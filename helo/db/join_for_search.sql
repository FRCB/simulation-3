SELECT users.id, posts.id 
FROM users
INNER JOIN posts 
ON users.id = posts.id;
SELECT * from posts
WHERE username = $1;