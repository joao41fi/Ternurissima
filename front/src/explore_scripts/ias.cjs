const fs = require('fs');

const {google} = require('googleapis');


const id_page = '1Ux59MFmRLDyoJgqU1Et3JOhntjFh0RlC';


async function carega_arquivo(){
  try{
    // login
    const auth = new google.auth.GoogleAuth({
      keyFile:'./ternurisima-57d5912f5e88.json',
      scopes:['https://www.googleapis.com/auth/drive']

    })
    // execusão
    const driver_serve = google.drive({
      version: 'v3',
      auth

    })

    const file_meta = {
      'name': 'texte-1.png',
      'parents':[id_page]
    }
    const meedia = {
      mimeType: 'image/png',
      body: fs.createReadStream('./transferir.png')

    }
    

    const responta = await driver_serve.files.create({
      resource:file_meta,
      media:meedia,
      fields:'id'
    })
    return responta.data.id
    
  }catch(err){
   console.log(err)
  }
}


/**
 * Search file in drive location
 * @return{Array} data file
 * */
async function searchFile() {
  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  // Get credentials and build service
  // TODO (developer) - Use appropriate auth mechanism for your app
  const auth = new GoogleAuth({
    keyFile: './ternurisima-57d5912f5e88.json',
    scopes: 'https://www.googleapis.com/auth/drive',
  });
  const service = google.drive({version: 'v3', auth});
  const files = [];
  try {
    const res = await service.files.list({
      q: 'mimeType=\'image/jpeg\'',
      fields: '1Ux59MFmRLDyoJgqU1Et3JOhntjFh0Rl, files(id, name)',
      spaces: 'drive',
    });
    Array.prototype.push.apply(files, res.files);
    res.data.files.forEach(function(file) {
      console.log('Found file:', file.name, file.id);
    });
    return res.data.files;
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
}

searchFile()



// carega_arquivo().then(data=>{
//   console.log(data)
// })