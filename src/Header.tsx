import React, {useState} from 'react'

interface HeaderProps {
  buttonText: string;
}


function Header(props: HeaderProps) {
  // const [count, setCount] = useState<number | null>(0);
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Header</h1>
      <button onClick={increment}>{props.buttonText}</button>
      <p>{count}</p>
    </div>
  )
}

export default Header
