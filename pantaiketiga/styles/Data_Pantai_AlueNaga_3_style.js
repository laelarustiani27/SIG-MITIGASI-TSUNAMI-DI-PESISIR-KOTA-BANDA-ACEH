var size = 0;
var placement = 'point';
function categories_Data_Pantai_AlueNaga_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(96,104,219,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'jetty dan groins ':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,170,127,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Pantai Alue Naga':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,100,80,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(85,170,127,0.97)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Data_Pantai_AlueNaga_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Struktur/Posisi");
    var labelText = "";
    size = 0;
    var labelFont = "13.325px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(69, 65, 177, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Lokasi/Daerah") !== null) {
        labelText = String(feature.get("Lokasi/Daerah"));
    }
    
var style = categories_Data_Pantai_AlueNaga_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
