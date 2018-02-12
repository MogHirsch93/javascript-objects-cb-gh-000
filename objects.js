var playlist = { Arctic Monkeys: 'Riot van'};

function updatePlaylist(obj, key, value){
    var newPlaylist = Object.assign({}, playlist, {[key]: value})
    return newPlaylist;
   }
