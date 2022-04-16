const express = require('express'),
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app),
io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(port, function(){
    console.log("Node server listening on port " + port);
});




const YouTubeNotifier = require('youtube-notification');


 const PORT = process.env.PORT || 1337;
const notifier = new YouTubeNotifier({
  hubCallback: 'https://callbackerhan.herokuapp.com/youtube/callback',
  port: PORT,
 
  path: '/youtube'
});
notifier.setup();
 
notifier.on('notified', data => {
  console.log('New Video');
  console.log(
    `${data.channel.name} just uploaded a new video titled: ${data.video.title}`
  );
});
 
notifier.subscribe('UC1zAttFQKikWoKH3Vb39ETA');
