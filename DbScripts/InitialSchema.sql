CREATE DATABASE GoalsDB

CREATE TABLE Goals
(
  Id INT IDENTITY PRIMARY KEY,
  Name NVARCHAR(255),
  Completed BIT
)