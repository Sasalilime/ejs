const express = require('express');
const server = express ();
const port = process.env.PORT || 5000;

const userRouter = require('./routes/user.routes');

server.use(express.static(__dirname + '/public'));


server.set('views','./views');
server.set('view engine','ejs');


server.use('/api/v1/user', userRouter);


server.listen(port, () => {
    console.log('Listening on port ' + port);
})