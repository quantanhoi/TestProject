CREATE TABLE ProgramState (
    id SERIAL PRIMARY KEY,
    latest_update TIMESTAMP NOT NULL
);

CREATE TABLE Dog (
    d_id SERIAL PRIMARY KEY,
    d_name VARCHAR(255) NOT NULL,
    d_age INTEGER NOT NULL
);


INSERT INTO ProgramState (latest_update) VALUES (NOW());

insert into Dog(d_name, d_age) values('Haku', 4);

--UPDATE ProgramState SET latest_update = NOW();
--SELECT latest_update FROM ProgramState;
