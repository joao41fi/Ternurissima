const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');
/**
 * List all files in Google Drive
 * @return {Promise<Array>} An array of files
 */
async function listAllFiles() {
  try {
    // Configure authentication
    const auth = new GoogleAuth({
      keyFile: './src/ternurisima-57d5912f5e88.json',
      scopes: 'https://www.googleapis.com/auth/drive',
    });
    const service = google.drive({ version: 'v3', auth });

    // List all files
    const res = await service.files.list({
      fields: 'files(id, name)',
      spaces: 'drive',
    });

    const files = res.data.files;
    files.forEach(function (file) {
      console.log('Found file:', file.name, file.id);
    });

    return files;
  } catch (err) {
    console.error('Error listing files:', err.message);
    return [];
  }
}

// Exemplo de uso


  module.exports = listAllFiles;