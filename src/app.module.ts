import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { CategoriasModule } from './categorias/categorias.module';
import { NoticiasModule } from './noticias/noticias.module';

@Module({
  imports: [CustomersModule, CategoriasModule, NoticiasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
