import React, {useMemo, useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
declare var process : {
  env: {
    NEXT_PUBLIC_GMAP_API_KEY: string
  }
}

const center = {
  lat: 10.522998,
  lng: -66.916667
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY
  })
  const [wait, setWait] = useState(false)

  if(isLoaded) {
    setTimeout(
      () => setWait(true),
      3000
    )
  }
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return wait ? (
      <GMap onLoad={onLoad} onUnmount={onUnmount} />
  ) : <></>
}

const GMap = ({onLoad, onUnmount}:any) => {
  return(
    <GoogleMap
        mapContainerClassName='w-full h-[45vh]'
        center={center}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} />
      </GoogleMap>
  )
}

export default Map