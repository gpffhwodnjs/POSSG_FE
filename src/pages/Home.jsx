import React, { useEffect, useState } from 'react';
import HomeItem from 'components/home/HomeItem';
import HomeItemEdit from 'components/home/HomeItemEdit';
import axios from 'axios';
import Attendance from 'components/employees/Attendance';
import LeaveWork from 'components/employees/LeaveWork';
import AttendanceCehck from 'components/employees/AttendanceCheck';

function Home() {

  const accessToken = localStorage.getItem("accesstoken");
  const convSeq = localStorage.getItem("convSeq");

  const [isChange, setIsChange] = useState(false);
  const [homeMenu, setHomeMenu] = useState([]);

  useEffect(() => {

    axios.get(`http://54.180.60.149:3000/favoritePageList`, {
        params: {
          convSeq: convSeq
        },
        headers: {
          accessToken: `Bearer ${accessToken}`
        }
      })
      .then((response) => {
        console.log(response.data);
        setHomeMenu(response.data);
      })
      .catch((error) => {
        console.error(error);
      })

  }, [isChange]);

  return (
    <div className='home-page'>
      
      <div className='home-container'>
        {
          homeMenu && homeMenu.map((item) => (
            item.favoriteEnable === "enable" ?
            (<HomeItem key={item.seq} item={item} />)
            :
            (<React.Fragment key={item.seq}></React.Fragment>)
          ))
        }
        <HomeItemEdit homeMenu={homeMenu} isChange={isChange} setIsChange={setIsChange} />

        <AttendanceCehck />
      </div>
    </div>
  )
}

export default Home;