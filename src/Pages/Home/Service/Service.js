import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  const navigate = useNavigate();
  const navigateToDetailPage = () => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h2>{name} </h2>
      <h4>Price:${price}</h4>
      <p>{description}</p>
      <button
        onClick={() => navigateToDetailPage()}
        className="btn btn-primary"
      >
        Details →
      </button>
    </div>
  );
};

export default Service;
