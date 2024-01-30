import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {read , utils } from 'xlsx'
import { CategorieService } from '../../service/categorie.service';

@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styleUrls: ['./categorie-detail.component.css']
})
export class CategorieDetailComponent {

  categorieName!: string;
  listItems !: any[];

  constructor(private route : ActivatedRoute , 
              private categorieService  : CategorieService
    ){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categorieName = params['name'];
    });

    console.log(this.categorieName)

    this.categorieService.getCategories(this.categorieName).subscribe(
      (data)=> {
        console.log(data);
          this.listItems = data ; 
      },
      (error)=>{
          console.error("error of loading categories item" , error);
      }
    )
  }

  deleteItem(id : any){
    if(confirm("Are you sure you want to delete this patient?")) {
      this.categorieService.deleteCategorie(this.categorieName , id).subscribe(
        () => {
          console.log(`Patient with id=${id} deleted.`);
          this.listItems = this.listItems.filter((item)=>item.id != id)
        },
        (error) => {
          console.error('There was an error deleting the patient!', error);
        }
      );
    }
  }

  handleAddItemsToCategorie(listNewItems : any[]){
    console.log(this.categorieName);
    this.categorieService.addCategorieItems(this.categorieName ,listNewItems ).subscribe(
      (data) => {
         console.log(data)
          listNewItems.forEach((newItem , index)=>{
               const newObject = {
                id : data[index] ,
                name: newItem.name,
                addedAt : new Date()
               }
               this.listItems.push(newObject)
          })
          
      },
      (error)=> {
          console.error("Error of adding elements to category item list" , error);
      }
    )
  }

  csvImport($event:any) : any{
    let listNewItem:any[] = [];
    const files = $event.target.files;
    if(files.length){
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event : any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if(sheets.length){
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]])

          listNewItem = rows ; 

          console.log("new items : " , listNewItem);
          this.handleAddItemsToCategorie(listNewItem);
        }
      } 
      reader.readAsArrayBuffer(file);
    }
   
  }

}
