import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackofficeModule } from './backoffice/backoffice.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    BackofficeModule, 
    StoreModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: '7180',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
