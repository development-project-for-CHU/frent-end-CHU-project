import { Component } from '@angular/core';

import {read , utils } from 'xlsx'

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styleUrls: ['./categorie-detail.component.css']
})
export class CategorieDetailComponent {
  listItems: any[] = [];

  csvImport($event:any){
    const files = $event.target.files;
    if(files.length){
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event : any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if(sheets.length){
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]])
          this.listItems =  rows ;
        }
      }
      
      reader.readAsArrayBuffer(file);
    }
  }

  
   

}
