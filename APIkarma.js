
/* instatntiating a server object*/ //{
var Server = require('karma').Server
var karmaConfig = {port: 9876}
var server = new Server(   karmaConfig, function(exitCode) {
    console.log('Karma has exited with ' + exitCode)
    process.exit(exitCode)
})
// }  /**/


new Promise((resolve,reject)=>{
    
    /* instatntiating a server object*/ //{
    resolve(server.start())
    // }  /**/
    
}).then(()=>{

    /* refresh files*/ //{
    Promise.all([server.refreshFiles(),server.refreshFile('test.js')]).then((args)=>{
        console.log(args)
    })
    // }  /**/

    /* events*/ //{
    server.on('listening', function (port) {
      console.log(port)
    })
    // }  /**/
    
    /* karma run*/ //{
    // var runner = require('karma').runner
    // runner.run({port: 9876}, function(exitCode) {
    //   console.log('Karma has exited with ' + exitCode)
    //   process.exit(exitCode)
    // })
    // }  /**/
    
    /* karma stop*/ //{
    // var stopper = require('karma').stopper
    // stopper.stop({port: 9876}, function(exitCode) {
    //   if (exitCode === 0) {
    //     console.log('Server stop as initiated')
    //   }
    //   process.exit(exitCode)
    // })
    // }  /**/
    
})
