import { Injectable } from '@nestjs/common';

@Injectable()
export class TestimonialsService {
  private testimonials = [
    {
      id: 1,
      content: `“Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”`,
      client: 'Martin Lee',
    },
  ];

  findAll() {
    return this.testimonials;
  }
}

