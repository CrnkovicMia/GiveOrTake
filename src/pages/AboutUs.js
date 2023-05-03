import '../style/AboutUs.css';

export const AboutUs = () => {


    return(
        <div className="mainAboutUs">
        <div className='one'>
            <div className='oneLeft'>
                <label className="naslovLeft">NAŠA VIZIJA</label>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Id venenatis a condimentum vitae. Quam adipiscing vitae proin sagittis. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Malesuada fames ac turpis egestas maecenas pharetra. Tincidunt ornare massa eget egestas purus viverra accumsan in. Amet tellus cras adipiscing enim eu turpis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique..
                </p>
            </div>
            <div className='oneRight'>
                <img src={require('../images/image1.jpg')} className='imageOne'/>
            </div>
        </div>
        <div className='two'>
        <div className='twoLeft'>
                <img src={require('../images/image1.jpg')} className='imageOne'/>
            </div>
        <div className='twoRight'>
                <label className="naslovLeft">ZAŠTO POKLANJATI</label>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Id venenatis a condimentum vitae. Quam adipiscing vitae proin sagittis. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Malesuada fames ac turpis egestas maecenas pharetra. Tincidunt ornare massa eget egestas purus viverra accumsan in. Amet tellus cras adipiscing enim eu turpis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique..
                </p>
            </div>
        </div>
        <div className='three'>
        <div className='oneLeft'>
                <label className="naslovLeft">UTJECAJ NA OKOLIŠ</label>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Id venenatis a condimentum vitae. Quam adipiscing vitae proin sagittis. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Malesuada fames ac turpis egestas maecenas pharetra. Tincidunt ornare massa eget egestas purus viverra accumsan in. Amet tellus cras adipiscing enim eu turpis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique..
                </p>
            </div>
            <div className='oneRight'>
                <img src={require('../images/image2.jpg')} className='imageOne'/>
            </div>
        </div>
    </div>
    );
};