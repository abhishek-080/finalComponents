import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PreviewImage = (props) => {
     
    const [selectedImage, setSelectedImage] = useState();
 
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
 
    const onSubmit = (e) => {
        e.preventDefault() 
        alert(URL.createObjectURL(selectedImage))
 
    }
     
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };
 
  return (
   
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
		  <Modal.Header closeButton>
			<Modal.Title id="contained-modal-title-vcenter">
			  Upload your photo or video
			</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>		
            <div>
      <div className="container" >
        {/* <h1> Upload your photo or video  </h1> */}
        <div className="row">
            <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <label>Choose File to Upload: </label>
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                </div> <br/>
                <button type="submit" className="btn btn-success" >Upload File</button>
            </form>
 
        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
              
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}

        </div>
      </div>
      </div>
      </Modal.Body>
		  <Modal.Footer>
			<Button onClick={props.onHide}>Close</Button>
		  </Modal.Footer>
		</Modal>
    
  )
};
 
export default PreviewImage;

 
// Just some styles
const styles = {
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "50%", maxHeight: 200 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};