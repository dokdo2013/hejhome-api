# hejhome-api
Reverse Engineered Hejhome API

## Get Started
```shell
pnpm i

# For local development
pnpm start:dev

# For production environment
pnpm start:prod
```

## Documentation
[https://hejhome.haenu.com/apidocs](https://hejhome.haenu.com/apidocs) (Swagger)

## Features implemented
- Get user's configuration
- Control specific device

## Environment Variables
If you provide a `.env` file, the program will always use the token from that file, even if a token is provided in the header. 
```
TOKEN=""
```