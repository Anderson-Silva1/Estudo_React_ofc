const number = [1, 2, 3, 4];

{
    // Usando Function Arrow
  const newArrayNumber0 = number.map( number => number * 2 );

  console.log(newArrayNumber0)
}

{
    // Usando Function Normal
  const newArrayNumber1 = number.map( function ( number ) {
    return number * 2;
  });

  console.log(newArrayNumber1)
}

{
    // Usando Function Arrow Extendida
  const newArrayNumber2 = number.map( number => {
    return number * 2;
  });

  console.log(newArrayNumber2)
}

{
    // Usando Function Arrow Extendida sem parênteses nos parâmetros, pois quando temos apenas um parâmetro e usamos a Arrow function, não precisamos usar os parênteses.    
    const newArrayNumber2 = number.map( number => {
        return number * 2;
      });
}


