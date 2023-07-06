import { getLocaleId } from '@angular/common';

export class TaskMock {
  idTaskModel?: Number;
  name?: String;
  complete?: Boolean;
  details?: String;

  constructor(
    idTaskModel?: Number,
    name?: String,
    complete?: Boolean,
    details?: String
  ) {
    this.idTaskModel = idTaskModel;
    this.details = details;
    this.name = name;
    this.complete = complete;
  }
}
