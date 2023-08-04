import fs from 'fs';

export const key = fs.readFileSync('./key.pem');

export const cert = fs.readFileSync('./cert.pem');