import React from 'react'
import './App.css';
import { FaApple, FaBriefcase, FaCloud } from 'react-icons/fa';

const data = [{
  icon: <FaApple />,
  ceil: 27,
  text: 'Apps Made'
}, {
  icon: <FaBriefcase />,
  ceil: 15,
  text: 'Years Experience'
}, {
  icon: <FaCloud />,
  ceil: 260,
  text: 'Websites Made'
}].reverse();

// const [count, setCount] = useState(0);

//   useEffect(() => {
//     let current = 0;
//     const increment = target / 15;

//     const updateCounter = () => {
//       current = Math.ceil(current + increment);
//       if (current < target) {
//         setCount(current);
//         setTimeout(updateCounter, 50);
//       } else {
//         setCount(target);
//       }
//     };

//     updateCounter();
//   }, [target]);


const App = ({icon, text, ceil}) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let current = 0
    const increment = ceil / 15

    const updateCounter = () => {
      current = Math.ceil(current + increment)
      if(current < ceil) {
        setCount(current)
        setTimeout(updateCounter, 50)
      }else {
        setCount(ceil)
      }
    }
    updateCounter()
  }, [ceil])

  return (
    <div className='App'>
      {data.map((item, index) => (
        <div className="stats-container" key={index}>
          <div style={{
            position: "absolute",
            top: "-35px",
            left: "38%",
            fontSize: "55px",
            transform: "translateX(-50 %)"
          }}>{item.icon}</div>
          <div className="counter" data-ceil={item.ceil}>{item.ceil}</div>
          <h4>{item.text}</h4>
          <h4>{count}</h4>
        </div>
      ))}
    </div>
  )
}

export default App


const countersEl = document.querySelectorAll(".counter");

// countersEl.forEach((counterEl) => {
//   counterEl.innerText = "0";
//   incrementCounter();
//   function incrementCounter() {
//     let currentNum = +counterEl.innerText;
//     const dataCeil = counterEl.getAttribute("data-ceil");
//     const increment = dataCeil / 15;
//     currentNum = Math.ceil(currentNum + increment);

//     if (currentNum < dataCeil) {
//       counterEl.innerText = currentNum;
//       setTimeout(incrementCounter, 50);
//     } else {
//       counterEl.innerText = dataCeil;
//     }
//   }
// });