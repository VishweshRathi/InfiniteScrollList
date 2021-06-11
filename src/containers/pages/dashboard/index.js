import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { userInfo } from "../../../userInfo";
import { MainContainer } from './styles'
import Loader from '../../common/loader'
import { toast } from 'react-toastify';

function Dashboard() {
  const [index, setIndex] = useState(20);
  const [items, setItems] = useState(userInfo.slice(0, index));
  const [hasMore, setHasMore] = useState(true);
  const history = useHistory();

  const fetchMoreData = () => {
    if (index >= userInfo.length) {
      setHasMore(false)
      return;
    }
    // Fake API call like situation
    setTimeout(() => {
      setIndex(index + 20)
      setItems(userInfo.slice(0, index))
    }, 1000);
  };

  return (
    <>
      <MainContainer>
        <div className="logout_button" onClick={() => {
          localStorage.removeItem("userName");
          history.push("/");
          toast.success("You are successfully logged out.", { toastId: "logout_success" })
        }}>
          Logout
        </div>
        <InfiniteScroll
          dataLength={index}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loader></Loader>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >

          {items.map((pInfo, index) => (
            <div className="info_section" key={index}>
              <div className="info_container">
                <div className="name_info">Name: {pInfo.name.title} {pInfo.name.first} {pInfo.name.last}</div>
                <div className="age_info">Age: {pInfo.dob.age}</div>
                <div className="city_info">City: {pInfo.location.city}</div>
              </div>
              <div className="image_container">
                <img className="pic" alt="User" src={pInfo.picture.thumbnail} />
              </div>
            </div>
          ))}
        </InfiniteScroll>
        <div onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} className="scroll_top">Scroll To Top</div>
      </MainContainer>
    </>
  );
}

export default Dashboard