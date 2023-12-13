-- Создать таблицы реакций и комментариев

-- Добавить несколько записей в каждую таблицу выше


-- Таблицу реакций мы создали еще на уроке
CREATE TABLE comments (
    comments_id int,
    created_at timestamp,
    author_id int,
    video_id int,
    content varchar(128)
);

INSERT INTO comments (comments_id, created_at, author_id, video_id, content)
VALUES
    (1, CURRENT_TIMESTAMP, 1, 1, 'Good video!'),
    (2, CURRENT_TIMESTAMP, 2, 2, 'Good job, user!');