'use client'
import { CryptLine } from "../page";
import { useRouter } from "next/navigation";
const Tally = () => {
  const features = [
    "Seamless order syncing across multiple storefronts",
    "Effortless order synchronization between major platforms such as Shopify and Etsy",
    "Streamlined product syncing for enhanced inventory management",
    "second-precise order syncing for lightning-fast transactions",
    "Inventory sync functionality across various storefronts for accurate stock management",
    "Flexible pay-per-use billing tailored for small-scale businesses",
    "Efficient order fulfillment to optimize your operations",
  ];
const router = useRouter();

  return (
    <>
      <div className="w-[100vw] h-[100vh] font-mono flex items-center justify-center relative">
        {/* this is the blinking in title card */}
        <div className="flex items-center justify-center">
          <p className="opacity-0 animate-fade-in-1000 text-mono w-min text-9xl bg-zinc-900">
            imagine_
          </p>
          <p className="opacity-0 animate-fade-in-1500 text-mono w-min text-9xl bg-zinc-900">
            your_
          </p>
          <div className="relative">
            <p className="opacity-0 animate-fade-in-2000 text-mono w-min text-9xl bg-zinc-900">
              life
            </p>
            <div className="text-2xl  opacity-0 absolute animate-fade-in-2500 -bottom-8 right-0">
              *with tally
            </div>
          </div>
        </div>

        {/* information screen overlay */}
        <div className=" opacity-0 w-full h-full bg-transparent absolute p-16  animate-fade-in-3000">
          {/* upper */}
          <div>
            <p className="text-3xl font-mono text-zinc-400">Features:</p>
            <p className="italic text-zinc-400 ">'automatic' ~ </p>
            {features.map((str, i) => (
              <p key={i} className=" text-zinc-400">
                | {str}
              </p>
            ))}
          </div>
        </div>
        {/* lower */}

        <div className="opacity-0 self-end justify-end absolute bottom-[20vh] left-0 m-24 animate-fade-in-3000">
          <p className="text-3xl font-mono text-zinc-400">Coming:</p>
          <p className="text-zinc-400 ">Summer 2024</p>
        </div>

        <div className="opacity-0 animate-fade-in-3000 text-zinc-700 absolute bottom-10 overflow-x-hidden max-w-full cursor-pointer select-none">
          {[...Array(8)].map((_, i) => (
            <CryptLine charsPerLine={200} key={i} index={2} />
          ))}
        </div>
      </div>
      <div>
        <div className="cursor-pointer top-0 right-0 absolute bg-black border-solid pointer-events-auto p-1 pl-1 flex items-center justify-center ">
          <p className="hover:no-underline underline p-2" onClick={(e) => {router.push('/')} }>Go Home</p>
          {/* <p className="absolute left-[50%] top-[50%] hover:text-red-900">ᛞ</p> */}
        </div>
      </div>
    </>
  ); 
};

export default Tally;
