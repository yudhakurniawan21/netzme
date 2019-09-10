import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import HeaderWeb from "./component/HeaderWeb";
import SectionWeb from "./component/SectionWeb";
import SectionWeb2 from "./component/SectionWeb2";
import TableWeb from "./component/TableWeb";

function App() {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]);
  const [viewData, setDataView] = useState(false);
  const [dataOk, setDataOK] = useState(false);

  useEffect(() => {
    console.log(viewData);
    if (viewData) {
      async function fetchData() {
        const res = await fetch(
          "https://my-json-server.typicode.com/destri8/demo/data"
        );
        return res
          .json()
          .then(res => res)
          .catch(err => setErrors(err));
      }

      async function getData() {
        let temp = await fetchData();
        console.log(temp);
        setData(temp);
        setDataOK(true);
        return await fetchData();
      }

      getData();
    }
  }, [viewData]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <HeaderWeb />
      <SectionWeb setDataView={setDataView} />
      <TableWeb data={data} viewData={viewData} dataOk={dataOk} />
      <SectionWeb2 />
    </div>
  );
}

export default App;
