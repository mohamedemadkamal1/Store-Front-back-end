# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index => 'http://localhost:3000/products/' [GET]
- Show => 'http://localhost:3000/product/:id' [GET]
- Create => [token required] 'http://localhost:3000/product/' [POST]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required] => 'http://localhost:3000/users/' [GET]
- Show [token required] => 'http://localhost:3000/user/:id' [GET]
- Create N[token required] => 'http://localhost:3000/user/' [POST]

#### Orders
- Current Order by user (args: user id)[token required] 'http://localhost:3000/orders/:id' [GET]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
TABLE: products(id SERIAL PRIMARY KEY, name VARCHAR(50), price integer); 
-  id
- name
- price
- [OPTIONAL] category

#### User
TABLE: users(id SERIAL PRIMARY KEY, firstname VARCHAR(50), lastname VARCHAR(50), password VARCHAR);
- id
- firstName
- lastName
- password

#### Orders
TABLE: orders(id SERIAL PRIMARY KEY, status VARCHAR(20), user_id REFERENCES users(id));
- id
- id of each product in the order => this will be added to a new table called order-products table.
- quantity of each product in the order => this will be added to a new table called order-products table.
- user_id
- status of order (active or complete)

#### order_products
=> Due to the many to many relationship of the prdouct_id and the order_id, I have create a joining table for them.
order_products(
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id)
)
- id
- qunatity
- order_id
- product_id