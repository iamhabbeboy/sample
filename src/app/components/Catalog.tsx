"use client";
import Image from "next/image";
import { useState } from "react";
const Catalog: React.FC = () => {
  const [status, setStatus] = useState<number>(-1);
  return (
    <section className="my-20 md:my-10" id="#catalog">
      <div className="px-5 md:p-0">
        <h2 className={`my-10 text-hero-md`}>Catalog</h2>
      </div>
      <div className="flex justify-between items-center">
        <div
          className="w-4/12 h-96 relative cursor-pointer"
          onMouseOver={() => setStatus(0)}
          onMouseLeave={() => setStatus(-1)}
        >
          <Image
            src="/images/woman-1.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div
            className={`absolute top-0 left-0 w-full  bg-[rgba(0,0,0,0.5)] flex items-center justify-center ${status === 0 ? "h-full" : "h-0"} transition-all duration-200  ease-in-out`}
          >
            <div
              className={`relative overflow-hidden flex justify-center items-center ${status === 0 ? "h-full" : "h-0"}`}
            >
              <div className="px-2 md:px-10 text-white text-center">
                <h5 className={`text-hero-small`}>Trending</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  odit reiciendis soluta id eum laborum ipsam, cumque, vitae
                  velit vel recusandae neque provident, labore obcaecati.
                  Eveniet placeat dolore earum magni?
                </p>
              </div>
            </div>
          </div>
          <div
            className={`absolute bottom-5 left-5 flex items-center justify-center text-white text-hero-small ${status === 0 ? "hidden" : "block"}`}
          >
            <h5 className="uppercase">Trending</h5>
          </div>
        </div>

        <div
          className="w-4/12 h-96 relative cursor-pointer"
          onMouseOver={() => setStatus(1)}
          onMouseLeave={() => setStatus(-1)}
        >
          <Image
            src="/images/woman-2.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div
            className={`absolute top-0 left-0 w-full  bg-[rgba(0,0,0,0.5)] flex items-center justify-center ${status === 1 ? "h-full" : "h-0"} transition-all duration-200  ease-in-out`}
          >
            <div
              className={`relative overflow-hidden flex justify-center items-center ${status === 1 ? "h-full" : "h-0"}`}
            >
              <div className="px-2 md:px-10 text-white text-center">
                <h5 className={`text-hero-small`}>Modern</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  odit reiciendis soluta id eum laborum ipsam, cumque, vitae
                  velit vel recusandae neque provident, labore obcaecati.
                  Eveniet placeat dolore earum magni?
                </p>
              </div>
            </div>
          </div>
          <div
            className={`absolute bottom-5 left-5 flex items-center justify-center text-white text-hero-small ${status === 1 ? "hidden" : "block"}`}
          >
            <h5 className="uppercase">Modern</h5>
          </div>
        </div>

        <div
          className="w-4/12 h-96 relative cursor-pointer"
          onMouseOver={() => setStatus(2)}
          onMouseLeave={() => setStatus(-1)}
        >
          <Image
            src="/images/woman-3.jpg"
            alt="Convoy"
            fill
            className="object-cover"
          />
          <div
            className={`absolute top-0 left-0 w-full  bg-[rgba(0,0,0,0.5)] flex items-center justify-center ${status === 2 ? "h-full" : "h-0"} transition-all duration-200  ease-in-out`}
          >
            <div
              className={`relative overflow-hidden flex justify-center items-center ${status === 2 ? "h-full" : "h-0"}`}
            >
              <div className={`px-2 md:px-10 text-white text-center`}>
                <h5 className={`text-hero-small`}>Latest</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  odit reiciendis soluta id eum laborum ipsam, cumque, vitae
                  velit vel recusandae neque provident, labore obcaecati.
                  Eveniet placeat dolore earum magni?
                </p>
              </div>
            </div>
          </div>
          <div
            className={`absolute bottom-5 left-5 flex items-center justify-center text-white text-hero-small ${status === 2 ? "hidden" : "block"}`}
          >
            <h5 className="uppercase">Latest</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Catalog;

