INSERT INTO users (username, password, profile_picture)
VALUES ($1, $2, null);

SELECT *
FROM users;