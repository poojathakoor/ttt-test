# ttt-test
Terribly Tiny Tales Test Website

# Description
A Node.js app using [Express](http://expressjs.com/).
The application fetches top N frequent words from a text [file](http://terriblytinytales.com/test.txt).

The running demo of the web application is available on this link [https://ttt-test-webapp.herokuapp.com/](https://ttt-test-webapp.herokuapp.com/).

## Running Locally
```sh
git clone https://github.com/poojathakoor/ttt-test.git
cd ttt-test
npm install
npm start
```
Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)


## NodeJS Libraries
    
    "body-parser": "^1.18.2",
    "consolidate": "^0.15.0",
    "express": "^4.16.2",
    "path": "^0.12.7",
    "request": "^2.83.0"
    

