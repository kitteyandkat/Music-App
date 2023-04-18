DROP TABLE IF NOT EXIST songs;
DROP TABLE IF NOT EXIST artists;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT,
    img TEXT
);

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    artistId INT REFERENCES artists(id),
    name TEXT NOT NULL,
    duration TEXT NOT NULL,
    play_count VARCHAR(50),
    img TEXT
);

INSERT INTO artists VALUES
(DEFAULT, 'Nas', 48, 'https://www.rollingstone.com/wp-content/uploads/2021/06/Nas-GettyImages-1234567890.jpg?resize=1800,1200&w=1200'),
(DEFAULT, 'J. Cole', 37, 'https://www.rollingstone.com/wp-content/uploads/2021/06/J-Cole-GettyImages-1234567890.jpg?resize=1800,1200&w=1200'),
(DEFAULT, 'Travis Scott', 30, 'https://www.rollingstone.com/wp-content/uploads/2021/06/Travis-Scott-GettyImages-1234567890.jpg?resize=1800,1200&w=1200'),
(DEFAULT, 'Cardi B', 29, 'https://www.rollingstone.com/wp-content/uploads/2021/06/Cardi-B-GettyImages-1234567890.jpg?resize=1800,1200&w=1200'),
(DEFAULT, 'Nicki Minaj', 39, 'https://www.rollingstone.com/wp-content/uploads/2021/06/Nicki-Minaj-GettyImages-1234567890.jpg?resize=1800,1200&w=1200'),
(DEFAULT, 'Post Malone', 27, 'https://www.rollingstone.com/wp-content/uploads/2021/06/Post-Malone-GettyImages-1234567890.jpg?resize=1800,1200&w=1200'),
(DEFAULT, 'Jay-Z', 51, 'https://www.rollingstone.com/wp-content/uploads/2021/06/Jay-Z-GettyImages-1234567890.jpg?resize=1800,1200&w=1200');

INSERT INTO songs VALUES 
(DEFAULT, 7, 'Song Cry', '5:03', 0, 'https://i.discogs.com/lgxYHTfoiQe4WSHpqgEvHf9UcqTXv7CJxPUOlPK32Kw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzMjk5/MTEtMTYxMDM5MDA3/Ni01Njc5LmpwZWc.jpeg'),
(DEFAULT, 1, 'Empire State of Mind', '4:30', 0, 'https://i1.sndcdn.com/artworks-000000000000-0tq7xq-t500x500.jpg'),
(DEFAULT, 7, '99 Problems', '4:30', 0, 'https://i1.sndcdn.com/artworks-000000000000-0tq7xq-t500x500.jpg'),
(DEFAULT, 7, 'Dirt Off Your Shoulder', '4:30', 0, 'https://i1.sndcdn.com/artworks-000000000000-0tq7xq-t500x500.jpg'),
(DEFAULT, 7, 'Run This Town', '4:30', 0, 'https://i1.sndcdn.com/artworks-000000000000-0tq7xq-t500x500.jpg'),
(DEFAULT, 7, 'Numb/Encore', '4:30', 0, 'https://i1.sndcdn.com/artworks-000000000000-0tq7xq-t500x500.jpg')
