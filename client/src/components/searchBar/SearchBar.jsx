import { useState } from 'react';
import { DivSearch, Btn,Input} from './searchStyle';

export default function SearchBar({onSearch}) {
   /* const handleSearch = () => {
      const inputSearch = document.getElementById('inputSearch');
      onSearch(inputSearch.value);
      inputSearch.value = "";
   } */
   const [id, setId] = useState('')

   function handleChange(event){
      // console.log(event.target.value);
      setId(event.target.value)
   }
   return (
      <DivSearch>
          <Input type='search' onChange={handleChange}/>
         <Btn onClick={()=> onSearch(id)}>Search</Btn>
      </DivSearch>
   );
}
