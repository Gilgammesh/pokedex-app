import {useState, useEffect} from 'react';

const useDebounced = (input: string = '', time: number = 500) => {
  const [debounced, setDebounced] = useState<string>(input);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounced(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, time]);

  return debounced;
};

export default useDebounced;
