ymaps.ready(init);
function init () {
    var myMap = new ymaps.Map("map", { center:[59.938635, 30.323118], zoom: 17, controls: [] });
    var myGeoObjects = [];
    myGeoObjects = new ymaps.Placemark([59.938635, 30.323118], { balloonContentBody: 'Котейка', }, { iconLayout: 'default#image', iconImageHref: 'img/pin.svg', iconImageSize: [70, 70], iconImageOffset: [-35, -35] });
    var clusterer = new ymaps.Clusterer({ clusterDisableClickZoom: false, clusterOpenBalloonOnClick: false, });
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
    myMap.behaviors.disable('scrollZoom');
}