"use client";
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

const CryptBackground = (setGlobalCount, globalCount) => {

  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
//haha

  {
    return (
      <>
        {[...Array(Math.floor(height / 13))].map((_, i) => {
          return (
            <>
              <CryptLine
                key={i}
                className="z-"
                index={i}
                setGlobalCount={setGlobalCount}
                globalCount={globalCount}
              />
            </>
          );
        })}
      </>
    );
  }
};

const Menu = () => {
  return (
    <div className=" w-[32%] h-[50%] bottom-0 right-0 absolute bg-black border-solid border-2 border-white pointer-events-auto p-1 pl-1 flex items-center">
      <p className="self-start underline pl-2">DIRECTORY</p>
      <MenuItem name="COME BACK LATER" link="/" />
      {/* <p className="absolute left-[50%] top-[50%] hover:text-red-900">ᛞ</p> */}
    </div>
  );
};

const MenuItem = ({ name, link }) => {
  return (
    <>
      <div
        className=" w-full absolute pl-2"
        onClick={(e) => {
          console.log("redirect to this link :)", link);
        }}
      >
        • {name}
      </div>
      <div className="self-en"></div>
    </>
  );
};

const CryptLine = ({ index, setGlobalCount, globalCount }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div
      className={`text-hide overflow-hide overflow-x-clip overflow-y-clip flex items-center `}
    >
      {[...Array(Math.floor(width / 9.4))].map((_, i) => (
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

const RandChar = ({ setGlobalCount, globalCount }) => {
  const [rand, setRand] = useState("");
  let intervalId = null;

  useEffect(() => {
    setRand(getRandChar());
  }, []);

  const startUpdating = () => {
    let counter = 0;
    intervalId = setInterval(() => {
      if (counter < 10) {
        setRand(getRandChar());
        counter++;
      } else {
        clearInterval(intervalId);
      }
    }, 1); // Change the interval as needed
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
      key={rand}
    >
      {rand}
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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
