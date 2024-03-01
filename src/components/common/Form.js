import React from 'react';

function Form({ props }) {

  const { email, password, setEmail, setPassword, handleSubmit, title } = props;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gradient-to-tr from-pink-300 to-pink-600 h-screen w-full flex justify-center items-center">
        <div className="bg-pink-600 w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
          <div className="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl font-mono">Hello</h1>
            <p className="text-5xl font-extrabold font-mono">Welcome!</p>
          </div>
          <div className="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
            <h3 className="text-3xl font-bold text-pink-600 mb-4">
              {title}
            </h3>
            <form className="w-full flex flex-col justify-center" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input type="email" placeholder="Email" className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-pink-600 font-mono" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-4">
                <input type="password" placeholder="Password" className="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-pink-600 font-mono" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button className="bg-pink-600 font-bold text-white focus:outline-none rounded p-3 font-mono" type="submit">
                Submit
              </button>
            </form>
            {title === 'LOGIN' ? (
              <div className='text-center'>
                <button className="text-pink-600 my-6 hover:text-pink-400 font-mono text-center">
                  <a href="/sign-up">Register Here!</a>
                </button>

                <p className='text-center text-gray-400 mt-5 text-[10px] font-mono'>
                  Login Credentials<br />
                  Email: eve.holt@reqres.in<br />
                  Password: cityslicka
                </p>
              </div>
            ) : (
              <div className='text-center'>
                <button className="text-pink-600 my-6 hover:text-pink-400 font-mono text-center">
                  <a href="/">Login Here!</a>
                </button>

                <p className='text-center text-gray-400 mt-5 text-[10px] font-mono'>
                  Register Credentials<br />
                  Email: eve.holt@reqres.in<br />
                  Password: pistol
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
