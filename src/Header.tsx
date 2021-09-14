import React, {useState} from 'react'

// https://www.sitepoint.com/react-with-typescript-best-practices/

interface HeaderProps {
  buttonText?: string;   // ? means it's not a required property
}

interface Movie {
  title: string;
  date: string;
  rating: string;
  description: string;
}

function Header(props: HeaderProps) {
  const [count, setCount] = useState<number | null>(0);
  const [movie, setMovie] = useState<Movie | null>(null);

  const increment = () => {
    setCount(count! + 1);  // ! indicates that I know this is not null
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
