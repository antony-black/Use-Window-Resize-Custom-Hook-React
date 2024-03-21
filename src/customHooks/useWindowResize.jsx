import { useState } from "react";
import { useLayoutEffect } from "react";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const hadleWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    hadleWindowResize();

    window.addEventListener("resize", hadleWindowResize);

    return () => {
      window.removeEventListener("resize", hadleWindowResize);
    };
  }, []);

  return windowSize;
}

// export default function useWindowResize() {
//   const [windowSize, setWindowSize] = useState({
//     width: 0,
//     height: 0,
//   });

//   const handleResize = () => {
//     setWindowSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   useLayoutEffect(() => {
//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return windowSize;
// }
