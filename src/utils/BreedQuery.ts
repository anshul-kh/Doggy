import { optionsType,fetchedOptionsType } from "./Types";

interface BreedsQueryProps {
    setOptions: React.Dispatch<React.SetStateAction<optionsType>>;
}

export const breedsQuery = ({setOptions}:BreedsQueryProps) => {
    fetch('https://api.thedogapi.com/v1/breeds?limit=20')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const optionData:optionsType = [];
        data.forEach((option:fetchedOptionsType)=>{
          optionData.push({
            id:option?.id,
            name:option?.name
          })
        })
        setOptions(optionData)
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
}