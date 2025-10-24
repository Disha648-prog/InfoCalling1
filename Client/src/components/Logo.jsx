import React from "react";
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">IC</div>
      <div className="hidden sm:block font-semibold text-lg">InfoCalling</div>
    </div>
  )
}
export default Logo;