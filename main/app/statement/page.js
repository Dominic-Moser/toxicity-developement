// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const [divs, setDivs] = useState([]);
//   const [prevX, setPrevX] = useState(null);
//   const [prevY, setPrevY] = useState(null);
//   const [id, setId] = useState(0); // Add this line
  
  
//   const router = useRouter();



//   const spawnDivAtCoordinates = (x, y) => {
//     setDivs((prevDivs) => [...prevDivs, { x, y, id }]);
//     setId(id + 1); // Increment the id each time a div is created
//   };

//   useEffect(() => {
//     if (prevX !== null && prevY !== null) {
//       spawnDivAtCoordinates(prevX, prevY);
//     }
//     if (divs.length > 35) {
//       divs.shift();
//     }
//   }, [prevX, prevY]);

//   return (
//     <main
//       className="w-[100vw] h-[100vh] overflow-hidden"
//       onMouseMove={(e) => {
//         const dist = Math.sqrt(
//           (prevX - e.clientX) * (prevX - e.clientX) +
//             (prevY - e.clientY) * (prevY - e.clientY)
//         );
//         if (dist > 35) {
//           setPrevX(e.clientX);
//           setPrevY(e.clientY);
//         }
//       }}
//       onClick={(e)=>{
        
//       }}
//     >
//       {divs.map((div) => (
//         <div
//           key={div.id} // Use div.id as the key
//           style={{
//             position: "absolute",
//             top: `${div.y - 40}px`,
//             left: `${div.x}px`,
//           }}
//           className={`bg-transparent w-12 h-12 overflow-clip cursor-default select-none`}
//         >
//           {div.id % 2 === 0 ? "do" : "shit"}
//         </div>
//       ))}

//       {divs.length > 20 ? <ExitButton divs={divs} router={router} /> : ""}
//     </main>
//   );
// }

// const ExitButton = ({ divs, router }) => {
//   return divs[divs.length - 1].id > 200 ? (
//     <div className="w-[100vw] flex items-center justify-center m-2">
//       <div className="-rotate-90 translate-x-5">
//         click me
//       </div>
//       <div 
//       className="bg-white text-black font-serif text-[6rem] text-center p-1 cursor-default z-20 select-none"
//       onClick={(e) => router.push('/cryptography')}
//       >
//         wdym?
//       </div>
//     </div>
//   ) : (
//     ""
//   );
// };
