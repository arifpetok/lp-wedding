import React from "react";

const Home = () => {
  return (
    <>
      <section className="hero px-3 h-screen flex items-center justify-center bg-hero bg-cover bg-center bg-regal-blue/[0.73]">
        <div className="w-[450px] h-[450px] flex items-center justify-center rounded-[10%] text-center text-white bg-regal-blue2/[0.239]">
          <div>
            <div className="relative">
              <img
                src="../index-flower.png"
                className="absolute top-[-170px] -scale-y-100"
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-3 font-normal text-2xl ">
                We are getting married
              </h5>
              <h2 className="text-6xl mb-3">Arif & Indah</h2>
              <h4 className="text-2xl">Minggu, 17 April 2022</h4>
              <h4 className="text-2xl">-Save the Date-</h4>
              <div className="bg-regal-blue3/[0.301] my-5 py-1 rounded-lg">
                <div className="">
                  <small className="block">Kepada Yth.</small>
                  <small className="block">Kepada Yth.</small>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="../index-flower.png"
                className="absolute bottom-[-165px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mempelai bg-bridge2 bg-center">
        <div className="max-w-[650px] py-14 mx-auto text-center">
          <h2 className="text-5xl">Mempelai</h2>
          <p className="mt-5 mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            obcaecati soluta ipsa dolores, doloremque, deserunt ipsam harum
            fugiat nam mollitia nihil explicabo porro voluptatibus, autem saepe
            animi at odit accusantium.
          </p>

          <div className="grid md:grid-cols-2">
            <div className=" relative mb-10">
              <div className="image-bride relative">
                <div className="bg-floral w-[calc(100%+70px)] h-[calc(100%+80px)] bg-cover top-[-29px] left-[-33px] absolute -scale-x-100 -z-10"></div>
                <div className="flex items-center justify-center">
                  <img
                    src="../bride1649774583_groom.jpg"
                    alt=""
                    className="rounded-full object-cover w-[225px] h-[225px]"
                  />
                </div>
                <div className="bg-floral2 absolute -scale-x-100 w-[100px] h-[200px] bottom-[-36px] left-[20px] bg-contain bg-no-repeat bg-center"></div>
              </div>
              <div className="mt-4">
                <h2 className="text-4xl">Arif</h2>
                <h6 className="text-xl">Arif Wijianto S.com</h6>
                <p>Putra dari</p>
                <p>Ayah Ojak</p>
                <p>&</p>
                <p>Ibu Ojak</p>
                <small>Cilacap</small>
              </div>
            </div>
            <div className=" relative">
              <div className="image-bride relative">
                <div className="bg-floral w-[calc(100%+70px)] h-[calc(100%+80px)] bg-cover top-[-29px] left-[-33px] absolute -z-10"></div>
                <div className="flex items-center justify-center">
                  <img
                    src="../bride1649774583_bride.jpg"
                    alt=""
                    className="rounded-full object-cover w-[225px] h-[225px]"
                  />
                </div>
                <div className="bg-floral2 absolute w-[100px] h-[200px] bottom-[-36px] right-[20px] bg-contain bg-no-repeat bg-center"></div>
              </div>
              <div className="mt-4">
                <h2 className="text-4xl">Indah</h2>
                <h6 className="text-xl">Indah Arum Purnamasari S.pd</h6>
                <p>Putra dari</p>
                <p>Ayah Ojak</p>
                <p>&</p>
                <p>Ibu Ojak</p>
                <small>Cilacap</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
