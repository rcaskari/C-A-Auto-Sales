window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

// const createCars = (() => {
//     //car data
//     const cars = []

//     //car class
//     class newCar {
//         constructor(make, model, year, img, color, miles, price, vin){
//             this.make = make;
//             this.model = model;
//             this.year = year;
//             this.img = img;
//             this.color = color;
//             this.miles = miles;
//             this.price = price;
//             this.vin = vin;
//         }
//     }

//     //car creation function
//     function makeCar(make, model, year, img, color, miles, price, vin){
//         const car = new newCar(make, model, year, img, color, miles, price, vin)
//         cars.push(car);
//     }

//     //produce cars -- modify for new cars coming in
//     //make dynamic if include db here
//     function produceCars(){
//         makeCar('Honda','Civc','2012','images/car1.jpeg','Gray','92,568','$7500','2HGFB2F58CH579128');
//         makeCar('Honda','Civc','2012','images/car2.jpeg','Gray','150,040','$6200','2HGFB2F87CH540542');
//         makeCar('Volkswagen','Routan','2009','images/car4.jpeg','Black','134,124','$5000','2V8HW34179R578187');
//         makeCar('Dodge','Journey','2016','images/car14.jpg','Black','124,168','$8500','3C4PDCBB1GT211286');
//         //check later what year is for f150 and elantra
//         makeCar('Ford','F150','2006','images/car.jpg','white','179,022','$6500','1FTF1CM7BKD84712');
//         makeCar('Hyundai','Elantra','2015','images/car.jpg','Light Blue','73000','$6800','KMHDH4AE2DU625960');
//         makeCar('Ford','Ecoline Cargo','2007','images/car.jpg','white','194,620','$4000','1FTNE24L87DA43785');
//         //check info
//         makeCar('Hyundai','Sonata','2017','images/car.jpg','white?','95,280','$10,899','5NPE24AF9HH502949');
//         makeCar('Ford','Escape','2014','images/car.jpg','Gold','128,762','$8500','1FMCU0GX5EUD59408');
//     }
//     produceCars();

//     return {cars}

// }) ();

// const displayCars = ( (createCars) => {

    
//     const info = document.querySelector('.featured-info');

//     document.addEventListener('DOMContentLoaded',() => {
//         info.innerHTML = '';
//         let data = '';

//         createCars.forEach(item => {
//              data += ` <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
//                 <span data-img ="${item.img}" class="featured-icon">
//                 <i class="fas fa-car"></i>
//                 </span>

//                  <h5 class="font-weight-bold mx-1">${item.make}</h5>
//                  <h5 class="f mx-1">${item.model}</h5>
//                 </div>`;
//         })
//         info.innerHTML = data;
//     })

//     info.addEventListener("click", event => {
//       if (event.target.parentElement.classList.contains("featured-icon")) {
//         const img = event.target.parentElement.dataset.img;

//         document.querySelector(".featured-photo").src = img;
//       }
//     });
// })(createCars);

// const displayCars = (createCars => {
//   // all cars
//   const cars = createCars.cars;

//   //car container
//   const inventory = document.querySelector(".inventory-container");

//   //CONTENT LOADED
//   document.addEventListener("DOMContentLoaded", () => {
//     inventory.innerHTML = " ";

//     let output = " ";
//     cars.forEach(car => {
//       output += ` <div class="col 10 mx-auto my-3 col-md-6 col-lg-4 single-car ">
//         <div class="card car-card">

//            <img src="${car.img}" class="card-img-top car-img" alt="car">

//            <div class="card-body">
//               <div class="car-info d-flex justify-content-between">

//                  <div class="car-text text-uppercase">
//                     <h6 class="font-weight-bold">${car.make}</h6>
//                     <h6>${car.model}</h6>
//                  </div>

//                  <h5 class="car-value align-self-center py-2 px-3">$
//                     <span class="car-price">${car.price}</span>
//                  </h5>

//               </div>

//            </div>

//            <div class="card-footer text-capitalize d-flex justify-content-between">
//               <p><span><i class="fas fa-car"></i></span>${car.miles}</p>
//                   <p><span><i class="fas fa-cogs"></i></span>${car.year}</p>
//               <p><span><i class="fas fa-gas-pump"></i></span>${car.vin} </p>
//            </div>

//         </div>

//      </div>`;
//     })

//     inventory.innerHTML = output;
//   })
// })(createCars);

// const filterCars = (() => {
//   const filter = document.querySelectorAll(".filter-btn");

//   filter.forEach(btn => {
//     btn.addEventListener("click", event => {
//       const value = event.target.dataset.filter;
//       const singleCar = document.querySelectorAll(".single-car");

//       singleCar.forEach(car => {
//         if (value === "all") {
//           car.style.display = "block";
//         } else {
//           !car.classList.contains(value)
//             ? (car.style.display = "none")
//             : (car.style.display = "block");
//         }
//       });
//     });
//   });
// })();
