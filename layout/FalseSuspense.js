import { useState, useEffect } from "react";

export default function FakeSuspense(props) {
  const { children, delay, fallback, data } = props;
  const check = data.toString()
  console.log(check)
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, delay);
  }, []);

  return isShown ? children : fallback;
}
