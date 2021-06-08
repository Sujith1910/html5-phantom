const express=require('express');
const path = require('path');
const http = require('http');

const app=express();

const staticPath = path.join(__dirname, './assets')

let options = {
    setHeaders: function (res, path, stat) {
        
        // console.log(path.split("/")[path.split("/").length-1])
        if (path.split("/")[path.split("/").length-1] == 'index.html') {
            res.set('x-timestamp', Date.now())
            // res.set('Link', '<https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900>; rel="preload"; as="style"')
            res.set('Link', '</images/pic12.jpg>; rel="preload";')
            // res.links({
                // preload: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900; as=style",
                // preload: "http://localhost:3000/images/pic12.jpg; importance=high"
                // prefetch: "https://twitter.com"
                // preload: "https://www.twitter.com"
            // })
            }
      }
}

app.use(express.static(staticPath, options));

app.use(express.json());


app.get("/", (req, res) => {
    // console.log(req.hostname);
    // res.send("Hello world!");
    // res.links({
    //     preload: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900; importance=high ",
    //     prefetch: "https://twitter.com"
    // })
    // res.sendFile(path.join(__dirname, './index.html'));
    
})

const PORT=process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Listening on port 3000!');
})