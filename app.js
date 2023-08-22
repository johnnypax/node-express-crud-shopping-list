const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config(); // load enviroment variables from .env file

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Database connection established');
        createTableIfNotExists();
    }
});

// Table creation function, DDL
function createTableIfNotExists() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS shopping_list (
            id INT AUTO_INCREMENT PRIMARY KEY,
            item VARCHAR(255) NOT NULL,
            quantity INT
        )
    `;

    db.query(createTableQuery, (err, result) => {
        if (err) {
        console.error('Table creation error:', err);
        } else {
        console.log('Table creation successful');
        insertSampleData();
        }
    });
}

// Sample data insertion
function insertSampleData() {
    const sampleData = [
        { item: 'Eggs', quantity: 2 },
        { item: 'Bread', quantity: 1 },
        { item: 'Milk', quantity: 3 },
        { item: 'Cafe', quantity: 6 }
    ];

    const insertQuery = 'INSERT INTO shopping_list (item, quantity) VALUES ?';

    db.query(insertQuery, [sampleData.map(item => [item.item, item.quantity])], (err, result) => {
        if (err) {
        console.error('Error while inserting example data:', err);
        } else {
        console.log('Example data insertion success!');
        }
    });
}

// API for shopping list as array
app.get('/shopping-list', (req, res) => {
    db.query('SELECT * FROM shopping_list', (err, result) => {
        if (err) {
        console.error(err);
        res.status(500).send('Server error');
        } else {
        res.send(result);
        }
    });
});
  
// API to retrieve a single item from the shopping list
app.get('/shopping-list/:id', (req, res) => {
    const itemId = req.params.id;
    const query = 'SELECT * FROM shopping_list WHERE id = ?';
    db.query(query, [itemId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server Error');
        } else {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).send('Item not found');
            }
        }
    });
});

// API for adding a new item to the shopping list
app.post('/shopping-list', (req, res) => {
    const { item, quantity } = req.body;
    const query = 'INSERT INTO shopping_list (item, quantity) VALUES (?, ?)';
    db.query(query, [item, quantity], (err, result) => {
        if (err) {
        console.error(err);
        res.status(500).send('Server error');
        } else {
        res.send('Item successfully added');
        }
    });
});
  
  // API for updating an item existing in the shopping list
app.put('/shopping-list/:id', (req, res) => {
    const itemId = req.params.id;
    const { item, quantity } = req.body;
    const query = 'UPDATE shopping_list SET item = ?, quantity = ? WHERE id = ?';
    db.query(query, [item, quantity, itemId], (err, result) => {
        if (err) {
        console.error(err);
        res.status(500).send('Server error');
        } else {
        res.send('Item successfully updated');
        }
    });
});
  
// API for deleting an element existing in the shopping list
app.delete('/shopping-list/:id', (req, res) => {
    const itemId = req.params.id;
    const query = 'DELETE FROM shopping_list WHERE id = ?';
    db.query(query, [itemId], (err, result) => {
        if (err) {
        console.error(err);
        res.status(500).send('Server error');
        } else {
        res.send('Item successfully deleted');
        }
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
