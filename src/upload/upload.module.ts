import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { resolve } from 'path';
import { UploadService } from './upload.service';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, '..', '..', 'uploads'),
      serveRoot: '/uploads', // defines base url
      serveStaticOptions: {
        fallthrough: false, // stops if file is not found
        index: false, // blocks attempts to load "index.html"
      },
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
