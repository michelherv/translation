import { AbstractDto } from '@shared/dto/abstract.dto';


export class ProjectDto extends AbstractDto {
  name: string;

  constructor(data: any) {
    super(data);
    data = data || {};

    this.name = data.name;
  }
}
