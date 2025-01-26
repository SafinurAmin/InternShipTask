import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import { ContactModule } from './contact/contact.module';
@Module({ imports: [ProjectsModule, TestimonialsModule, ContactModule],})
export class AppModule {}

