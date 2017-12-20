export abstract class AbstractDto {
  id: string;
  createdDate: Date;
  createdBy: string;
  lastModifiedDate: Date;
  lastModifiedBy: string;
  enabled: boolean;
  checked: boolean;


  constructor(data: object) {
    data = data || {};

    this.id = data['id'];
    this.createdDate = new Date(data['createdDate'] || new Date());
    this.createdBy = data['createdBy'];
    this.lastModifiedDate = new Date(data['lastModifiedDate'] || new Date());
    this.lastModifiedBy = data['lastModifiedBy'];
    this.enabled = !!data['enabled'];
    this.checked = !!data['checked'];
  }
}
