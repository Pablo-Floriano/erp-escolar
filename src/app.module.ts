import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosResolver } from './alunos/alunos.resolver';
import { AlunosModule } from './alunos/alunos.module';

@Module({
  imports: [AlunosModule],
  controllers: [AppController],
  providers: [AppService, AlunosResolver],
})
export class AppModule {}
