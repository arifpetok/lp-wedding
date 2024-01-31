function App() {
  return (
    <>
      <section className="h-screen flex items-center justify-center bg-hero bg-cover bg-center bg-regal-blue/[0.73]">
        <div className="p-16 rounded-3xl text-center text-white bg-regal-blue2/[0.239]">
          <div>
            <div className="relative">
              <img
                src="../public/index-flower.png"
                className="absolute top-[-170px] -scale-y-100"
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-3 font-normal text-2xl ">
                You are invited to our wedding
              </h5>
              <h2 className="text-6xl mb-3">Ucok & Butet</h2>
              <h4 className="text-2xl">Minggu, 17 April 2022</h4>
              <div className="bg-regal-blue3/[0.301] my-5 py-2 rounded-lg">
                <div className="">
                  <small className="block">Kepada Yth.</small>
                  <small>Bpk/Ibu/Saudara/i</small>
                  <h5>Romeo & Juliet</h5>
                  <small>di Tempat</small>
                </div>
              </div>
              <button className="py-3 px-7 uppercase bg-slate-800 rounded-full">
                buka undangan
              </button>
            </div>
            <div className="relative">
              <img
                src="../public/index-flower.png"
                className="absolute bottom-[-150px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
