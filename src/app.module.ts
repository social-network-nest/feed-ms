import { Module } from '@nestjs/common';
import { FeedModule } from './feed/feed.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [FeedModule, UserModule],
})
export class AppModule {}
