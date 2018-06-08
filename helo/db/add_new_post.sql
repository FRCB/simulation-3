INSERT INTO posts (title, username, content)
VALUES ($1, $2, $3);
SELECT *
FROM posts;