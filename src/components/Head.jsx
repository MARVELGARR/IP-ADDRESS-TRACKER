import React, { useContext, useState, useEffect, useCallback } from 'react'
import Arrow from "/images/icon-arrow.svg"
import { MyContext } from '../stateManagement/MyContext';


function Head() {
    const {ip, setIp} = useContext(MyContext);
    const [ipAddress, setIpAddress] = useState('');

    const API_KEY = `at_K9EzRCIF8pkMbUBnbzoRAk9c9JpZH`
    const APIurl =`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}&`
    
    useEffect(()=>{
        let storedIp = JSON.parse(localStorage.getItem("ip"));
        if (storedIp){
          setIp(storedIp);
        }
    },[])

    const fetch_IP = useCallback(async () => {
        try{ 
            const req = await fetch(APIurl);
            if(req.ok){
                const res = await req.json();
                setIp(res)
                localStorage.setItem('ip', JSON.stringify(res));
                console.log(res);
            }
            else{
                console.error(`Error fetching data. Status code: ${req.status}`);
            }
        }
        catch(err){
            console.error(`Error fetching data: ${err}`);
        }
    }, [APIurl, setIp]);


    const ipInput = (e) =>{
        const value = e.target.value;
        setIpAddress(value);
    }
    const searchIp = (e) =>{
        e.preventDefault();
        fetch_IP(ipAddress);
    }

  return (
    <div>
        <div className="head1">
            <h1 className="">  IP Address Tracker </h1>
            <div className="">
                <form>
                    <input 
                    type="text" 
                    className=""

                    />
                    <img src={Arrow} className="arrow" alt="arrow" />
                </form>
            </div>
        </div>
        <div className="head2">
            <h1 className="">  IP Address Tracker </h1>
            <div className="">
                <form onSubmit={searchIp}>
                    <input
                    onChange={ipInput} 
                    type="text" 
                    className=""
                    placeholder="Search for any IP address or domain"

                    />
                    <img 
                    onClick={searchIp} 
                    src={Arrow} 
                    alt="arrow"
                    className="btn"     
                    />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Head