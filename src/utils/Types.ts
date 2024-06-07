// type of data (itemdata)
export type ItemData =  {
    id: string;
    url: string;
    width: number;
    height: number
  }[];

  // type of options/breeds fetching from api
export type fetchedOptionsType = {
    weight: {
        imperial: string;
        metric: string;
    };
    height: {
        imperial: string;
        metric: string;
    },
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
  }
  
  // type of option being stored
 export type optionsType = {
    id:number;
    name:string;
  }[];