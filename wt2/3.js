// const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter file name: ', (fileName) => {
//     rl.question('Enter text to append: ', (text) => {
        
//         fs.access(fileName, fs.constants.F_OK, (err) => {
//             if (err) {
            
//                 fs.writeFile(fileName, text, 'utf8', (err) => {
//                     if (err) {
//                         console.error(`Error creating the file: ${err}`);
//                     } else {
//                         console.log(`File '${fileName}' created and text added.`);
//                     }
//                     rl.close();
//                 });
//             } else {
//                 // File exists, append the text
//                 fs.appendFile(fileName, '\n' + text, 'utf8', (err) => {
//                     if (err) {
//                         console.error(`Error appending to the file: ${err}`);
//                     } else {
//                         console.log(`Text appended to the file '${fileName}'.`);
//                     }
//                     rl.close();
//                 });
//             }
//         });
//     });
// });


// // use any 

const fs = require('fs')

fs.appendFile('file_created.txt','shashi tej reddy singa reddy',function(err){
    if(err){
        throw(err);
    }
    else{
        console.log("file appended success");
    }
});