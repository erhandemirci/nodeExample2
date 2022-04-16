const express = require('express');
const app = express().use(express.static(__dirname + '/'));
const http = require('http').Server(app);
const io = require('socket.io')(http);


const YouTubeNotifier = require('youtube-notification');


 const PORT = process.env.PORT || 1337;
const notifier = new YouTubeNotifier({
  hubCallback: 'https://callbackerhan.herokuapp.com/youtube/callback',
  port: PORT,
 
  path: '/youtube'
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    notifier.setup();
    notifier.subscribe('UC1zAttFQKikWoKH3Vb39ETA');
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(port, function(){
    console.log("Node server listening on port " + port);
});






 
notifier.on('notified', data => {
  console.log('New Video');
  console.log(
    `${data.channel.name} just uploaded a new video titled: ${data.video.title}`
  );
});
 

