const express = require('express')
const http = require('http');
const app = express()
const port =  process.env.port||'3000';
const server = http.createServer(app);
// const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );
const stream = require( './ws/stream' );
const path = require( 'path' );



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })




// const favicon = require( 'serve-favicon' );

// app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );

io.of( '/stream' ).on( 'connection', stream );

//server.listen( 3000 );
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});