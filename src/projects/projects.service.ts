import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  private readonly projects = [
    { title: 'Brand Journey Improvements', client: 'Organc', work: 'Branding Logo design' },
    { title: 'Brand Grouping', client: 'FR', work: 'Branding Logo design' },
    { title: 'NFT Glimps', client: 'Rumanda', work: 'NFT Design' },
    { title: 'Brand Suggestions', client: 'T3d', work: 'NFT logo' },
  ];

  findAll() {
    return this.projects;
  }
}
