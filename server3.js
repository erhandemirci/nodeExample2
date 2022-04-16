const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);



const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
      console.log('Server started on ' + HOST + ':' + PORT);
})


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
 

