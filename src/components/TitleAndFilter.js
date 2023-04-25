import '../style/TitleAndFilter.css';

export const TitleAndFilter = () => {
    return (
        <div class="naslovFilterSection">
        <div class="naziv">
         <h2>
              NAJNOVIJI PROIZVODI
         </h2> 
      </div>
          <div class="filter">
              <button class="filterButton cursors">
                 <img src={require('../images/filter.png')} alt="filter" class="slikaFilter"/>
                  <div class="filterSortDiv">Filter&Sort</div>
              </button>   
           </div> 
      </div>
    );
};