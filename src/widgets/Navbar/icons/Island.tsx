import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="22"
      viewBox="0 0 20 22"
      className="island"
      {...props}
    >
      <path d="M19.598 7.744a5.478 5.478 0 00-1.543-2.083 30.7 30.7 0 001.235-.42.72.72 0 00.452-.833c-.49-2.213-3.06-3.196-5.094-2.231a3.475 3.475 0 00-.693-1.116c-1.01-1.09-2.544-1.371-3.818-.7a.72.72 0 00-.362.807c.107.444.225.911.374 1.361-2.33-.402-4.822.5-6.004 2.362a.722.722 0 00.347 1.06c1.129.431 2.376.678 3.726.738-.324.382-.6.8-.819 1.248-.502 1.025-.677 2.153-.494 3.176a.71.71 0 00.913.557 7.31 7.31 0 00.959-.391 23.99 23.99 0 00-2.088 6.534C4.359 18.05 0 18.93 0 21.28c0 .397.319.719.712.719h17.075a.715.715 0 00.712-.72c0-2.312-4.226-3.198-6.527-3.45-.013-1.326.11-2.575.382-3.885.197-.946.45-1.83.778-2.705.33.66.712 1.26 1.12 1.677a.705.705 0 001.014-.004c.771-.8 1.239-1.735 1.39-2.76a16.852 16.852 0 002.031 1.45.708.708 0 001.02-.347c.426-1.056.386-2.337-.109-3.512zm-3.151 12.818H2.052c1.678-1.093 4.985-1.438 7.197-1.438 2.366 0 5.582.386 7.197 1.438zm-5.485-6.912a19.227 19.227 0 00-.413 4.068 26.203 26.203 0 00-2.396-.01c.327-1.768.81-3.337 1.53-4.985a22.092 22.092 0 011.644-3.093c.322-.258.622-.518.89-.77.046.164.097.333.153.505a19.56 19.56 0 00-1.408 4.285zm7.615-3.827a17.687 17.687 0 01-2.165-1.81.705.705 0 00-.83-.12.72.72 0 00-.365.763c.175.967.023 1.837-.452 2.598-.817-1.305-1.415-3.409-1.402-3.92a.718.718 0 00-.493-.702.707.707 0 00-.805.281c-.47.7-2.161 2.187-3.786 3.013.128-1.165.83-2.512 2.313-3.381a.721.721 0 00.32-.838.71.71 0 00-.738-.499c-1.528.134-2.929.038-4.18-.283 1.342-1.14 3.547-1.391 5.22-.556.3.15.663.068.872-.198a.724.724 0 00-.01-.903c-.345-.422-.593-1.179-.762-1.81.572-.097 1.163.108 1.604.584.332.36.526.835.546 1.34.01.28.181.529.437.636.257.107.55.054.755-.136 1.025-.958 2.762-.8 3.453.253-.735.247-1.533.483-1.984.54a.72.72 0 00-.176 1.38c1.083.436 1.915 1.236 2.342 2.25.212.504.308 1.027.286 1.518z" />
    </LegacySvg>
  );
};

export default Icon;