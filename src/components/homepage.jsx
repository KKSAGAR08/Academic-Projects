import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Homepage() {

    const [img, setImg] = useState(null);
    const [predict, setPredict] = useState(null);
    const [imageURL, setImageURL] = useState(null)
    const navigate = useNavigate();

    function handleChange(e) {
        const file = e.target.files[0];
        if (file) {
            setImg(file);
            setImageURL(URL.createObjectURL(file));
        }
    }

    const handleSubmit = async () => {

        if (!img) {
            alert("Please select the image");
            return;
        }

        const formdata = new FormData();
        formdata.append("file", img);

        try {
            const response = await axios.post("http://localhost:5000/predict", formdata, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            setPredict(response.data.prediction);
            const res = response.data.prediction
            navigate("/disease",{
                state:{
                    res:res,
                    image:imageURL
                }
                
            });
        }
        catch {
            console.error("Error connecting to Flask");
            alert("Error connecting to flask");
        }
    };

    return (
        <>
            <div className="bg-custom">
                <div className="parent-container">
                    <div className="heading">
                        <h1 className="heading-text">Plant Disease Detection</h1>
                    </div>
                    <div className="container">
                        <input type="file" onChange={handleChange} className="form-control" accept="image/*" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={handleSubmit}>Button</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
