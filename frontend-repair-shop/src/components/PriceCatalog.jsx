import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

function PriceCatalog() {
  const currencies = ["EUR", "RSD", "USD"];
  const [rate, setRate] = useState(1);
  const [rateRSD, setRateRSD] = useState(117.282268);
  const [rateUSD, setRateUSD] = useState(1.079441);
  const [currency, setCurrency] = useState("EUR");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstindex = lastIndex - recordsPerPage;
  const records = data.slice(firstindex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
    switch (currency) {
      case "EUR":
        setRate(1);
        break;
      case "RSD":
        setRate(rateRSD);
        break;
      case "USD":
        setRate(rateUSD);
        break;
      default:
        setRate(1);
        break;
    }
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://data.fixer.io/api/latest?access_key=e176f1498ca20ab50ffb557c888b3b29",
      data: {},
    }).then(
      (response) => {
        console.log(response);
        setRateRSD(response.data.rates.RSD);
        setRateUSD(response.data.rates.USD);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/v1/prices",
      baseURL: "http://localhost:8080",
      data: {},
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    }).then(
      (response) => {
        console.log(response);
        setData(response.data);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="priceCatalog">
      <h1>Prices of our service</h1>
      <h5>Select a currency</h5>
      <Form.Select
        className="currencies"
        size="bg"
        aria-label="Default select example"
        onChange={handleChangeCurrency}
      >
        {currencies.map((c) => (
          <option value={c}>{c}</option>
        ))}
      </Form.Select>
      <br></br>
      <br></br>
      <table className="table" onClick={handleChangeCurrency}>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
          {records?.map((el, index) => (
            <tr>
              <td>{el.id}</td>
              <td>{el.nameOfService}</td>
              <td>{(el.price * rate).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PriceCatalog;
