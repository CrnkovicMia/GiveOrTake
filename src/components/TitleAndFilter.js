import '../style/TitleAndFilter.css';

export const TitleAndFilter = () => {
    return (
        <div className="naslovFilterSection">
        <div className="naziv">
         <h2>
              NAJNOVIJI PROIZVODI
         </h2> 
      </div>
          <div className="filter">
              <button className="filterButton cursors">
                 <img src={require('../images/filter.png')} alt="filter" className="slikaFilter"/>
                  <div className="filterSortDiv">Filter&Sort</div>
              </button>   
           </div> 
      </div>
    );
};