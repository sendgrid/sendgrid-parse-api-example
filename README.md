# sendgrid-parse-example

Capture a SendGrid Parse inbound email webhook. 

This small application demonstrates how to start using SendGrid's Parse API. Additionally, it acts as a boilerplate of code that you can begin with and adjust to your own needs.

## Getting Started

You will need [an account on SendGrid](https://sendgrid.com/user/signup).

### Development

#### 1. Set ENV vars 

```
$ touch .env
```

Paste the following.

```
SENDGRID_USERNAME=your_sendgrid_username
SENDGRID_PASSWORD=your_sendgrid_password
```
#### 2. Run App

```
$ node app.js
```

#### 3. Setup ngrok

Detailed [install instructions here](https://ngrok.com/).

```
$ wget https://dl.ngrok.com/darwin_amd64/ngrok.zip
$ unzip ngrok.zip -d /usr/local/bin
$ ngrok 3000
```

Note the url the `ngrok` command gives you. 

#### 4. Set SendGrid Parse Settings

Next, setup your [SendGrid Parsing Incoming Emails setting](http://sendgrid.com/developer/reply) like the following but with a hostname of your own and the url granted to you from the `ngrok` command above plus the /inbound path.  

![](https://raw.github.com/scottmotte/ingrid/master/readme/inbound3.png)

#### 5. Configure Your MX Records

Now you have to configure an MX record on the hostname you set above. It should look something like the following.

![](https://raw.github.com/scottmotte/ingrid/master/readme/inbound2.png)

Wait 1-48 hours. (It can take up to 48 hours for MX records to propagate around the world.)

#### 6. Send an Email

Send an email to `inbound@the-hostname-you-setup.com` and this app will now parse it. 

It will deliver an email back to you with an attachment containing the content of the webhook data. The contents will look something [like this](https://gist.github.com/scottmotte/6642578/raw/d66d703abdd45addec9e8ff7aa92214db7dda326/gistfile1.txt).


### Production

#### 1. Deploy to Heroku

```
$ heroku create
$ git push heroku master
$ heroku config:set SENDGRID_USERNAME=your_sendgrid_username
$ heroku config:set SENDGRID_PASSWORD=your_sendgrid_password
```

#### 2. Check for 200 OK

Then you should be able to run the following - receiving a success 200 response.

```
$ curl -X POST http://your-heroku-subdomain.herokuapp.com/inbound
```

#### 3. Set SendGrid Parse Settings

Next, setup your [SendGrid Parsing Incoming Emails setting](http://sendgrid.com/developer/reply) like the following but with a hostname of your own and the url you deployed this app to. (You'll notice I actually made my hostname a subdomain `m.carve.io`. You can do the same or the more standard root of your domain.) 

![](https://raw.github.com/scottmotte/ingrid/master/readme/inbound1.png)

#### 4. Configure Your MX Records

Now you have to configure an MX record on the hostname you set above. It should look something like the following.

![](https://raw.github.com/scottmotte/ingrid/master/readme/inbound2.png)

Now wait a couple hours to 48 hours. (It can take up to 48 hours for MX records to propagate around the world.)

#### 5. Send an Email

Send an email to `inbound@the-hostname-you-setup.com` and this app will now parse it. 

It will deliver an email back to you with an attachment containing the content of the webhook data. The contents will look something [like this](https://gist.github.com/scottmotte/6642578/raw/d66d703abdd45addec9e8ff7aa92214db7dda326/gistfile1.txt).

#### 6. Adjust the code

You can now adjust the code in [routes/inbound.js](https://github.com/scottmotte/ingrid/blob/master/routes/inbound.js) to do whatever logic you require.

## Alternatives

If you just need a quick way to inspect the payload contents of the Parse API webhook, I recommend using one of the following. You'll still have to setup your MX records.

* [RequestBin](http://requestb.in/)
* [HookDebug](hookdebug.sendgrid.com)

