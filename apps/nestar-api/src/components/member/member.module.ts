import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import { MongooseModule } from '@nestjs/mongoose';
import memberSchema from '../../schemas/Member.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { LikeModule } from '../like/like.module';
import FollowSchema from '../../schemas/Follow.model';

@Module({
	imports: [MongooseModule.forFeature([
		{	
			name: "Member", 
			schema: memberSchema,
		}
	]), 
	MongooseModule.forFeature([
		{
			name: 'Follow',
			schema: FollowSchema,
		},
	]),
	AuthModule, ViewModule, LikeModule],
	providers: [MemberResolver, MemberService],
	exports: [MemberService],
})
export class MemberModule {}
