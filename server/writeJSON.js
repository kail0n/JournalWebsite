// const fs = require('fs');

// let journalEntry = {
//     id: 1,
//     entry: "Hello, world!"
// };

// let data = JSON.stringify(journalEntry, null, 2);
// fs.writeFile('journalEntries.json', data, (err)=>{
//     if(err) throw err;
//     console.log('Data written to file')
// });

// fs.readFile('./journalEntries.json', function (err, data) {
//     let json = JSON.parse(data);
//     json.push('message: ' + "hello");
     
//     fs.writeFile('./journalEntries.json', JSON.stringify(json), function(err){
//       if (err) throw err;
//       console.log('The "data to append" was appended to file!');
//     });
// })


// function jsonReader(filepath, cb) {
//     fs.readFile(filepath, 'utf-8', (err, fileData) => {
//         if (err) {
//             return cb && cb(err);
//         }
//         try {
//             const object = JSON.parse(fileData);
//             return cb && cb(null, object);
//         } catch (err) {
//             return cb && cb(err);
//         }
//     });
// }

// jsonReader('./journalEntries.json', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         data.id += 1;
//         fs.writeFile('./journalEntries.json', JSON.stringify(data), err => {
//             if (err) {
//                 console.log('Data written to file');
//                 console.log(err)
//             }
//         })
//     }
// })