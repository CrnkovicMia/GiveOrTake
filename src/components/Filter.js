import '../style/Filter.css';
import Select from 'react-select';
import { useState } from 'react';
import { useEffect } from 'react';

export const Filter = () =>{
    const optionsCity = [
        {value: '1', label: 'Zagreb'},
        {value: '2', label: 'Pula'},
        {value: '3', label: 'Rovinj'},
        {value: '4', label: 'Rijeka'}
      ];

      const optionsColor = [
        {value: '1', label: 'Plava'},
        {value: '2', label: 'Zelena'},
        {value: '3', label: 'Ljubičasta'},
        {value: '4', label: 'Crvena'}
      ];

      const optionsSize = [
        {value: '1', label: 'XS'},
        {value: '2', label: 'S'},
        {value: '3', label: 'M'},
        {value: '4', label: 'L'}
      ];

      const optionsSort = [
        {value: '1', label: 'Najnovije'},
        {value: '2', label: 'Najstarije'},
        {value: '3', label: 'Od A-Z'},
        {value: '4', label: 'OD Z-A'}
      ];
      const [active, setActive] = useState(true);
      
        const handleClick = () =>{
          setActive(!active);
      };

    return(
       <>
       {active && 
       <div className="filterSort">
       <div className="filterText">
         Filtriranje
         <span onClick={()=>{handleClick()}}>
         <svg xmlns="http://www.w3.org/2000/svg" 
         className='xButton' 
           viewBox="0 0 256 256">
             <path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM162.83 98.83L133.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66L128 133.66l-29.17 29.17a4 4 0 0 1-5.66-5.66L122.34 128L93.17 98.83a4 4 0 0 1 5.66-5.66L128 122.34l29.17-29.17a4 4 0 1 1 5.66 5.66Z"/></svg>
         </span>
       </div>
       <div className='filterCity'>
       <Select  options={optionsCity}  isMulti  placeholder="Grad"
             styles={{
                 control: (baseStyles) => ({
                 ...baseStyles,
                borderRadius: "0",
                backgroundColor: "#F0F0F0"
             }),
           }
            }
        />
       </div>
       <div className='filterCity'>
       <Select 
   options={optionsColor} 
   isMulti 
   placeholder="Boja"
   styles={{
       control: (baseStyles) => ({
         ...baseStyles,
         borderRadius: "0",
         backgroundColor: "#F0F0F0"
       }),
     }
   }
   />
       </div>
       <div className='filterCity'>
       <Select 
   options={optionsSize} 
   isMulti 
   placeholder="Veličina" 
   styles={{
       control: (baseStyles) => ({
         ...baseStyles,
         borderRadius: "0",
         backgroundColor: "#F0F0F0",
       }),
     }
   }
   />
       </div>
       <div className="filterText">Sortiranje</div>
       <div className='filterCity '>
       <Select 
   options={optionsSort} 
   placeholder="Sortiraj"
   styles={{
       control: (baseStyles) => ({
         ...baseStyles,
         borderRadius: "0",
         backgroundColor: "#F0F0F0"
       }),
     }
   }
   />
       </div>
       <div className='primjeni'><button className='primjeniButton'>Zapamti promjene</button></div>
   </div>
       }
       </>
    );
};