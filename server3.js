
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
