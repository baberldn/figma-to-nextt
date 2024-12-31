import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f0f0f0]">
      <div className="bg-[#00523F] w-[1400px] h-[800px] text-center relative">
        <div className="flex justify-start items-start w-[550px] h-[500px] mt-[150px] ml-[80px] shadow-[0px_0px_10px_0px_#A6A4A4B5]">
          <div className="flex flex-col w-[550px] h-[500px] p-8 mt-0 bg-[#00523F]">
            <div className="font-montserrat text-8xl font-bold leading-[70px] tracking-wider text-[#C4C4C4] text-left mb-6 mt-10">
              <span>L</span>
              <span>O</span>
              <span>G</span>
              <span>I</span>
              <span>N</span>
            </div>

            <form className="flex flex-col gap-4 mt-4">
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full h-[60px] p-3 text-base bg-[#00523F] text-[#C4C4C4] border border-gray-300 rounded-[8] mb-5"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  className="w-full h-[60px] p-3 text-base bg-[#00523F] text-[#C4C4C4] border border-gray-300 rounded-[8]"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 h-[60px] mt-10 rounded bg-[#C4C4C4] text-gray-800 text-lg font-medium leading-[30px] tracking-wide rounded-[9]"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>

      
        <div className="absolute top-0 right-0 w-[50%] h-full overflow-hidden">
          <img src="/images/Ellipse-3.png" alt="Login Page" className="w-full h-full object-cover" />
        </div>

       
        <div className="absolute top-[100px] right-[140px] w-[45%] h-[80%] overflow-hidden z-5">
          <img src="/images/woman.png.png" alt="Login Page" />
        </div>
      </div>
    </div>
  );
};

export default App;
