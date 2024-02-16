import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
    let domNode = useRef();
  
    useEffect(() => {
      let checkHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", checkHandler);
  
      return () => {
        document.removeEventListener("mousedown", checkHandler);
      };
    });
  
    return domNode;
  };

export { useClickOutside };