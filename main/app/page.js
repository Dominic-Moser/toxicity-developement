"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [globalCount, setGlobalCount] = useState(0);
  return (
    <div className="w-full h-full text-zinc-700 cursor-default overflow-hidden">
      <div className="h-[100vh] overflow-y-hidden select-none relative">
        <CryptBackground
          className=""
          setGlobalCount={setGlobalCount}
          globalCount={globalCount}
        />
        <CryptLogo className="" />
      </div>
    </div>
  );
}

const CryptLogo = () => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    fetch("/logo.txt") // Replace with the path to your text file
      .then((response) => response.text())
      .then((data) => setLogo(data));
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-transparent flex justify-center items-center absolute top-0 left-0 pointer-events-none text-zinc-200 ">
      <div className="bg-transparent top-0 left-0 text-mono z-0  relative ">
        <pre className="relative ">
          <p className=" opacity-80 pointer-events-none">{logo}</p>
          <Menu className="" />
        </pre>
      </div>
    </div>
  );
};

const CryptBackground = ({ setGlobalCount, globalCount }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const fontSize = 16; // Replace with your font size
  const boxWidth = window.innerWidth * 0.7; // 70vw
  const boxHeight = window.innerHeight * 0.7; // 70vh
  const charWidth = fontSize * 0.6; // Approximate width of a character
  const lineHeight = fontSize * 1.2; // Approximate line height

  const lines = Math.floor(boxHeight / lineHeight);
  const charsPerLine = Math.floor(boxWidth / charWidth);

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <div className="max-w-[70vw] max-h-[80vh] overflow-clip">
          {[...Array(lines)].map((_, i) => (
            <CryptLine
              key={i}
              index={i}
              setGlobalCount={setGlobalCount}
              globalCount={globalCount}
              charsPerLine={charsPerLine}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const RandChar = ({ setGlobalCount, globalCount }) => {
  const [rand, setRand] = useState("");
  let intervalId = null;

  useEffect(() => {
    setRand(getRandChar());
  }, []);

  const startUpdating = async () => {
    let counter = 0;
    intervalId = setInterval(() => {
      if (counter < 10) {
        setRand(getRandChar());
        counter++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Change the interval as needed
  };

  return (
    <div
      className="font-mono -translate-x-1 -my-1 hover:text-zinc-100 hover:transition-none transition-color duration-[2s] ease-out text-base"
      onMouseOver={(e) => {
        startUpdating();
      }}
      onLoad={(e) => {
        console.log(e);
        startUpdating();
      }}
    >
      {rand}
    </div>
  );
};

export const CryptLine = ({ index, setGlobalCount, globalCount, charsPerLine }) => {
  return (
    <div
      className={`text-hide overflow-hide overflow-x-clip overflow-y-clip flex items-center `}
    >
      {[...Array(charsPerLine)].map((_, i) => (
        <RandChar
          key={i}
          index={i}
          setGlobalCount={setGlobalCount}
          globalCount={globalCount}
        />
      ))}
    </div>
  );
};

const Menu = () => {
  return (
    <div className=" w-[32%] h-[50%] bottom-0 right-0 absolute bg-black border-solid border-2 border-white pointer-events-auto p-1 pl-1 flex items-center">
      <p className="self-start underline pl-2">DIRECTORY</p>
      <MenuItem name="Tally" link="/tally" />
      {/* <p className="absolute left-[50%] top-[50%] hover:text-red-900">ᛞ</p> */}
    </div>
  );
};

const getRandChar = () => {
  const allChars =
    "ABCDEFGHIJKLMOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvqxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let char = allChars.charAt(Math.floor(Math.random() * allChars.length));
  //   console.log(char);
  return char;
};

const MenuItem = ({ name, link }) => {
  const rounter = useRouter();
  return (
    <>
      <div
        className=" w-full absolute pl-2 flex"
        onClick={(e) => {
          rounter.push(link);
        }}
      >
        <p> • </p> <p className="hover:underline">{name}</p>
      </div>
      <div className="self-en"></div>
    </>
  );
};



function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
