import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackofficeModule } from './backoffice/backoffice.module';
import { StoreModule } from './store/store.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dj:dj@cluster0.saziu.mongodb.net/Cluster0?retryWrites=true&w=majority'),
    BackofficeModule, 
    StoreModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: '7180',
      entities: [__dirname + '/*.entity{.ts,.js}'],
      synchronize: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
