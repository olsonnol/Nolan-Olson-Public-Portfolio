# Mock Authentication Server
This is a simple mock auth server. You can POST to any endpoint and it will act as a login.

There are two valid accounts: 
username: `username` and password: `password`
username: `cs3720` and password: `appdev`

## Installation
- Install dependencies with `npm install`
- Run the server with `npm start`
- Visit [http://localhost:5678](http://localhost:5678)

You can optionally declare a `PORT` env variable to override the default port:
- `PORT=12345 npm start`
- Visit [http://localhost:12345](http://localhost:12345)
