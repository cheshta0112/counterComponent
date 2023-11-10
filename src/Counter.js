import React, { useState, useEffect } from "react";

export default function Counter(props) {
  const { initialCount } = props;
  const [count, setCount] = useState(initialCount);
  const [isCount, setIsCount] = useState(false);

  useEffect(() => {
    if (count > 10) {
      setIsCount(true);
    } else {
      setIsCount(false);
    }
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div style={{ margin: 300, fontSize: 30 }}>
        {count}
        <br />
        <br />
        <button
          onClick={handleIncrease}
          style={{ backgroundColor: "yellow", height: 40, width: 100 }}
        >
          Increment
        </button>
        {isCount && <p> Count is too high!</p>}
      </div>
    </>
  );
}
