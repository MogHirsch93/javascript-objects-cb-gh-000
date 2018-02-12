var playlist = { arcticMonkeys: 'Riot van'};

function udpatePlaylist(obj, key, value){
     return Object.assign({}, playlist, {key: value})
   }
