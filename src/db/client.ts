import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const dynamoClient = new DynamoDBClient({
  region: 'eu-west-1',
  credentials: {
    accessKeyId: 'ACCESS_KEY_HERE',
    secretAccessKey: 'SECRET_KEY_HERE',
  },
});

const client = DynamoDBDocumentClient.from(dynamoClient);

export default client;
