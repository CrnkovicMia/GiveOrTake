import '../style/ucitajButton.css'
export const LoadButton =()=>{
    return (
        <div className="ucitajViše">
        <button className="ucitajViseButton cursors buttonStyle">
            Učitaj više
            <div className="downArrow"><img src={require('../images/downArrow.png')} alt="downArrow" className="downArrowImagw"/></div>
        </button>
    </div>
    );
}