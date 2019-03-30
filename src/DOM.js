import $ from 'jquery';

export const DOMHandler =  (function(){

    return {
        getEpisodeCount,
        getAnimeName
    };

    function getEpisodeCount(){
        let episodesTitle = $("span:contains('Episodes')")[0];
        return episodesTitle.parentElement.textContent.split(':')[1].trim();
    }

    function getAnimeName(){
        let s = window.location.pathname;
        let name = s.replace(/\/anime\/[0-9]*\//, '');
        return name.replace(/_/g, ' ');
    }
})();