CREATE TABLE events (
    id SERIAL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    location VARCHAR(100),
    event_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    creator_id INTEGER NOT NULL,
    CONSTRAINT eventsPK PRIMARY KEY(id),
    CONSTRAINT creatorFK FOREIGN KEY(creator_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION update_modified_column()
    RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_timestamp
BEFORE UPDATE ON events
FOR EACH ROW
EXECUTE FUNCTION update_modified_column();