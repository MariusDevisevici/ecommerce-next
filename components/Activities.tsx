import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Activities() {
  return (
    <>
      <section className="w-banner 2xl:w-2/3 m-auto text-center mt-24">
        <h1 className=" text-4xl font-bold uppercase tracking-tight text-blackCustom mb-3">
          ACTIVITĂȚi
        </h1>
        <p className="text-md tracking-wider mb-6">
          Descoperă acum produsele recomandate în funcție de activitate
        </p>
        <div className="grid grid-cols-8 gap-2">
          <div
            className="col-span-3  pt-96 pb-10 text-left bg-center bg-cover"
            style={{
              backgroundImage: "url(/activity_biking.webp)",
            }}
          >
            <h2 className="ml-10 mb-4 text-white text-4xl tracking-wider font-bold z-20">
              CICLISM
            </h2>
            <a
              className=" ml-10 z-20 py-2  px-3 text-sm  text-white duration-300 border border-white  hover:bg-white hover:text-primary "
              href="#"
            >
              AFLA MAI MULTE
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
            </a>
          </div>
          <div
            className=" col-span-2 pt-96 pb-10  text-left bg-center bg-cover"
            style={{
              backgroundImage: "url(/activity_safety_setting_1-1.webp)",
            }}
          >
            <h2 className="ml-10 mb-4 text-white text-4xl tracking-wider font-bold z-20">
              VÂNĂTOARE
            </h2>
            <a
              className=" ml-10 z-20 py-2  px-3 text-sm  text-white duration-300 border border-white  hover:bg-white hover:text-primary "
              href="#"
            >
              AFLA MAI MULTE
              <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
            </a>
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <div
              className="h-64 bg-center bg-cover text-left "
              style={{
                backgroundImage: "url(/activity_running-1-1.webp)",
              }}
            >
              <h2 className=" mt-32 ml-10 mb-4 text-white text-4xl tracking-wider font-bold z-20">
                VÂNĂTOARE
              </h2>
              <a
                className=" ml-10 z-20 py-2   px-3 text-sm  text-white duration-300 border border-white  hover:bg-white hover:text-primary "
                href="#"
              >
                AFLA MAI MULTE
                <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
              </a>
            </div>
            <div
              className="h-64 bg-center bg-cover text-left"
              style={{
                backgroundImage: "url(/hiking_1.webp)",
              }}
            >
              <h2 className="ml-10 mb-4 mt-36 text-white text-4xl tracking-wider font-bold z-20">
                DRUMEȚIE
              </h2>
              <a
                className=" ml-10 z-20 py-2  px-3 text-sm  text-white duration-300 border border-white  hover:bg-white hover:text-primary "
                href="#"
              >
                AFLA MAI MULTE
                <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
