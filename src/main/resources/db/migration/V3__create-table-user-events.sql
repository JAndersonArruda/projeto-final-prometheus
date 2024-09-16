CREATE TABLE user_events (
    user_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,
    CONSTRAINT userPK PRIMARY KEY (user_id, event_id),
    CONSTRAINT userFK FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT eventsFK FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);
