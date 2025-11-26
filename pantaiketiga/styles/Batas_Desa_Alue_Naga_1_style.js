var size = 0;
var placement = 'point';
function categories_Batas_Desa_Alue_Naga_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Mangrove, cemara dan pohon kelapa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.97)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(73,217,47,0.97)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.97)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(222,165,96,0.97)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_Batas_Desa_Alue_Naga_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Jenis");
    var labelText = "";
    size = 0;
    var labelFont = "13.325px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(52, 96, 29, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Lokasi") !== null) {
        labelText = String(feature.get("Lokasi"));
    }
    
var style = categories_Batas_Desa_Alue_Naga_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
