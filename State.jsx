// import { useState } from "react";
// function State() {
//     const [name, setName] = useState("Vijay");
//     return (
//         <>
//             <h1>Name: {name}</h1>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e)=>setName(e.target.value)}
//             />
//         </>
//     );
// }
// export default State;

function State(props) {
    var val="Varshini";
  return (
    
    <>
    <h3>Sum : {props.value+val}</h3>
    </>
  )
}

export default State;