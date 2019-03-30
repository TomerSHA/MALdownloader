import {DOMHandler} from "./DOM";

(function(){

    let episodesCount = DOMHandler.getEpisodeCount();
    console.log(episodesCount + ' episodes');
    let animeName = DOMHandler.getAnimeName();
    console.log('name: ' + animeName);
})();