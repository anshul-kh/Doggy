import { ItemData } from "./Types";

interface dataQueryProps {
    targetUrl: string;
    setData: React.Dispatch<React.SetStateAction<ItemData>>;

  }

export const dataQuery =({targetUrl,setData}:dataQueryProps) =>{
    fetch(targetUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });

}