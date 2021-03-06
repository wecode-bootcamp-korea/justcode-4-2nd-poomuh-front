import { createContext, useReducer } from 'react';

const initialRealEstate = {
  realEstate: [],
  mapBounds: {},
  selected: [],
  mapCenter: {},
  map: null,
  clusterer: null,
  clustererStyle: [
    {
      cursor: 'pointer',
      width: '60px',
      height: '60px',
      lineHeight: '60px',
      fontSize: '14px',
      background: 'rgba(50, 106, 249, 0.8)',
      color: '#fff',
      border: '1px solid rgb(50, 106, 249)',
      textAlign: 'center',
      fontWeight: 'bold',
      borderRadius: '50%',
    },
  ],
  roomTypeFilter: {
    원룸: { isOn: true, roomType: '원룸' },
    빌라: { isOn: true, roomType: '빌라' },
    오피스텔: { isOn: true, roomType: '오피스텔' },
    아파트: { isOn: true, roomType: '아파트' },
  },
  tradeTypeFilter: {
    월세: false,
    전세: false,
    deposit: [20, 50],
    monthly: [20, 50],
    depositStep: 1,
    monthlyStep: 1,
  },
};

export const RealEstateContext = createContext();
export const RealEstateContextDispatch = createContext();

function realEstateReducer(state, action) {
  switch (action.type) {
    case 'GET_REAL_ESTATE':
      return { ...state, realEstate: action.realEstate };
    case 'GET_BOUNDS':
      return { ...state, mapBounds: action.getBounds };
    case 'GET_SELECTED_ESTATE':
      return { ...state, selected: action.selected };
    case 'UPDATE_MAP':
      return { ...state, map: action.map };
    case 'UPDATE_CLUSTERER':
      return { ...state, clusterer: action.clusterer };
    case 'UPDATE_MARKER':
      return { ...state, marker: action.marker };
    case 'UPDATE_ROOM_TYPE_FILTER':
      return { ...state, roomTypeFilter: action.roomTypeFilter };
    case 'UPDATE_TRADE_TYPE_FILTER':
      return { ...state, tradeTypeFilter: action.tradeTypeFilter };
    default:
      throw new Error('UNKNOWN ACTION TYPE', action.type);
  }
}

export function GlobalContextProvider({ children }) {
  const [realEstate, markerDispatch] = useReducer(
    realEstateReducer,
    initialRealEstate
  );

  return (
    <RealEstateContext.Provider value={realEstate}>
      <RealEstateContextDispatch.Provider value={markerDispatch}>
        {children}
      </RealEstateContextDispatch.Provider>
    </RealEstateContext.Provider>
  );
}
