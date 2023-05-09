import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AlertCompleted from "./alertCompleted";
function HorasSemanales() {
  const [totalHours, setTotalHours] = useState(0);
  const [hours, setHours] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [count, setCount] = useState(0);
  const [initialdate, setInitialDate] = useState(null);
  const [finaldate, setFinalDate] = useState(null);
  const [test, setTest] = useState([
    JSON.parse(localStorage.getItem("objective"))
  ]);
  const navigate = useNavigate();
  const save = async (event) => {
    let total = Number(event.target.totalhours.value);
    setTotalHours(total);
    event.preventDefault();
    let monday = Number(event.target.monhour.value);
    let tuesday = Number(event.target.tuehour.value);
    let wednesday = Number(event.target.wedhour.value);
    let thursday = Number(event.target.monhour.value);
    let friday = Number(event.target.fridhour.value);
    let saturday = Number(event.target.sathour.value);
    let sunday = Number(event.target.sunhour.value);
    let startDate = event.target.start.value;

    const newhours = [
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    ];
    setHours([...newhours]);
    let days = CalcDays(total, newhours);
    setInitialDate(startDate);
    let fDate = CalcFinalDate(days);

    const newobj = {
      id: test.length + 1,
      start: startDate,
      totalHours: total,
      hoursweek: newhours
    };

    test.push(newobj);
    localStorage.setItem("ojective", JSON.stringify([test]));
    getPercentage(startDate, fDate, newhours, total);
  };

  //console.log(test);
  function CalcDays(total, arrhours) {
    let suma = 0;
    let x = 0;
    while (suma <= total) {
      arrhours.forEach((element) => {
        suma += element;
        if (suma <= total) {
          x += 1;
          setResultado(suma);
        }
      });
    }
    setCount(x);
    return x;
  }

  // console.log("days:" + count);
  // console.log("Resultado" + resultado);
  // console.log(hours);

  function CalcFinalDate(days) {
    let res = new Date(initialdate);
    console.log("fechacount" + days);
    res.setDate(res.getDate() + days);
    //mostrar la fecha final correcta en un formato adecuado a la lectura.
    console.log("fechafinal=>:" + res.toLocaleDateString());
    setFinalDate(res.toLocaleDateString());
  }
  const [per, setPer] = useState(0);

  const [sumPer, setSumPer] = useState(0);
  //Extra notificacion
  function getPercentage(startDate, findate, arrhours, total) {
    let suma = 0;
    let i = 0;
    let todayDate = Date().toLocaleString();
    console.log("todayDate" + todayDate);
    console.log("FINDATE=>" + findate);

    let daysdiff = (todayDate - startDate) / (1000 * 60 * 60 * 24);
    console.log("difdays: ==>" + daysdiff);
    while (i < daysdiff) {
      arrhours.forEach((element) => {
        suma += element;
        if (i <= daysdiff) {
          i += 1;

          setSumPer(suma);
        }
      });
    }
    let percentatge = (suma * total) / 100;
    setPer(percentatge);
    if (percentatge == 100) {
      return <AlertCompleted />;
    }
  }
  console.log("sumaHastaHoy ==>" + sumPer);
  console.log("porcentage final ==>" + per);

  return (
    <form onSubmit={save}>
      <h1> Objetive</h1>
      <label for="totalhours">Hours of dedication to learn :</label>
      <input type="number" id="totalhours" name="totalhours" /> <br />
      <hr />
      <label for="start">Start:</label>
      <input type="date" id="start" name="start" />
      <br />
      <hr />
      <label>lunes:</label>
      <input type="number" name="monhour" />
      <br />
      <label>Tuesday:</label>
      <input type="number" name="tuehour" />
      <br />
      <label>Wednesday:</label>
      <input type="number" id="wedhour" name="wedhour" />
      <br />
      <label>Thursday:</label>
      <input type="number" id="thurhour" name="thurhour" />
      <br />
      <label>Friday:</label>
      <input type="number" id="fridhour" name="fridhour" />
      <br />
      <label>Saturday:</label>
      <input type="number" id="sathour" name="sathour" />
      <br />
      <label>Sunday:</label>
      <input type="number" id="sunhour" name="sunhour" />
      <br />
      <button> Guardar </button>
    </form>
  );
}
export default HorasSemanales;
