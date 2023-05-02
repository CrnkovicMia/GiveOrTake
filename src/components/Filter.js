import '../style/Filter.css';
import Select from 'react-select';

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

    return(
        <div className="filterSort">
            <div className="filterText">Filtriranje</div>
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
    );
};