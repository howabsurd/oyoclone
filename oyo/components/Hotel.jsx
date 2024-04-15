import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className=" border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={e?.banner}
          alt="hotel"
          width={200}
          height={200}
          className=" w-96 h-60 mr-3"
        />
        <div className="flex flex-col justify-between">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" w-28 h-16 object-cover  "
                  />
                );
              })
            : ""}
        </div>
        <div className=" ml-20">
          <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
          <p className=" text-justify my-5 text-lg">{e?.description}</p>
          <div className=" text-2xl my-5">
            <span className=" font-bold">Facilities : </span>
            <ul className=" flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mr-10 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex items-center">
            <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : &#8377; {e?.price}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

// import Image from "next/image";
// import Link from "next/link";

// const Hotel = () => {
//   return (
//     <div className=" border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
//       <div className="flex">
//         <Image
//           src={
//             "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
//           }
//           alt="hotel"
//           width={200}
//           height={200}
//           className=" w-96 h-60 mr-3"
//         />
//         <div className="flex flex-col justify-between">
//           <Image
//             src={
//               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
//             }
//             alt="hotel"
//             width={200}
//             height={200}
//             className=" w-28 h-16 object-cover  "
//           />
//           <Image
//             src={
//               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
//             }
//             alt="hotel"
//             width={200}
//             height={200}
//             className=" w-28 h-16 object-cover  "
//           />
//           <Image
//             src={
//               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
//             }
//             alt="hotel"
//             width={200}
//             height={200}
//             className=" w-28 h-16 object-cover  "
//           />
//           <Image
//             src={
//               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
//             }
//             alt="hotel"
//             width={200}
//             height={200}
//             className=" w-28 h-16 object-cover  "
//           />
//         </div>
//         <div className=" ml-20">
//           <h2 className="font-bold text-3xl line-clamp-1">iacsascsmc</h2>
//           <p className=" text-justify my-5 text-lg">caoscmaskcl</p>
//           <div className=" text-2xl my-5">
//             <span className=" font-bold">Facilities : </span>
//             <ul className=" flex">
//               <li className=" mr-10 mb-3 flex items-center">
//                 <span>
//                   <Image
//                     src={
//                       "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
//                     }
//                     width={200}
//                     height={200}
//                     className="w-8 h-8 rounded-full"
//                   />
//                 </span>
//                 <span className="ml-5">casmcaskcla</span>
//               </li>
//             </ul>
//           </div>
//           <div className=" flex items-center">
//             <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
//               Price : &#8377; 4500
//             </button>
//             <Link
//               href={`/hotels/2`}
//               className="text-xl font-bold text-red-600 ml-10"
//             >
//               See Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hotel;
// // import Image from "next/image";
// // const Hotel = () => {
// //   return (
// //     <div className="border-2 border-red-500 rounded-lg h-72 w-full mb-5 p-5">
// //       <div className="flex">
// //         <Image
// //           src={
// //             "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
// //           }
// //           alt="hotel"
// //           height={200}
// //           width={200}
// //           className="w-96 h-60 mr-3"
// //         />
// //         <div className="grid grid-rows-3">
// //           <Image
// //             src={
// //               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
// //             }
// //             alt="hotel"
// //             height={200}
// //             width={200}
// //             className="w-28"
// //           />
// //           <Image
// //             src={
// //               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
// //             }
// //             alt="hotel"
// //             height={200}
// //             width={200}
// //             className="w-28 "
// //           />
// //           <Image
// //             src={
// //               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
// //             }
// //             alt="hotel"
// //             height={200}
// //             width={200}
// //             className="w-28 "
// //           />
// //           <Image
// //             src={
// //               "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
// //             }
// //             alt="hotel"
// //             height={200}
// //             width={200}
// //             className="w-28 "
// //           />
// //         </div>
// //         <div className="ml-20">
// //           <h2 className="font-bold text-3xl line-clamp-1">Lorem Ipsum mf</h2>
// //           <p className="text-justify my-5 text-lg">
// //             cuiasnciamcasmc mcjoa scoac aoc aca copa ckakc aucnico acpak
// //           </p>
// //           <p className="text-2xl my-5 ">
// //             <span className="font-bold">Facilities :</span>
// //             <span>Free wifi, Pet care, Swimming Pool, Beaches, Resort</span>
// //           </p>
// //           <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
// //             Price:4500
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hotel;
