const LoginWithAnimation = () => {
  return (
    <div className="w-full flex justify-center min-h-screen items-center bg-gray-900">
      <div className="relative w-[380px] h-[420px] bg-gray-800 rounded-lg overflow-hidden">
        <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
        <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-transparent -top-[50%] -left-[50%] animate-spin-dely origin-bottom-right"></div>

        <div className="absolute inset-1 bg-gray-800  z-10 p-5">
          <form>
            <h4 className="text-center text-cyan-500 font-semibold mb-12">Sing in</h4>
            <input type="email" name="email" id="email" autoFocus className="relative z-10 border-0 border-b-2 border-cyan-500 h-10 w-full bg-transparent text-gray-100 outline-none px-2 peer" />
            <label htmlFor="">Enter Email</label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginWithAnimation;
