import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";

const Hotels = ({ hotels }) => {
  return (
    <>
      <Header1 />

      {hotels &&
        hotels.map((e) => {
          return (
            <div key={e._id} className="m-5">
              <Hotel e={e} />
            </div>
          );
        })}
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `http://localhost:3000/api/hotels?city=${ctx.query.city}`
  );
  console.log(ctx.query.city);
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;
