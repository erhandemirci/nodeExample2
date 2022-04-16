const express = require('express');
const app = express();
const YouTubeNotifier = require('youtube-notification');


    // get an instance of router
var router = express.Router();

const notifier = new YouTubeNotifier({
  hubCallback: 'https://callbackerhan.herokuapp.com/youtube/callback',
  port: PORT,
 
  path: '/youtube'
});

    // home page route (http://localhost:8080)
    router.get('/', function(req, res) {
        res.send("google-site-verification=ZPV3ADqzl5x-Z3e_WDGPt1TjgJCzNN3_dxmpDibSy0o");
          notifier.setup();
    notifier.subscribe('UC1zAttFQKikWoKH3Vb39ETA');
        
    });





const PORT = process.env.PORT || 1337;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
      console.log('Server started on ' + HOST + ':' + PORT);
})



notifier.on('notified', data => {
  console.log('New Video');
  console.log(
    `${data.channel.name} just uploaded a new video titled: ${data.video.title}`
  );
});
 

