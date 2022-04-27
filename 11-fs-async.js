const {readFile, writeFile} = require('fs')

/*we run a callback when we're done i.e whenever a functionality
is done then we run the callback*/

//what is the point of the utf encoding??
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second =  result
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            })

    })
})
console.log('Stating next task')