//-------------- TASK 2-1--------------------

// function getShippingMessage(country, price, deliveryFee) {
//     return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//-------------- TASK 2-2--------------------

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message.slice();
//     } else {
//         return `${message.slice(0, maxLength)}...`;
//     }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

//-------------- TASK 2-3--------------------

// function makeArray(firstArray, secondArray, maxLength) {
//     let array = firstArray.concat(secondArray);
//     if (array.length >= maxLength) {
//         return array.slice(0, maxLength);
//     } else {
//         return array;
// }
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

//-------------- TASK 2-4--------------------
// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   for (const num of days) {
//     totalCalories += num.calories;
//   }
//   const averageCalories = totalCalories / days.length;
//   if (days.length === 0) {
//     return 0;
//   } else {
//     return averageCalories;
//   }
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0


//-------------- TASK 2-5--------------------

// const allUsers = [
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"]
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"]
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"]
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"]
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"]
//     }
//   ];

//   const getUsersWithFriend = (users, friendName) => {

//     const filterFriends = users.filter(friend => friend.friends.includes(friendName));
//     return filterFriends;
//   };

//   console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
//   // [
//   //   {
//   //     name: "Sharlene Bush",
//   //     friends: ["Briana Decker", "Sharron Pace"]
//   //   },
//   //   {
//   //     name: "Sheree Anthony",
//   //     friends: ["Goldie Gentry", "Briana Decker"]
//   //   }
//   // ]
  
//   console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
//   // [
//   //   {
//   //     name: "Elma Head",
//   //     friends: ["Goldie Gentry", "Aisha Tran"]
//   //   },
//   //   {
//   //     name: "Sheree Anthony",
//   //     friends: ["Goldie Gentry", "Briana Decker"]
//   //   }
//   // ]
  
//   console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []

//-------------- TASK 2-6--------------------

class Storage {
    #items;
    constructor(arr) {
       this.#items = arr;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        return this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        const idxOfItem = this.#items.indexOf(itemToRemove);
        
        if(idxOfItem < 0) {
            return this.#items;
        } else {
            return this.#items.splice(idxOfItem, 1);
        }
    }
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]