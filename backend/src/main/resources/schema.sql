CREATE TABLE IF NOT EXISTS Run (
    id INT NOT NULL,
    title varchar(250) NOT NULL,
    time INT NOT NULL,
    miles INT NOT NULL,
    location varchar(10) NOT NULL,
    PRIMARY KEY (id)
);
