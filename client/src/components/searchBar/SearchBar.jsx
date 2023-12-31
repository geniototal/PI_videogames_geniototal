import { useState } from 'react';
import { DivSearch, Btn,Input, Button} from './searchStyle';

export default function SearchBar({onSearch, reLoadAll}) {
   
   const [name, setName] = useState('')

   function handleChange(event){
      // console.log(event.target.value);
      
         setName(event.target.value)
      }
      
   
   return (
      <DivSearch>
          <Input type='search' onChange={handleChange} placeholder= "Name"/>
         <Btn onClick={()=> onSearch(name)}><i className="ri-search-eye-line"></i></Btn>
         
         <Button onClick={()=> reLoadAll()}>Reload All</Button>
      </DivSearch>
   );
}
