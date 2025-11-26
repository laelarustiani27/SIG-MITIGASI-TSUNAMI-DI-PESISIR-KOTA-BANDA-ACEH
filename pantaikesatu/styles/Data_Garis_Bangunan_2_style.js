var size = 0;
var placement = 'point';
function categories_Data_Garis_Bangunan_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Breakwater, jetty, seadike dan groins. ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(173,30,17,0.98)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Pantai Ulee Lheue':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(89,144,232,0.98)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(144,211,102,0.98)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Data_Garis_Bangunan_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Struktur/Posisi");
    var labelText = "";
    size = 0;
    var labelFont = "13.325px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(40, 86, 155, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Lokasi/Daerah") !== null) {
        labelText = String(feature.get("Lokasi/Daerah"));
    }
    
var style = categories_Data_Garis_Bangunan_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
