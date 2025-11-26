var size = 0;
var placement = 'point';
function categories_Data_Garis_Bangunan_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'breakwater dan seadike':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(131,193,240,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Pantai Syiah Kuala':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(196,59,206,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(205,198,116,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Data_Garis_Bangunan_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Struktur/Posisi");
    var labelText = "";
    size = 0;
    var labelFont = "13.325px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(83, 165, 187, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Lokasi/Daerah") !== null) {
        labelText = String(feature.get("Lokasi/Daerah"));
    }
    
var style = categories_Data_Garis_Bangunan_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
