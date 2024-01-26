const http = require('http')

http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.write(`Hello World from:
    ___  __  ____  ____             
   / __)/  \(    \(  __)            
  ( (__(  O )) D ( ) _)             
   \___)\__/(____/(____)            
____  __ _   ___  __  __ _  ____ 
(  __)(  ( \ / __)(  )(  ( \(  __)
) _) /    /( (_ \ )( /    / ) _) 
(____)\_)__) \___/(__)\_)__)(____)`)
    res.end()
}).listen(8000,'localhost',()=>{
    console.log('Server running')
});
