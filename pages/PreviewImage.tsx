import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GiCancel } from 'react-icons/gi';


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
                <label className="d-block mb-2">What's on your mind </label>
                <textarea name="" id="" cols="60" rows="4" className="mb-n4"></textarea>
                {selectedImage && (
                 
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              <i className="fa-2x " > <GiCancel/> </i>
            </button>
          </div>
        
        )}


                <label className="d-block mt-4">Choose File to Upload: </label>
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                </div> <br/>
                <button type="submit" className="btn btn-success" >Upload File</button>
            </form>
 
       

        </div>
      </div>
      </div>
      </Modal.Body>
		 
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
    position: "relative"
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    border: "none",
    position:"absolute",
    borderRadius:"10px"
    
  },
};