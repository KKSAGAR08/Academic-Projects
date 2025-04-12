import React from "react";
import {useLocation,useNavigate} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import plantDescription from "./discription"

function Prediction() {
    const location = useLocation();
    const prediction = location.state?.res;
    const img = location.state?.image;
    const navigate = useNavigate();
    const result = plantDescription.find(d=>d.name===prediction)

  return (
    <div>

  <div
    className="d-flex justify-content-center"
    style={{
      backgroundColor: "rgb(230,231,225)",
      padding: "2rem",
    }}
  >
    <div
      className="card shadow"
      style={{
        maxWidth: "1000px",
        width: "100%",
        height: "550px",
        padding: "1.5rem",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <div className="row g-4 h-100">
        <div className="col-md-5">
          <img
            src={img}
            className="img-fluid rounded-start h-100"
            alt="plant"
            style={{
              objectFit: "cover",
              borderRadius: "0.5rem",
            }}
          />
        </div>
        <div className="col-md-7 d-flex flex-column justify-content-center">
          <div>
            <h5 className="card-title display-6 mb-3 green-text ">{prediction}</h5>
            <p className="card-text fs-5 mb-3 green-sub-text">
             {result.description}
            </p>
            <p className="card-text mt-auto">
              
            </p>
            <button type="button" class="btn btn-primary btn-lg "
            onClick={()=>{
              navigate("/",{replace:true})
            }}
            >Back button</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Prediction;
