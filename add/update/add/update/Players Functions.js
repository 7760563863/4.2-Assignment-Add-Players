Retrieving all players:
SELECT * FROM Players;
This query retrieves all the records from the "Players" table.

Retrieving players by a specific condition:
SELECT * FROM Players WHERE team = 'Barcelona';
This query retrieves all the players from the "Players" table who belong to the team 'Barcelona'.

Sorting players by a specific attribute:
SELECT * FROM Players ORDER BY age DESC;
This query retrieves all the players from the "Players" table and sorts them in descending order based on their age.

Counting the number of players:
SELECT COUNT(*) FROM Players;
This query returns the total count of players in the "Players" table.

Updating player information:
UPDATE Players SET team = 'Real Madrid' WHERE player_id = 123;
