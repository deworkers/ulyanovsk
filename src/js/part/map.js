ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.32846455788249,48.40878832411194],
            zoom: 16,
            controls: []
        }, {
        }),
     

        myPlacemark = new ymaps.Placemark([
            54.32846455788249,48.40878832411194
        ], {
            iconCaption: 'ул. Рылеева, 41'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '240'
        });

    myMap.geoObjects.add(myPlacemark);
});