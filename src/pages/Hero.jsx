import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="px-3 h-screen flex items-center justify-center bg-hero bg-cover bg-center bg-regal-blue/[0.73] overflow-hidden">
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
                You are invited to our wedding
              </h5>
              <h2 className="text-6xl mb-3">Arif & Indah</h2>
              <h4 className="text-2xl">Minggu, 17 April 2022</h4>
              <div className="bg-regal-blue3/[0.301] my-5 py-2 rounded-lg">
                <div className="">
                  <small className="block">Kepada Yth.</small>
                  <small>Bpk/Ibu/Saudara/i</small>
                  <h6>Romeo & Juliet</h6>
                  <small>di Tempat</small>
                </div>
              </div>
              <button
                onClick={() => navigate("/home")}
                className="py-3 px-7 uppercase bg-slate-800 rounded-full"
              >
                buka undangan
              </button>
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
    </>
  );
};

export default Hero;
