import React, { useState, useEffect } from 'react';

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate the sum asynchronously to prevent UI freezes
    const calculateSum = async () => {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(sum);
    };

    calculateSum();
  }, [numbers]);

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value);
    const updatedNumbers = [...numbers, value];
    setNumbers(updatedNumbers);
  };

  return (
    <div>
      <h3>Sum Calculator</h3>
      <input type="number" onChange={handleNumberChange} />
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumCalculator;