var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Peta_Kecamatan_Meuraxa_0 = new ol.format.GeoJSON();
var features_Peta_Kecamatan_Meuraxa_0 = format_Peta_Kecamatan_Meuraxa_0.readFeatures(json_Peta_Kecamatan_Meuraxa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Kecamatan_Meuraxa_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Peta_Kecamatan_Meuraxa_0.addFeatures(features_Peta_Kecamatan_Meuraxa_0);var lyr_Peta_Kecamatan_Meuraxa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Kecamatan_Meuraxa_0, 
                style: style_Peta_Kecamatan_Meuraxa_0,
                title: '<img src="styles/legend/Peta_Kecamatan_Meuraxa_0.png" /> Peta_Kecamatan_Meuraxa'
            });var format_Data_Area_Vegetasi_1 = new ol.format.GeoJSON();
var features_Data_Area_Vegetasi_1 = format_Data_Area_Vegetasi_1.readFeatures(json_Data_Area_Vegetasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Area_Vegetasi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Data_Area_Vegetasi_1.addFeatures(features_Data_Area_Vegetasi_1);var lyr_Data_Area_Vegetasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_Area_Vegetasi_1, 
                style: style_Data_Area_Vegetasi_1,
    title: 'Data_Area_Vegetasi<br />\
    <img src="styles/legend/Data_Area_Vegetasi_1_0.png" /> Pohon Mangrove/bakau<br />\
    <img src="styles/legend/Data_Area_Vegetasi_1_1.png" /> <br />'
        });var format_Data_Garis_Bangunan_2 = new ol.format.GeoJSON();
var features_Data_Garis_Bangunan_2 = format_Data_Garis_Bangunan_2.readFeatures(json_Data_Garis_Bangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Garis_Bangunan_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Data_Garis_Bangunan_2.addFeatures(features_Data_Garis_Bangunan_2);var lyr_Data_Garis_Bangunan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_Garis_Bangunan_2, 
                style: style_Data_Garis_Bangunan_2,
    title: 'Data_Garis_Bangunan<br />\
    <img src="styles/legend/Data_Garis_Bangunan_2_0.png" /> Breakwater, jetty, seadike dan groins. <br />\
    <img src="styles/legend/Data_Garis_Bangunan_2_1.png" /> Pantai Ulee Lheue<br />\
    <img src="styles/legend/Data_Garis_Bangunan_2_2.png" /> <br />'
        });var format_Data_Pantai_UleeLheue_3 = new ol.format.GeoJSON();
var features_Data_Pantai_UleeLheue_3 = format_Data_Pantai_UleeLheue_3.readFeatures(json_Data_Pantai_UleeLheue_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Pantai_UleeLheue_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Data_Pantai_UleeLheue_3.addFeatures(features_Data_Pantai_UleeLheue_3);var lyr_Data_Pantai_UleeLheue_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_Pantai_UleeLheue_3, 
                style: style_Data_Pantai_UleeLheue_3,
    title: 'Data_Pantai_Ulee Lheue<br />\
    <img src="styles/legend/Data_Pantai_UleeLheue_3_0.png" /> Breakwater, jetty, seadike dan groins. <br />\
    <img src="styles/legend/Data_Pantai_UleeLheue_3_1.png" /> Pantai Ulee Lheue<br />\
    <img src="styles/legend/Data_Pantai_UleeLheue_3_2.png" /> <br />'
        });

lyr_Peta_Kecamatan_Meuraxa_0.setVisible(true);lyr_Data_Area_Vegetasi_1.setVisible(true);lyr_Data_Garis_Bangunan_2.setVisible(true);lyr_Data_Pantai_UleeLheue_3.setVisible(true);
var layersList = [baseLayer,lyr_Peta_Kecamatan_Meuraxa_0,lyr_Data_Area_Vegetasi_1,lyr_Data_Garis_Bangunan_2,lyr_Data_Pantai_UleeLheue_3];
lyr_Peta_Kecamatan_Meuraxa_0.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Data_Area_Vegetasi_1.set('fieldAliases', {'WADMKD': 'WADMKD', 'Kondisi': 'Kondisi', 'Presentase': 'Presentase', 'Jenis': 'Jenis', 'Lokasi': 'Lokasi', });
lyr_Data_Garis_Bangunan_2.set('fieldAliases', {'Lokasi/Daerah': 'Lokasi/Daerah', 'Struktur/Posisi': 'Struktur/Posisi', 'keterangan': 'keterangan', 'Presentase': 'Presentase', });
lyr_Data_Pantai_UleeLheue_3.set('fieldAliases', {'Lokasi/Daerah': 'Lokasi/Daerah', 'Struktur/Posisi': 'Struktur/Posisi', 'keterangan': 'keterangan', 'Presentase': 'Presentase', });
lyr_Peta_Kecamatan_Meuraxa_0.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Data_Area_Vegetasi_1.set('fieldImages', {'WADMKD': 'TextEdit', 'Kondisi': 'TextEdit', 'Presentase': 'TextEdit', 'Jenis': 'TextEdit', 'Lokasi': 'TextEdit', });
lyr_Data_Garis_Bangunan_2.set('fieldImages', {'Lokasi/Daerah': 'TextEdit', 'Struktur/Posisi': 'TextEdit', 'keterangan': 'TextEdit', 'Presentase': 'TextEdit', });
lyr_Data_Pantai_UleeLheue_3.set('fieldImages', {'Lokasi/Daerah': 'TextEdit', 'Struktur/Posisi': 'TextEdit', 'keterangan': 'TextEdit', 'Presentase': 'TextEdit', });
lyr_Peta_Kecamatan_Meuraxa_0.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_Data_Area_Vegetasi_1.set('fieldLabels', {'WADMKD': 'inline label', 'Kondisi': 'inline label', 'Presentase': 'inline label', 'Jenis': 'inline label', 'Lokasi': 'inline label', });
lyr_Data_Garis_Bangunan_2.set('fieldLabels', {'Lokasi/Daerah': 'inline label', 'Struktur/Posisi': 'inline label', 'keterangan': 'inline label', 'Presentase': 'inline label', });
lyr_Data_Pantai_UleeLheue_3.set('fieldLabels', {'Lokasi/Daerah': 'inline label', 'Struktur/Posisi': 'inline label', 'keterangan': 'inline label', 'Presentase': 'no label', });
lyr_Data_Pantai_UleeLheue_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});