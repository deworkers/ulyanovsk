
var drawFrame;
var clearFrame;

$(document).ready(function() {
    drawFrame = function() {
        var point = [
            {"pointA":"245,355","pointA1":"245,240","pointB1":"245,240","pointB":"205,165"},
            {"pointA":"245,355","pointA1":"210,312","pointB1":"210,312","pointB":"200,260"},
            {"pointA":"245,355","pointA1":"280,370","pointB1":"336,368","pointB":"420,340"},
            {"pointA":"420,340","pointA1":"530,320","pointB1":"530,320","pointB":"688,348"},
            {"pointA":"245,355","pointA1":"445,574","pointB1":"554,573","pointB":"554,573"},
            {"pointA":"245,355","pointA1":"165,410","pointB1":"165,540","pointB":"200,580"}, 
            {"pointA":"245,355","pointA1":"160,350","pointB1":"58,305","pointB":"58,280"},
            {"pointA":"245,355","pointA1":"245,440","pointB1":"312,506","pointB":"312,506"}
        ]


            for (var i = point.length - 1; i >= 0; i--) {
                var html, animate;
                html = '<path id="p'+i+'\"/>'
                animate = '<animate xlink:href="#p'+i+'" attributeName="d" attributeType="XML" from="M'+point[i].pointA+' C'+ point[i].pointA +' '+ point[i].pointA1 +' '+ point[i].pointA+'\" to="M'+point[i].pointA+' C'+ point[i].pointA1 +' '+ point[i].pointB1 +' '+ point[i].pointB+'\" dur="1s" fill="freeze" />'
                $('svg').append(html+animate);
                $(".svg-wrap").html($(".svg-wrap").html());
            }
    }

    clearFrame = function() {
        $('path').remove();
        $(".svg-wrap").html($(".svg-wrap").html());
    }

});
