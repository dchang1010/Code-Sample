## Sample-Code
This small basic web application built with Node.js, Express, and React that takes POST requests on the route "/test" which accepts any string typed and returns a “return_string” key with a value containing every third letter from the original string.

## Initial Setup
After cloning this repo type the following commands into your terminal to install dependencies and start your local server:

```
npm install
npm start
npm run react-dev
```

To set up the mySQL database, type the following command into your terminal
```
mysql -u <USER> < schema.sql
OR
mysql -u <USER> -p < schema.sql
```

## Features
This small web application accepts POST requests on the route "/test" which accepts any string typed and returns a “return_string” key with a value containing every third letter from the original string. For example, If you POST "iamyourlyftdriver", it will return: {"return_string": "muydv"}.

## Tech Stack
* Node.js
* Express
* React/Hooks
* Axios
* mySQL
