import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Track } from './track.model';

@Module({
  imports: [],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
