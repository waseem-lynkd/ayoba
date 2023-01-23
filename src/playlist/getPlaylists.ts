import { ScanCommandInput, ScanCommand } from '@aws-sdk/lib-dynamodb';
import client from 'src/db/client';

const getPlaylists = async () => {
  const getTrackParams: ScanCommandInput = {
    TableName: 'Playlists',
  };
  const command = new ScanCommand(getTrackParams);
  return await client.send(command);
};

export default getPlaylists;
