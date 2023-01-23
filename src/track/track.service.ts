import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import deleteTrack from './deleteTrack';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import getTrack from './getTrack';
import getTracks from './getTracks';
import putTrack from './putTrack';
import { Track } from './track.model';

@Injectable()
export class TrackService {
  constructor() {}

  async insertTrack(
    name: string,
    album: string,
    artist: string,
    duration: string,
    genre: string,
    artwork: string,
    audio: string,
  ) {
    const id = '987';
    const newTrack = new Track(
      id,
      name,
      album,
      artist,
      duration,
      genre,
      artwork,
      audio,
    );
    putTrack(newTrack);
    return id;
  }

  async updateTrack(
    name: string,
    album: string,
    artist: string,
    duration: string,
    genre: string,
    artwork: string,
    audio: string,
  ) {
    const id = '987';
    const newTrack = new Track(
      id,
      name,
      album,
      artist,
      duration,
      genre,
      artwork,
      audio,
    );
    putTrack(newTrack);
    return id;
  }

  getTracks() {
    return getTracks();
  }

  async getTrack(id: string) {
    const result = await getTrack(id);
    return result;
  }

  deleteTrack(id: string) {
    return deleteTrack(id);
  }
}
