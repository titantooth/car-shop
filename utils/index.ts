export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "fc13ff5510msh331993b40c355e4p118da5jsn3d1027c96313",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
