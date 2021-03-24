// import React, { useState, Fragment } from 'react'
// import ReactMap, { Marker } from 'react-map-gl'
// import '../css/mapbox.css'

// const Map = (props) => {
//   const [viewport, setViewport] = useState({
//     width: '80vw',
//     height: '70vh',
//     latitude: 30,
//     longitude: -60
//   })
//   console.log(props.restaurants)
//   return (
//     <ReactMap
//       {...viewport}
//       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//       mapStyle="mapbox://styles/queeniew329/ckm6m23ii0dtd17pcut9evzjy"
//       onViewportChange={(viewport) => setViewport(viewport)}
//       maxZoom={3.5}
//       minZoom={1.6}
//     >
//       {props.restaurants.map((restaurant, index) => (
//         <Fragment key={index}>
//           <Marker longitude={restaurant.geo.lon} latitude={restaurant.geo.lat}>
//             <div className={'marker'} />
//           </Marker>
//         </Fragment>
//       ))}
//       <div className="map">
//         <div className="marker" />
//         <span id="map">Map</span>
//       </div>
//     </ReactMap>
//   )
// }

// export default Map
