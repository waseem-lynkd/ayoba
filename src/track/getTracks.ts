import { ScanCommandInput, ScanCommand } from '@aws-sdk/lib-dynamodb';
import client from 'src/db/client';

const getTracks = async () => {
  const getTrackParams: ScanCommandInput = {
    TableName: 'Tracks',
  };
  const command = new ScanCommand(getTrackParams);
  return await client.send(command);
};

export default getTracks;
