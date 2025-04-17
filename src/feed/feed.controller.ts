import { Controller } from '@nestjs/common';
import { FeedService } from './feed.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @MessagePattern({ cmd: 'create_feed' })
  create() {
    return 'create_feed';
  }
}
