function curSucces(pos){
  const coords = pos.coords;

  console.log(coords);
}

function curError(error){
  console.log(`Error: ${error.code} - ${error.message}`);
}

function curOption(){
  enableHighAccuracy: true;
  timout:5000;
  maximumAge:0;
}


navigator.geolocation.getCurrentPosition(curSucces,curError,curOption);