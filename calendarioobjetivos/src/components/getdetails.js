import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const GetDetails = () => {
  const { id } = useParams();
  const [objDetails, setObjDetails] = useState([
    JSON.parse(localStorage.getItem("objective"))
  ]);
  const [det, setDet] = useState([]);

  useEffect(() => {
    const objDetail = objDetails.find((obj) => obj.id === id);
    setDet(objDetail);
  }, []);
  console.log(det);
  return <h1>Details</h1>;
};
export default GetDetails;
