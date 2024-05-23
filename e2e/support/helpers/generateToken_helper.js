const { execSync } = require('child_process');

function base64url(source) {
  
  let encodedSource = Buffer.from(JSON.stringify(source)).toString('base64');
  
  encodedSource = encodedSource.replace(/=+$/, '');
  
  encodedSource = encodedSource.replace(/\+/g, '-');
  
  encodedSource = encodedSource.replace(/\//g, '_');
  
  return encodedSource;
}

function generateBearerToken() {
  const header = { alg: 'none', typ: 'JWT' };
  const payload = { 
    scope: 'consents consent:urn:bank:33a7e758-3a3f-45b2-b255-05ec121f099d', 
    client_id: 'client1' 
  };

  const HEADER_BASE64 = base64url(header);
  const PAYLOAD_NEW = base64url(payload);
  const TOKEN_NEW = `${HEADER_BASE64}.${PAYLOAD_NEW}.`;

  return TOKEN_NEW;
}

module.exports = { generateBearerToken };

