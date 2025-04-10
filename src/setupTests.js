// import React, { useEffect, useState } from 'react';

// const AnimatedCounter = ({ iconClass, label, ceil }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let current = 0;
//     const increment = ceil / 15;

//     const updateCounter = () => {
//       current = Math.ceil(current + increment);
//       if (current < ceil) {
//         setCount(current);
//         setTimeout(updateCounter, 50);
//       } else {
//         setCount(ceil);
//       }
//     };

//     updateCounter();
//   }, [ceil]);

//   return (
//     <div className="stats-container">
//       <i className={`${iconClass} fa-3x icon`}></i>
//       <div className="counter">{count}</div>
//       <h4>{label}</h4>
//     </div>
//   );
// };

// export default AnimatedCounter;
