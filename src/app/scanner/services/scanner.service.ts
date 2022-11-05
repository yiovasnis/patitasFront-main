import { Injectable } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  refScanner !: DynamicDialogRef;

  constructor() { }
}
