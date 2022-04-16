const express = require('express');
const app = express();
const YouTubeNotifier = require('youtube-notification');


    // get an instance of router
var router = express.Router();


    // home page route (http://localhost:8080)
    router.get('/', function(req, res) {
        res.send("google-site-verification=ZPV3ADqzl5x-Z3e_WDGPt1TjgJCzNN3_dxmpDibSy0o");
         
        
    });

router.get('/myapp/', function(req, res){
    res.send("Hello from the root application URL");
});





const PORT = process.env.PORT || 1337;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
      console.log('Server started on ' + HOST + ':' + PORT);
})


  // apply the routes to our application
    app.use('/', router);

