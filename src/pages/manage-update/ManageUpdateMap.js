import React, { useContext, useEffect, useRef, useState } from 'react';
import { InfoContext } from './context';

function ManageFormMap() {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const { kakao } = window;
  const Info = useContext(InfoContext);
  const { address_main } = Info;
  let Lat = 0;
  let Lng = 0;
  const geocoder = new kakao.maps.services.Geocoder();

  const options = {
    center: new kakao.maps.LatLng(Lat, Lng),
    level: 3,
    draggable: false,
  };
  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(Lat, Lng),
  });
  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);
    marker.setMap(map);
    geocoder.addressSearch(address_main, function (results, status) {
      if (status === kakao.maps.services.Status.OK) {
        const result = results[0];
        const coords = new kakao.maps.LatLng(result.y, result.x);
        map.setCenter(coords);
        marker.setPosition(coords);
      }
    });

    return () => {};
  }, [address_main]);
  return (
    <div
      id="mapDiv"
      ref={container}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default ManageFormMap;
