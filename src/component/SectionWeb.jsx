import React from "react";

function Section2Web(props) {
  console.log(props);
  function showData(e) {
    console.log(e);
    props.setDataView(true);
  }
  return (
    <div className="App-Section">
      <section className="Section">
        <button onClick={showData}>Load Data</button>
      </section>
    </div>
  );
}
export default Section2Web;
