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
```

Then you should be able to run the following and get a success 200 response back.

```
$ curl -X POST http://yoursubdomain.herokuapp.com/inbound
```

Next, setup your [SendGrid Parsing Incoming Emails setting](http://sendgrid.com/developer/reply) like the following but with a domain of your own. 

![]()





