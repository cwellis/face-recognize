import { useState } from 'react'
import './ImageLinkForm.css'
import Clarifai from 'clarifai'
import FaceRecognition from '../FaceRecognition/FaceRecognition'

const ImageLinkForm = () => {
    
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [box, setBox] = useState({})
    
    const app = new Clarifai.App({
        apiKey: "b5b363dc6bde476abafac87e17b97c2c"
    })

    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    const displayFaceBox = (faceBox) => {
        console.log(faceBox)
        setBox(faceBox)
    }    

    const onSubmit = () => {
        setImageUrl(input);
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            input)
            .then(response => {
                displayFaceBox(calculateFaceLocation(response))
                console.log(response)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p className="f3">
                This Magic Brain will detect faces in your pictures, give it a try
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input 
                        className="f4 pa2 w-70 center" type="text" 
                        onChange={inputChange}
                    />
                    <button 
                        className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                        onClick={onSubmit}
                    >
                        Detect
                    </button>
                </div>
            </div>

            <FaceRecognition box={box} imageUrl={imageUrl} />

        </div>
    )
}

export default ImageLinkForm