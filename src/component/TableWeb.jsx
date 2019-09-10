import React from "react";
import { useEffect } from "react";

function TableWeb({ data, viewData, dataOk }) {
  return (
    <div className="Table">
      <table className="TableSection">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Profile Photo</th>
            <th>#Transaction</th>
            <th>%Amount Transaction</th>
          </tr>
          {viewData && dataOk
            ? data.map((datas, index) => (
                <tr key={index}>
                  <React.Fragment>
                    <td>{datas.fullname}</td>

                    <td>
                      <img src={datas.photo} alt="imagePhoto" />
                    </td>

                    <td>{datas.trx_count}</td>

                    <td>
                      <div className="container">
                        <div
                          className="skills bar"
                          style={{
                            width: Math.floor(
                              (parseFloat(datas.trx_amount) /
                                (90000 + 500000 + 70000)) *
                                100
                            )
                          }}
                        >
                          {Math.floor(
                            (parseFloat(datas.trx_amount) /
                              (90000 + 500000 + 70000)) *
                              100
                          )}
                          %
                        </div>
                      </div>
                    </td>
                  </React.Fragment>
                </tr>
              ))
            : []}
        </tbody>
      </table>
    </div>
  );
}
export default TableWeb;
