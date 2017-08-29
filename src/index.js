#!/usr/bin/env node
// Get the all the JS file from the putter directoyr
const fs = require('fs');
const recursive = require("recursive-readdir");
const cwd = process.cwd();
const path = require('path');

recursive(path.join(`${cwd}/putter`), function (error, files) {
    if(error){
        throw new Error(error);
    }else{
        files.map(file => {
            if(file.endsWith('.js')){
                // Running the JS with in the Putter environment
                fs.readFile(file, 'utf-8', (error, jsCode) => {
                    if(error){
                        throw new Error(error);
                    }else{
                        // Setting up the Putter environment

                        // Reading the core library
                        fs.readFile(path.join(`${__dirname}/core.js`), 'utf-8', (error, coreCode) => {
                            if(error){
                                throw new Error(error);
                            }else{
                                eval(`
                                    require('clear')();
                                    // Putter environment
                                    ${coreCode}

                                    // Password unit testing
                                    ${jsCode}
                                `);
                            }
                        });
                    }
                });
            }
        })
    }
});