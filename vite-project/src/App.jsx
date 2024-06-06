import Button from '@mui/material/Button'
import { useState } from 'react'
import Container from '../components/container.jsx'
import image from './assets/imagen1.webp'

function App() {
  const [data, setData] = useState(null)
  const [savedImages, setSavedImages] = useState([])

  const api = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching the dog image:', error))
  }

  const handleClick = () => {
    api()
  }

  const handleSaveClick = () => {
    if (data) {
      setSavedImages([...savedImages, data])
    }
  }

  return (
    <>
      <div className="container">
        <Container title="imagen 1" paragraph="ahahahah" image={image} />
        <Container title="imagen 2" paragraph="32323" image={image} />
        <Container title="imagen 3" paragraph="4324234" image={image} />
      </div>

      <div className="content">
        <Button onClick={handleClick} variant="contained" style={{ marginTop: '20px' }}>
          ¡Haz clic!
        </Button>
        {data && <img src={data} alt="Random Dog" style={{ marginTop: '20px' }} />}
        {data && (
          <Button onClick={handleSaveClick} variant="contained" color="success" style={{ marginTop: '20px' }}>
            Guardar Imagen
          </Button>
        )}
      </div>
      <div className="content">
        {savedImages.map((image, index) => (
          <img key={index} src={image} alt={`Saved Random Dog ${index}`} />
        ))}
      </div>
    </>
  )
}

export default App
