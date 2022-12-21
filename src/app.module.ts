import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ProfileModule } from './profile/profile.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { IsadminMiddleware } from './isadmin/isadmin.middleware';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    JwtModule.register({
      secret: "abcg",
      signOptions: { expiresIn: '1d' },
    }),
    ProfileModule,
  ],
  controllers: [AppController, UsersController, AuthController,ProfileController],
  providers: [AppService, UsersService, AuthService,ProfileService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'auth', method: RequestMethod.POST },
      )
      .forRoutes(ProfileController);

      consumer
      .apply(LoggerMiddleware,IsadminMiddleware).exclude(
        { path: 'auth', method: RequestMethod.POST},
      )
      .forRoutes(UsersController);

  }

  
  
}
