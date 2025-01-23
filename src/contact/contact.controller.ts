import { Controller, Get } from '@nestjs/common';

@Controller('contact')
export class ContactController {
  @Get()
  getContactInfo() {
    return {
      email: 'info@aaronn.com',
      phone: '0-8-00-888-000',
      address: 'Street Avenue 21, CA',
    };
  }
}

