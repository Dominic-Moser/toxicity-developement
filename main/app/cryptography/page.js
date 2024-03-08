// "use client";
// import { useEffect, useState } from "react";

// export default function cyptography() {
//   const [globalCount, setGlobalCount] = useState(0);

//   const charWidth = 10; // Adjust based on your font size
//   const rowHeight = 20; // Adjust based on your line height

//   // Then use numChars and numRows when generating your characters and rows

//   return (
//     <div className="w-full h-full text-zinc-700 cursor-default overflow-hidden">
//       <div className="h-[100vh] overflow-y-hidden select-none">
//         <CryptBackground
//           className=""
//           setGlobalCount={setGlobalCount}
//           globalCount={globalCount}
//         />
//         <CryptLogo className="" />
//       </div>
//     </div>
//   );
// }

// const CryptLogo = () => {
//   const [logo, setLogo] = useState("");

//   useEffect(() => {
//     fetch("/logo.txt") // Replace with the path to your text file
//       .then((response) => response.text())
//       .then((data) => setLogo(data));
//   }, []);

//   return (
//     <div className="w-[100vw] h-[100vh] bg-transparent flex justify-center items-center absolute top-0 left-0 pointer-events-none opacity-80 text-zinc-200">
//       <div className="bg-transparent top-0 left-0 text-mono z-0 pointer-events-none ">
//         <pre> {logo} </pre>
//       </div>
//     </div>
//   );
// };
// const CryptBackground = (setGlobalCount, globalCount) => {
//   {
//     return [...Array(Math.floor(window.innerWidth / 27))].map((_, i) => (
//       <CryptLine
//         className="z-"
//         key={i}
//         index={i}
//         setGlobalCount={setGlobalCount}
//         globalCount={globalCount}
//       />
//     ));
//   }
// };

// const CryptLine = ({ index, setGlobalCount, globalCount }) => {
//   return (
//     <div
//       className={`text-hide overflow-hide overflow-x-clip overflow-y-clip flex items-center`}
//     >
//       {[...Array(Math.floor(window.innerWidth / 9.4))].map((_, i) => (
//         <RandChar
//           key={i}
//           index={i}
//           setGlobalCount={setGlobalCount}
//           globalCount={globalCount}
//         />
//       ))}
//     </div>
//   );
// };

// const RandChar = ({ setGlobalCount, globalCount }) => {
//   const [rand, setRand] = useState("");
//   let intervalId = null;

//   useEffect(() => {
//     setRand(getRandChar());
//   }, []);

//   const startUpdating = () => {
//     let counter = 0;
//     intervalId = setInterval(() => {
//       if (counter < 10) {
//         setRand(getRandChar());
//         counter++;
//       } else {
//         clearInterval(intervalId);
//       }
//     }, 1); // Change the interval as needed
//   };

//   return (
//     <div
//       className="font-mono -translate-x-1 -my-1 hover:text-zinc-100 hover:transition-none transition-color duration-[2s] ease-out text-base"
//       onMouseOver={(e) => {
//         startUpdating();
//       }}
//       onLoad={(e) => {
//         console.log(e);
//         startUpdating();
//       }}
//     >
//       {rand}
//     </div>
//   );
// };

// const getRandChar = () => {
//   const allChars =
//     "ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvqxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
//   let char = allChars.charAt(Math.floor(Math.random() * allChars.length));
//   //   console.log(char);
//   return char;
// };

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
