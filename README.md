# Shopping List API

This repository contains a simple Express server application that provides a CRUD (Create, Read, Update, Delete) API for a shopping list. The server uses MySQL as the database backend and stores the shopping list items and their quantities.

## Prerequisites

- [Node.js](https://nodejs.org/)
- MySQL Database
- `.env` file with the required environment variables (explained below)

## Setup & Installation

1. Clone this repository.
2. Install the required npm packages:

```bash
npm install
```

3. Setup your MySQL database (in this case you can change *your_database_name* with your actual database name) and create a .env file in the root directory with the following environment variables:

```makefile
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

4. Run the server:
```bash
node index.js
```
The server should start and listen on port 3000, and it will connect to the database and set up the required table if it doesn't exist.


## API Endpoints

### Get Shopping List

- **Endpoint:** `/shopping-list`
- **Method:** `GET`
- **Description:** Retrieves all items from the shopping list.

### Retrieve a Single Item from Shopping List

- **Endpoint:** `/shopping-list/:id`
- **Method:** `GET`
- **Parameters:** `id` - ID of the item to be retrieved.
- **Description:** Retrieves a single item from the shopping list based on its unique ID.

### Add an Item to Shopping List

- **Endpoint:** `/shopping-list`
- **Method:** `POST`
- **Body:** 
    ```json
    {
        "item": "Item Name",
        "quantity": "Quantity of the item"
    }
    ```
- **Description:** Adds a new item to the shopping list.

### Update an Item in Shopping List

- **Endpoint:** `/shopping-list/:id`
- **Method:** `PUT`
- **Parameters:** `id` - ID of the item to be updated.
- **Body:** 
    ```json
    {
        "item": "Updated Item Name",
        "quantity": "Updated Quantity of the item"
    }
    ```
- **Description:** Updates an existing item in the shopping list.

### Delete an Item from Shopping List

- **Endpoint:** `/shopping-list/:id`
- **Method:** `DELETE`
- **Parameters:** `id` - ID of the item to be deleted.
- **Description:** Removes an item from the shopping list.

## API Endpoints

### Get Shopping List

- **Endpoint:** `/shopping-list`
- **Method:** `GET`
- **Description:** Retrieves all items from the shopping list.

### Retrieve a Single Item from Shopping List

- **Endpoint:** `/shopping-list/:id`
- **Method:** `GET`
- **Parameters:** `id` - ID of the item to be retrieved.
- **Description:** Retrieves a single item from the shopping list based on its unique ID.

### Add an Item to Shopping List

- **Endpoint:** `/shopping-list`
- **Method:** `POST`
- **Body:** 
    ```json
    {
        "item": "Item Name",
        "quantity": "Quantity of the item"
    }
    ```
- **Description:** Adds a new item to the shopping list.

### Update an Item in Shopping List

- **Endpoint:** `/shopping-list/:id`
- **Method:** `PUT`
- **Parameters:** `id` - ID of the item to be updated.
- **Body:** 
    ```json
    {
        "item": "Updated Item Name",
        "quantity": "Updated Quantity of the item"
    }
    ```
- **Description:** Updates an existing item in the shopping list.

### Delete an Item from Shopping List

- **Endpoint:** `/shopping-list/:id`
- **Method:** `DELETE`
- **Parameters:** `id` - ID of the item to be deleted.
- **Description:** Removes an item from the shopping list.

# Disclaimer

The code provided in this repository is offered "as-is" and without any warranties or guarantees of fitness for a specific purpose. While efforts have been made to ensure accuracy and functionality, it is important to acknowledge the following points before utilizing the code:

No Warranty: The code is provided without warranty of any kind, either expressed or implied, including but not limited to, the implied warranties of merchantability and fitness for a particular purpose. The entire risk as to the quality and performance of the code is with the user.

Use at Your Own Risk: The code has been created to demonstrate a specific concept or functionality. It may not be suitable for all environments or applications. Users are advised to thoroughly review, test, and customize the code to meet their own requirements and standards.

No Support: The authors and contributors of the code may not be available for support or assistance. While efforts may be made to address issues or questions, there is no guarantee of timely response or resolution.

Liability Limitation: In no event shall the authors or contributors be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this code, even if advised of the possibility of such damage.

Security Considerations: It is the responsibility of the user to assess and implement appropriate security measures when using or deploying the code. Code from external sources should be reviewed for potential vulnerabilities before being integrated into production systems.

By using the code provided in this repository, you acknowledge that you have read, understood, and agreed to these terms. You are encouraged to exercise caution and due diligence in your utilization of the code for your specific purposes.