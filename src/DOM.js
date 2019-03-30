import $ from 'jquery';

export const DOMHandler =  (function(){

    return {
        getEpisodeCount
    };

    function getEpisodeCount(){
        let episodesTitle = $("span:contains('Episodes')")[0];
        return episodesTitle.parentElement.textContent.split(':')[1].trim();
    }

    function getAnimeName(){

    }
})();