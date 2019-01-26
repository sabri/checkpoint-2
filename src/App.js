import React from "react";
import "./App.css";
import Block from "./components/Block"

class App extends React.Component {
  render() {
    return (
    <div>
        <div style={{width:"auto",height:"100px",padding:"10px",backgroundColor:"black",color:"yellow",marginBottom:"100px"}} >
        <h1 style={{ textIndent: "50px", textAlign: "center" }}>
          Notre équibe
        </h1></div>
<div><Block image={"/s1.jpg"} job={"student"} nom={"sabri"} style={{width:"220px",heigh:"350px",display:"inline-block"}}/>
<Block image={"/s2.jpg"} job={"chef"} nom={"mohamed"} style={{width:"220px",heigh:"350px",display:"inline-block"}}/>
<Block image={"/s3.jpg"} job={"Ceo"} nom={"saber"} style={{width:"220px",heigh:"350px",display:"inline-block"}}/>
<Block image={"/s4.jpg"} job={"dircteur"} nom={"ali"}style={{width:"220px",heigh:"350px",display:"inline-block"}}/>
</div>
      </div>
    );
  }
}
export default App;
