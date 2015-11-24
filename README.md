# twilio
Expanding your Toolbox challenge, learning to send SMS text messages using Twilio

This application demonstrates how to send an SMS text message to a mobile phone using Twilio.
There are many use cases for such a technology, including but not limited to:
    -Notifications for a social media service
    -Authorization codes for services requiring mobile phone signup
    -Two factor authentication
The community surrounding this service seems relatively active and robust, there are tutorials for
integrating Twilio with basically any kind of service you want (Jquery and AJAX just being one among them).
A word of caution, I initially tried to do this in Angular, using RequireJS and NodeJS, and failed.
Total waste of time, very difficult, worse results than just using simple Jquery.
My example site just shows a very basic implementation, if you wanted to manually input a phone number
and send it a message as if it were from another phone. Note: I didn't spend absolutely any time
on the asthetics, because I was frustrated from failing for so long at using RequireJS.

In order to run my service, you'll have to have your own Twilio account. It's free to make a trial account.
https://www.twilio.com/try-twilio
When you sign up, they will give you an AccountSID and an AuthToken, essentially a username and password.
You'll have to take these, put them in a file called credentials.txt, and store them in JSON notation.
{"username":"Your AccountSID", "authkey":"Your AuthKey"}
Put this file iin the same location as index.html.
Then, modify the url field (line 6 of app.js) to be the location of your file. (Just 'credentials.txt' is fine)
It should start working! Pretty simple.

To learn more, here's documentation on the REST API, the api that handles messages and calls.
https://www.twilio.com/docs/api/rest/message
You can do all sorts of stuff, like group chats, browser to browser video calls, etc.
Basically all the guides I found came from blog posts and stack overflow, so instead of listing a bunch of these,
I'm going to recommend typing your request into Google the same way I would.