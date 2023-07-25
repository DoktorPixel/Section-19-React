import CarItem from "./car-item/Caritem";
import { cars as carsData } from "./cars.data.js";
import CreateCarForm from "./car-item/create-car-form/CreateCarForm.js";
import { useState } from "react";

function Home() {
  const [cars, setCars] = useState(carsData);
  console.log(cars);
  return (
    <div>
      <h1>Cars catalog</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}

export default Home;

// import { useMemo } from "react";
// import CarItem from "./car-item/Caritem";
// import { cars } from "./cars.data.js";
// function Home() {
//   const filteredCars = useMemo(
//     () => cars.filter((car) => car.price > 20000),
//     []
//   );

//   return (
//     <div>
//       <h1>Cars catalog</h1>
//       <div>
//         {filteredCars.length ? (
//           filteredCars.map((car) => <CarItem key={car.id} car={car} />)
//         ) : (
//           <p>There are no cars</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;
