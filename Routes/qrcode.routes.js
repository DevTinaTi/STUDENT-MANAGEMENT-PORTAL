const { join } = require('path');

const { qrCodeGenerator, qrCodeReader } = require(join(
  __dirname,
  '..',
  'Controllers',
  'qrCode.controller'
));

const { Authenticate } = require(join(
  __dirname,
  '..',
  'Middlewares',
  'Authentication'
));

const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
});

const qrCode = require('express').Router();

qrCode.post('api/SMP/qrcode/generate', Authenticate, qrCodeGenerator);

qrCode.post(
  '/api/SMP/qrcode/verify',
  Authenticate,
  upload.single('qrcode'),
  qrCodeReader
);
