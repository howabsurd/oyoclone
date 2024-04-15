import Image from "next/image";
const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
          }
          alt="hotel"
          height={200}
          width={200}
          className="w-96 h-60 mr-3"
        />
        <div className="grid grid-rows-3">
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            height={200}
            width={200}
            className="w-28"
          />
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            height={200}
            width={200}
            className="w-28 "
          />
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            height={200}
            width={200}
            className="w-28 "
          />
          <Image
            src={
              "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            }
            alt="hotel"
            height={200}
            width={200}
            className="w-28 "
          />
        </div>
        <div className="ml-20">
          <h2 className="font-bold text-3xl line-clamp-1">Lorem Ipsum mf</h2>
          <p className="text-justify my-5 text-lg">
            cuiasnciamcasmc mcjoa scoac aoc aca copa ckakc aucnico acpak
          </p>
          <p className="text-2xl my-5 ">
            <span className="font-bold">Facilities :</span>
            <span>Free wifi, Pet care, Swimming Pool, Beaches, Resort</span>
          </p>
          <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
            Price:4500
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
