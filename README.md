# ingrid

Capture inbound SendGrid parse webhook email data.

## Getting Started

### Development

```
$ node app.js
```

### Production

```
$ heroku create
$ git push heroku master
$ curl -X POST http://yoursubdomain.herokuapp.com/inbound
```

After you are done with that - go hook up your SendGrid parse webhook settings to hit the above url. 

