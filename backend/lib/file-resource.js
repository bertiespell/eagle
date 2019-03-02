
const AWS = require('aws-sdk');

const s3 = new AWS.S3({ params: { Bucket: `eagle-file-system-${process.env.STAGE}` } });

const create = (path, content) => {
  const params = {
    Key: path,
    Body: content,
  };
  return s3.putObject(params, (err, data) => data).promise();
};

module.exports = {
  create,
};