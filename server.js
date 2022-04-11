


const YouTubeNotifier = require('youtube-notification');
 
const notifier = new YouTubeNotifier({
  hubCallback: 'https://youtube-server-i2ntcu76bq-uc.a.run.app//youtube/callback',
  port: 8080,
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

