var playlist = { artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle){
    var newPlaylist = Object.assign({}, playlist, {[PhilOchs]: songTitle})
    return newPlaylist;
   }
