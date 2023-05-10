import React, { useContext, useEffect } from 'react'
import { MyContext } from '../stateManagement/MyContext';

function Display() {

  const {ip, setIp, storedIp} = useContext(MyContext);

  useEffect(()=>{
    let storedIp = JSON.parse(localStorage.getItem("ip"));
    if (storedIp){
      setIp(storedIp);
    }
  },[])

  return (
    <div className="display">
      <div className="flex gap">
        <div className="flex gap1">
          <div className="">IP Address</div>
          <div className="bold font-size">{ip.ip}</div>
        </div>
        <div className="flex gap1 items-center">
          <div className="">Location</div>
        { ip && ip.location &&  <div className="bold font-size">{`${ip.location.city}, ${ip.location.postalCode}`}</div>}
        </div>
        <div className="flex gap1 items-center">
          <div className="">Timezone</div>
          {ip && ip.location && ip.location.timezone &&  <div className="bold font-size"><span>UTC</span>{ip.location.timezone}</div>}
        </div>
        <div className="flex gap1 items-center">
          <div className="">ISP</div>
          <div className="bold font-size">{ip.isp}</div>
        </div>
      </div>
    </div>
  )
}

export default Display