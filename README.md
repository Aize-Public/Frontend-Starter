# Starterpack for evaluation

#### The hardware store Hardvare realises that online shopping has gotten popular and wish to offer their products through an online shop. They wish that their customer should be able to see which products they can offer, and filter the products based on a search string. On the frontpage they wish to show product news. When a customer has found what he/she is looking for, the customer should have the possibility to put that in a shopping cart.

#### The employees at Hardvare would like the opportunity to administrate the online shop, and would therefor like an administration page where they can register or remove products as the selection changes.

#### For this task we would like you to pick one or more aspects from the description of Hardvare, and implement it in your preferred language(JS, TS etc.). You can also use frameworks if you would like that. We would like you to limit the time spent on this task to 1-2 hours. Use the text as inspiration and make something big or small where you focus on what you think is the most fun.

## UI  This can be an inspiration to you. Well something better is always welcome.
![alt text](ref.png)

## This is basic starter kit. It connsist a API which will provide you some data for the frontend creation.
## You can fork this repository to create a working solution with frontend of your choice (Angular, React, JS, Typescript). Its totally your choice how you want to achieve the goal.

## How to spin it up?

  #### `Step 1` Use Yarn or npm whichever suits you (npx?)
  #### `Step 2` intsall the depndencies, ``` yarn ``` or ``` npm install ```
  #### `Step 3` run the API server ``` yarn dev ``` or ``` npm run dev ```


## *NOTE* --  This is totally optional for you to use this boilerplate code. You are free to go ahead and create something which you feel is more appropriate.

### Below are the API which you can utilise to apprach the case.

 - APi for `GET`, `POST` Products catalogue ```http://localhost:8080/api/products```

 - API for `PUT` ```http://localhost:8080/api/products/:id``` 
    - request body would be something similar to
      ``` 
          {
            "name": "Hammer",
            "description": " This is a very nice Hammer",
            "price": 200
          }

- API for `DELETE` ```http://localhost:8080/api/products/:id``` 
    - - request body would be something similar to
      ``` 
          {
            "name": "Hammer",
            "description": " This is a very nice Hammer",
            "price": 200
          } 

### We have also tried to create some API for Users information as well. 
- APi for `GET`, `POST` Products catalogue ```http://localhost:8080/api/users```

    - request body would be something similar to
      ```
        {
          "name": "Test User 1",
          "access": "W",
          "orders": [
            {
              "id": 1,
              "products": [
                {
                  "id": 1,
                  "quantity": 20,
                  "totalPrice": 122,
                  "discount": 20
                },
                {
                  "id": 2,
                  "quantity": 12,
                  "totalPrice": 178,
                  "discount": 0
                }
              ]
            }
          ]
        } 

- API for `PUT` ```http://localhost:8080/api/users/:id``` 
    - request body would be something similar to
      ``` 
        {
          "name": "Test User 1",
          "access": "W",
          "orders": [
            {
              "id": 1,
              "products": [
                {
                  "id": 1,
                  "quantity": 20,
                  "totalPrice": 122,
                  "discount": 20
                },
                {
                  "id": 2,
                  "quantity": 12,
                  "totalPrice": 178,
                  "discount": 0
                }
              ]
            }
          ]
        }

- API for `DELETE` ```http://localhost:8080/api/users/:id``` 


