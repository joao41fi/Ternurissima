const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

/**
 * Read the content of a specific file in Google Drive.
 * @param {string} fileId - ID of the Google Drive file
 * @return {Promise<string>} The content of the file
 */
async function readFileContent(fileId) {
  try {
    // Configure authentication
    const auth = new GoogleAuth({
      keyFile: './src/ternurisima-57d5912f5e88.json',
      scopes: 'https://www.googleapis.com/auth/drive.readonly',
    });
    const authClient = await auth.getClient();
    const service = google.drive({ version: 'v3', auth: authClient });

    // Get the file metadata
    const fileInfo = await service.files.get({ fileId, alt: 'media' });

    // Return the content of the file
    return fileInfo.data;
  } catch (err) {
    console.error('Error reading file content:', err.message);
    return null;
  }
}

// Exemplo de uso com o ID do arquivo

module.exports = readFileContent;