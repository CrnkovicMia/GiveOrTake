import '../style/NewPost.css'
import Select from 'react-select';

export const NewPost = () =>{
    const optionsCategory = [
        {value: '1', label: 'Odjeća'},
        {value: '2', label: 'Obuća'},
        {value: '3', label: 'Literatura'},
        {value: '4', label: 'Sport'}
      ];
      const optionsColor = [
        {value: '1', label: 'Red'},
        {value: '2', label: 'White'},
        {value: '3', label: 'Blue'}
      ];
      const optionsLocaation = [
        {value: '1', label: 'Red'},
        {value: '2', label: 'White'},
        {value: '3', label: 'Blue'}
      ];
      const optionsSize = [
        {value: '1', label: 'Red'},
        {value: '2', label: 'White'},
        {value: '3', label: 'Blue'}
      ];
    return(
        <div className="newPostMain">
            <div className="newPostTitle">
                <span>Nova objava</span>
            </div>
            <div className='newPostElements'>
                <div className='elementsLeft'>
                    <div className='elementOne'>
                        <label>Naslov</label>
                        <input type='text' className='newPostNaslov'/>
                        <label>Kategorija</label> 
                        <Select options={optionsCategory} isMulti placeholder="Odaberite kategoriju" 
                        styles={{
                                control: (baseStyles) => ({
                                  ...baseStyles,
                                  borderRadius: "0",
                                  backgroundColor: "#FFFFFF"
                                }),
                              }}
                              className='newPostKategorija'
                        />  
                        <label>Boja</label>
                        <Select options={optionsColor} isMulti placeholder="Odaberite boju" 
                        styles={{
                                control: (baseStyles) => ({
                                  ...baseStyles,
                                  borderRadius: "0",
                                  backgroundColor: "#FFFFFF"
                                }),
                              }}
                              className='newPostKategorija'
                        />
                    </div>
                    <div className='elementTwo'>
                        <label>Lokacija</label>
                        <Select options={optionsLocaation} isMulti placeholder="Odaberite lokaciju" 
                        styles={{
                                control: (baseStyles) => ({
                                  ...baseStyles,
                                  borderRadius: "0",
                                  backgroundColor: "#FFFFFF"
                                }),
                              }}
                              className='newPostKategorija'
                        />  
                        <label>Veličina</label>
                        <Select options={optionsSize} isMulti placeholder="Odaberite veličinu" 
                        styles={{
                                control: (baseStyles) => ({
                                  ...baseStyles,
                                  borderRadius: "0",
                                  backgroundColor: "#FFFFFF"
                                }),
                              }}
                              className='newPostKategorija'
                        />  
                    </div>
                </div>
                <div className='elementsRight'>
                  <label>Opis</label>
                  <textarea  type='text' className='newPostOpis' maxLength={1000}/>
                </div>
            </div>
           <div className='newPostImages'>
            <div className='newPostLeft'>
            <div className='mainImage imgOne'><div className='mainImageInside'>Dodaj<br/>glavnu<br/>fotografiju</div></div>
            <div className='mainImage imgOne'><div className='imageInside'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                className='plusIcon'
                viewBox="0 0 256 256">
                    <path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z"/>
                </svg>
                </span>
                <span>Dodaj<br/>fotografiju</span>
                </div></div>               
            </div>
            <div className='newPostRight'>
            <div className='mainImage imgTwo'><div className='imageInside'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                className='plusIcon'
                viewBox="0 0 256 256">
                    <path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z"/>
                </svg>
                </span>
                <span>Dodaj<br/>fotografiju</span>
                </div></div>
                <div className='mainImage imgTwo'><div className='imageInside'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                className='plusIcon'
                viewBox="0 0 256 256">
                    <path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z"/>
                </svg>
                </span>
                <span>Dodaj<br/>fotografiju</span>
                </div></div>            
            </div>
            </div> 
           <div className='newPostButton'>
            <button className='addButton'>Dodaj objavu</button>
            </div> 
        </div>
    );
}; 