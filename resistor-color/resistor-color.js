//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// FIRST TRY
// export const colorCode = (color) => {
//   switch (color) {
//     case "black":
//       return 0;
//       break;
//     case "brown":
//       return 1;
//       break;
//     case "red":
//       return 2;
//       break;
//     case "orange":
//       return 3;
//       break;
//     case "yellow":
//       return 4;
//       break;
//     case "green":
//       return 5;
//       break;
//     case "blue":
//       return 6;
//       break;
//     case "violet":
//       return 7;
//       break;
//     case "grey":
//       return 8;
//       break;
//     case "white":
//       return 9;
//       break;
//   }
// };

// SECOND TRY

export const colorCode = (color) => {
  return COLORS.indexOf(color);
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
];
