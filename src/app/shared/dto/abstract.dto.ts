export abstract class AbstractDto {
  id: string;
  createdDate: Date;
  createdBy: string;
  lastModifiedDate: Date;
  lastModifiedBy: string;


  constructor(data: any) {
    data = data || {};

    this.id = data.id;
    this.createdDate = new Date(data.createdDate || new Date());
    this.createdBy = data.createdBy;
    this.lastModifiedDate = new Date(data.lastModifiedDate || new Date());
    this.lastModifiedBy = data.lastModifiedBy;
  }
}
