// First Try
// const COLORS = {
//   "black": '0',
//   "brown": '1',
//   "red": '2',
//   "orange": '3',
//   "yellow": '4',
//   "green": '5',
//   "blue": '6',
//   "violet": '7',
//   "grey": '8',
//   "white": '9'
// }

// export const decodedValue = (colors, dict=COLORS, digits=2) => {
//     let number = '';
//     for (let i = 0; i < digits; i++) {
//         number += dict[colors[i]]
//     }
//     return Number(number);
// };

// const COLORS = [
//   "black",
//   "brown",
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "violet",
//   "grey",
//   "white"
// ]

// export const decodedValue = (colors, arr=COLORS) => {
//     const tensPlace = arr.indexOf(colors[0]) * 10;
//     const onesPlace = arr.indexOf(colors[1]);
//     return tensPlace + onesPlace;
// };

// Third Try
const COLORS = [
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
]

const findIndex = (color, arr=COLORS) => {
  return arr.indexOf(color)
} ;

export const decodedValue = (colors) => {
    let [tensPlace, onesPlace] = colors;
    return (findIndex(tensPlace) * 10) + findIndex(onesPlace);
};
