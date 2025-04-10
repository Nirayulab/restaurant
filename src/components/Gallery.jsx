
import './Gallery.css';

const Gallery = () => {
    return(
    <div className='gallery-container'>
        <div className='gallery-title'>
            <h2>OUR </h2>
            <h3>GALLERY</h3>
           
        </div>
        <div className='gallery-images'>
            <div className='gallery-item'>
                <img src='/images/restu1.jpg'alt='img cannot be found'></img>
            </div>
            <div className='gallery-item'>
                <img src='/images/restu2.jpg'alt='img cannot be found'></img>
            </div>
            <div className='gallery-item'>
                <img src='/images/restu3.jpg'alt='img cannot be found'></img>
            </div>
            <div className='gallery-item'>
                <img src='/images/restu4.jpg'alt='img cannot be found'></img>
            </div>
        </div>
        <div className='gallery-images2'>
            <div className='gallery-item'>
                <img src='/images/restu1.jpg'alt='img cannot be found'></img>
            </div>
            <div className='gallery-item'>
                <img src='/images/restu2.jpg'alt='img cannot be found'></img>
            </div>
            <div className='gallery-item'>
                <img src='/images/restu3.jpg'alt='img cannot be found'></img>
            </div>
            <div className='gallery-item'>
                <img src='/images/restu4.jpg'alt='img cannot be found'></img>
            </div>
        </div>
        

    </div>
    );
};
export default Gallery;