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

Next, setup your [SendGrid Parsing Incoming Emails setting](http://sendgrid.com/developer/reply) like the following but with a hostname of your own and the url you deployed this app to. (You'll notice I actually made my hostname a subdomain `m.carve.io`. You can do the same or the more standard root of your domain.) 

![](https://raw.github.com/scottmotte/ingrid/master/readme/inbound1.png)

Now you have to configure an MX record on the hostname you set above. It should look something like the following.

![](https://raw.github.com/scottmotte/ingrid/master/readme/inbound2.png)

Cool. Now wait 48 hours. It can take up to 48 hours for MX records to propogate around the world. This part sucks. Sometimes it is sooner.

Welcome back after 48 hours. 

Send an email to `inbound@yourhostname.com` and your app will now parse it.

