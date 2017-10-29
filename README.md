# Basic OAuth2 Flow

This is an example project for a blog post I made. It prints the access tokens it currently has in a web page.

These can be used to follow along with this [blog post](http://mattmatters.io/Oauth2-demystified/).

This is **not** a production-ready web app, simply a demonstration of obtaining tokens with the OAuth2 Framework.

However if someone is looking for a quick base to bootstrap a project, one could feasibly use this and replace the
access token with a database.

## Running
There are currently two ways of running the application.

### As a docker container

```sh
docker pull superpolkadance/basicoauth:latest
docker run -d -p 3000:3000 superpolkadance/basicoauth:latest
```

Now head to http://localhost:3000 to view the application.

### Building locally

```sh
git clone https://github.com/mattmatters/basic-oauth.git
cd basic-oauth
npm install
npm start
```

Again you can now head to http://localhost:3000 to view it.

