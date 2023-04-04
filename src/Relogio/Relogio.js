import React, { useState, useEffect } from 'react';

function Relogio() {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const data = new Date();
      setHoras(data.getHours());
      setMinutos(data.getMinutes());
      setSegundos(data.getSeconds());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    (
      <div>
        <h1 className=
    'clock'
    >{`
    ${horas}
    :
    ${minutos}
    :
    ${segundos}
    `}</h1>
      </div>
    ));
    }

export default Relogio;