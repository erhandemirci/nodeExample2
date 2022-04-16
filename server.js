const express = require('express');
const app = express();
const errorHandler = require('errorhandler');
const pubSubHubbub = require('pubsubhubbub');

const PORT = process.env.PORT || 1337;
const PATH = '/pubSubHubbub';

const pubsub = pubSubHubbub.createServer({
    callbackUrl: 'https://callbackerhan.herokuapp.com/youtube/callback',
topic: 'https://www.youtube.com/xml/feeds/videos.xml?channel_id=UC1zAttFQKikWoKH3Vb39ETA',
hub: 'https://pubsubhubbub.appspot.com/subscribe'
    
});

const topic = 'https://www.youtube.com/xml/feeds/videos.xml?channel_id=UC1zAttFQKikWoKH3Vb39ETA';
const hub = 'http://pubsubhubbub.appspot.com/';

app.use(PATH, pubsub.listener());

// default response
app.get('/', (req, res) => {
    res.send('hello world');
});

errorHandler.title = 'PubSubHubbub test';
app.use(errorHandler());

app.listen(PORT, () => {
    console.log('Server listening on port %s', PORT);
    pubsub.subscribe(topic, hub);
});

pubsub.on('denied', data => {
    console.log('Denied');
    console.log(data);
});

pubsub.on('subscribe', data => {
    console.log('Subscribe');
    console.log(data);

    console.log('Subscribed ' + topic + ' to ' + hub);
});

pubsub.on('unsubscribe', data => {
    console.log('Unsubscribe');
    console.log(data);

    console.log('Unsubscribed ' + topic + ' from ' + hub);
});

pubsub.on('error', error => {
    console.log('Error');
    console.log(error);
});

pubsub.on('feed', data => {
    console.log(data);
    console.log(data.feed.toString());

    pubsub.unsubscribe(topic, hub);
});

