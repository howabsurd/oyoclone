import Image from "next/image";

const SingleHotel = () => {
  return (
    <div className="w-7/12 mx-auto my-10">
      <Image
        src={
          "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
        }
        alt="hotel"
        width={2000}
        height={2000}
        className="w-full h-large-box my-5 "
      />
      <div className="w-full">
        <h3 className="text-3xl font-bold">
          lorem Ipsum helper csjnckam ncamca kcnak capkaskcn ak
        </h3>
        <p className="text-xl my-5 text-justify">
          lorem ncaiskcc jqwoid jqwdc qowqo wciw cwowo ojwo ncwec ckweo
          cjioweciwubuiwh cwejcca cwcweoej ciwe cuywebcwecjiwe u
        </p>
        <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
          Price : 4500
        </button>
        <p className="text-3xl font-bold my-5">Facilities : </p>
        <ul className="flex text-xl justify-between">
          <li>Swimming Pools</li>
          <li>Dogs</li>
          <li>Garden</li>
          <li>Laundary</li>
          <li>Cricket</li>
        </ul>
        <button className=" w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleHotel;
