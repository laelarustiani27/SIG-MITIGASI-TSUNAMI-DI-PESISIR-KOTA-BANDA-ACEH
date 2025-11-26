var size = 0;
var placement = 'point';
function categories_Data_Pantai_AlueNaga_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'jetty dan groins ':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.97)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(232,97,115,0.97)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Pantai Alue Naga':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.97)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(54,73,216,0.97)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.97)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(114,216,98,0.97)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Data_Pantai_AlueNaga_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Struktur/Posisi");
    var labelText = "";
    size = 0;
    var labelFont = "13.325px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(131, 129, 23, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Struktur/Posisi") !== null) {
        labelText = String(feature.get("Struktur/Posisi"));
    }
    
var style = categories_Data_Pantai_AlueNaga_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
