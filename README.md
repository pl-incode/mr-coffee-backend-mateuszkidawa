<h4 align="center">Data file and database</h4>

## Project Overview

<b>Version 3a</b>
data file
in package.json set:
"start": "nodemon ./src/3a.js"

| --------------- | ----------------- |
| Main page | http://localhost:3000/ |
| List users | http://localhost:3000/users/ |
| List schedules | http://localhost:3000/schedules |
| List user | http://localhost:3000/users/0/ |
| List user schedule | http://localhost:3000/users/0/schedules |

<b>Version 3b</b>
data file
in package.json set:
"start": "nodemon ./src/3b.js"

| --------------- | ----------------- |
| Add user | http://localhost:3000/users/new/ |
| Add schedule | http://localhost:3000/schedules/new |

<b>Version 3c</b>
database.
in package.json set:
"start": "nodemon ./src/3c.js"

| --------------- | ----------------- |
| Add schedule | http://localhost:3000/new |

## Tech/framework used 🔧

| Tech                               |
| ---------------------------------- |
| [Express.js-](Express.js)          |
| [mustacheExpress](mustacheExpress) |
| [bodyParser](bodyParser)           |

## Available script

| Command         | Description       |     |
| --------------- | ----------------- | --- |
| `npm run start` | Open local server |     |
