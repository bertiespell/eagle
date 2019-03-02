const uuid = require('uuid/v4');

const FileResource = require('../lib/file-resource');

const handler = async ({ userID, body }) => {
  // store content in S3, but with the userID first (locked on IAM)
  // store metadata in dynamoDB - ID, title and createdAt
  // get the title form content
  const { file: { content } } = body;
  const parsedContent = JSON.parse(content);
  const { title } = parsedContent;

  if (!title) {
    throw new Error('Title required');
  }

  const fileID = uuid();

  try {
    const path = `${userID}/${fileID}`;
    await FileResource.create(path, content);

    return {
      content,
      userID,
    };
  } catch (e) {
    console.log(e);
    throw e;
  }
};


module.exports = {
  handler,
};
