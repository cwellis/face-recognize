import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img className='faceImage' id='inputImage' alt='user generated' src={ imageUrl } />
                <div 
                    className='bounding-box'
                    style={{ 
                        top: box.topRow, 
                        right: box.rightCol, 
                        bottom: box.bottomRow, 
                        left: box.leftCol 
                    }}
                ></div>
            </div>
        </div>
    )
}

export default FaceRecognition