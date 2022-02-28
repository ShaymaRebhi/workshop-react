const fs = require('fs');
try {
    fs.appendFileSync('message.txt','Bonjour Node JS');
    console.log('Message "Bonjour Node JS " ! ajouté ');

}catch (err){
    console.log(err);
}