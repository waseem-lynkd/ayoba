import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../db/client';

const deletePlaylist = (id: string) => {
  const deletePlaylistParams: DeleteCommandInput = {
    TableName: 'Playlists',
    Key: {
      id: String(id),
    },
  };

  const command = new DeleteCommand(deletePlaylistParams);
  return client.send(command);
};

export default deletePlaylist;
