import Image from "next/image";
const Products: React.FC = () => {
  return (
    <section id="#products">
      <div
        className="md:justify-between md:flex items-center
        "
      >
        <div className="w-full p-5 md:w-5/12 md-p-0">
          <h2 className={`text-hero-md text-[#b4395d]`}> Asian Fashion </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            non laboriosam deleniti voluptatum ad, illum architecto. Tempore,
            molestiae nesciunt ea, sit ipsam eligendi unde, accusamus doloremque
            atque sequi quae possimus.
          </p>
          <button className="border-2 border-gray-400 px-10 py-3 mt-10 transition-2s hover:bg-[#b4395d] hover:text-white hover:border-[#b4395d]">
            Buy Now{" "}
          </button>
        </div>
        <div className="w-full mt-5 md:w-6/12 md:mt-0">
          <div className="relative w-full h-96">
            <Image
              src="/images/chinese-fashion-1.jpg"
              alt="Convoy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className="md:justify-between  md:flex items-center
        "
      >
        <div className="w-full mt-5 md:w-6/12 md:mt-0">
          <div className="relative w-full h-96">
            <Image
              src="/images/chinese-fashion-2.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full p-5 md:w-5/12 md-p-0">
          <h2 className={`text-hero-md text-[#b4395d]`}> Caftan Wears </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            non laboriosam deleniti voluptatum ad, illum architecto. Tempore,
            molestiae nesciunt ea, sit ipsam eligendi unde, accusamus doloremque
            atque sequi quae possimus.
          </p>
          <button className="border-2 transition-all ease-in-out duration-200 border-gray-400 px-10 py-3 mt-10 transition-2s hover:bg-[#b4395d] hover:text-white hover:border-[#b4395d]">
            Buy Now{" "}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Products;

