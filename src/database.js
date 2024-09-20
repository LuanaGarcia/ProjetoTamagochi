import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('pets.db');

export const init = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS pets (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        details TEXT
      );`,
      [],
      () => console.log('Table created successfully'),
      (_, err) => console.log('Failed to create table', err)
    );
  });
};

export const insertPet = (name, details, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO pets (name, details) VALUES (?, ?);`,
      [name, details],
      (_, result) => callback(true, result.insertId),
      (_, err) => callback(false, err)
    );
  });
};

export const fetchPets = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      `SELECT * FROM pets;`,
      [],
      (_, { rows: { _array } }) => callback(true, _array),
      (_, err) => callback(false, err)
    );
  });
};

