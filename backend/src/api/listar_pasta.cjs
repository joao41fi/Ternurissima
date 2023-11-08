const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

/**
 * List all files in a specific Google Drive folder.
 * @param {string} folderId - ID of the Google Drive folder
 * @return {Promise<Array>} An array of files
 */
async function listFilesInFolder(folderId) {
  try {
    // Configure authentication
    const auth = new GoogleAuth({
      keyFile: './src/ternurisima-57d5912f5e88.json',
      scopes: 'https://www.googleapis.com/auth/drive',
    });
    const service = google.drive({ version: 'v3', auth });

    // List all files in the specified folder
    const res = await service.files.list({
      q: `'${folderId}' in parents`, // Use the folder ID as the parent
      fields: 'files(id, name)',
      spaces: 'drive',
    });

    const files = res.data.files;
    files.forEach(function (file) {
      console.log('Found file in the folder:', file.name, file.id);
    });

    return files;
  } catch (err) {
    console.error('Error listing files in the folder:', err.message);
    return [];
  }
}

// Exemplo de uso


module.exports = listFilesInFolder;
