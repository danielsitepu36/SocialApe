const admin = require('firebase-admin');
var serviceAccount = require('./key/socialape-key.json');
const { databaseURL, storageBucket } = require('./config');

admin.initializeApp(
      {credential: admin.credential.cert(serviceAccount),
      databaseURL,
      storageBucket
      }
);

const db = admin.firestore();

module.exports = {admin,db};