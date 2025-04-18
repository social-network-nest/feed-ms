import { Controller } from '@nestjs/common';
import { FeedService } from './feed.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from 'src/user/user.service';

@Controller()
export class FeedController {
  constructor(
    private readonly feedService: FeedService,
    private readonly userService: UserService
  ) {}

  @MessagePattern({ cmd: 'create_feed' })
  createPost(@Payload() payload: any) {
    return this.userService.listUsers();
  }
}
