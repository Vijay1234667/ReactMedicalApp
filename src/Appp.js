import React, { useState } from "react";
import Data from "./Data.json";

const Appp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const record = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div>
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

          {record.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
            </tr>
          ))}

        </tbody>
      </table>

      <ul className="pagination">
        <li>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
        </li>
        
        {numbers.map((n, i) => (
          <li key={i}>
            <button onClick={() => changePage(n)}>{n}</button>
          </li>
        ))}
        <li>
          <button onClick={nextPage} disabled={currentPage === npage}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Appp;
