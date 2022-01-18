# walmart palindrome challange

This is the front end that allows direct interaction with the user to search for discounts when this search is a palindrome.

# To run locally

It is necessary to have the Back-end application found in the following link https://github.com/vrborjasm/walmartBackEnd, both apps must be in the same root folder and you must also have the database files that you can download from the following link https://github.com/walmartdigital/products-db.

The first step is to clone the repository with the following command:

### `git clone https://github.com/vrborjasm/walmartFrontEnd.git`

The second step is to install the application dependencies, for this you must use the console inside the app directory and run the following command:

### `make build`

The third step will be to run the following command:

### `make up`

The fourth step is to open another console with location in the root folder and execute the following command:

### `database-setup`

At the end of these steps you will find the application working with the front-end at http://localhost:3001/ and the server at http://localhost:3000/.
