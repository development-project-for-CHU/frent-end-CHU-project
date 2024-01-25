
export class Visite {
  id : string | null | undefined ;
  dateVisite: Date;
  

  constructor(
    id : string | null | undefined ,
  dateVisite: Date,
  ) {
    this.id = id;
    this.dateVisite = dateVisite;
    
  }
}
