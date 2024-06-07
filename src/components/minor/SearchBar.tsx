import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';

import { ItemData,optionsType} from '../../utils/Types';
import { dataQuery } from '../../utils/DataQuery';
import { breedsQuery } from '../../utils/BreedQuery';

interface SearchBarProps {
  setData: React.Dispatch<React.SetStateAction<ItemData>>;
}



const SearchBar:React.FC<SearchBarProps> = ({setData}) => {
  const [options,setOptions] = React.useState<optionsType>([]);
  const [selectedId, setSelectedId] = React.useState<number | null>(null);


  useEffect(() => {
    // get breeds list for search 
    breedsQuery({setOptions})
  }, []); // Empty dependency array to run the effect only once



  const handleAutocompleteChange = async(event: React.ChangeEvent<{}>, value: string | null) => {
   
    const selectedOption = await options.find((option) => option.name === value);
    if (selectedOption) {
      await setSelectedId(selectedOption.id);
    }
    
  };

  useEffect(()=>{
    //fetching target breed
    const targetUrl = `https://api.thedogapi.com/v1/images/search?breed_id=${selectedId}`;
    dataQuery({targetUrl,setData})
  },[selectedId,setData])

  return (
    <div className="w-full flex justify-center items-center">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        className="rounded-3xl w-11/12 md:w-2/5 flex justify-center items-center"
        options={options.map((option) => option.name)}
        onChange={handleAutocompleteChange}
        renderInput={(params) => (
          <>
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
          
          </>
        )}
      />
      
    </div>
  );
}

export default SearchBar




