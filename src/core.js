const policy = function(name, callback){
    const colors = require('colors');
    console.log(`<==== ${name.yellow} ====>`)

    // Get passwords
    callback()
}

const password = function(passwords, regex){
    passwords.map(pwd => {
        if(pwd.match(regex)){
            console.log(`\t${pwd.green}`)
        }else{
            console.log(`\t${pwd.red}`)
        }
    })
}