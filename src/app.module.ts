import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrackController } from './track/track.controller';
import { TrackModule } from './track/track.module';
import { TrackService } from './track/track.service';
import { AuthModule } from './auth/auth.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [TrackModule, ConfigModule.forRoot({}), AuthModule, PlaylistModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
