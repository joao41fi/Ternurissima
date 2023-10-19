const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');

/**
 * Search for JPEG files in Google Drive
 * @return {Promise<Array>} An array of files
 */
async function searchFile() {
  try {
    // Configure authentication
    const auth = new GoogleAuth({
      keyFile: './ternurisima-57d5912f5e88.json',
      scopes: 'https://www.googleapis.com/auth/drive',
    });
    const service = google.drive({ version: 'v3', auth });

    // Search for JPEG files
    const res = await service.files.list({
      q: 'mimeType=\'image/jpeg\'',
      fields: 'files(id, name)',
      spaces: 'drive',
    });

    const files = res.data.files;
    files.forEach(function (file) {
      console.log('Found file:', file.name, file.id);
    });

    return files;
  } catch (err) {
    console.error('Error searching for files:', err.message);
    return [];
  }
}

// Exemplo de uso
searchFile()
  .then(files => {
    // Faça algo com a lista de arquivos, por exemplo:
    console.log('Total de arquivos JPEG encontrados:', files.length);
  })
  .catch(error => {
    console.error('Erro ao buscar arquivos:', error);
  });
