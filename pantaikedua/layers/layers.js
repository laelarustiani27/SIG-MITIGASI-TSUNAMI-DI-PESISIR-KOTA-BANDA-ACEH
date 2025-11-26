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
var format_Peta_Kecamatan_Syiah_Kuala_0 = new ol.format.GeoJSON();
var features_Peta_Kecamatan_Syiah_Kuala_0 = format_Peta_Kecamatan_Syiah_Kuala_0.readFeatures(json_Peta_Kecamatan_Syiah_Kuala_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Kecamatan_Syiah_Kuala_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Peta_Kecamatan_Syiah_Kuala_0.addFeatures(features_Peta_Kecamatan_Syiah_Kuala_0);var lyr_Peta_Kecamatan_Syiah_Kuala_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Kecamatan_Syiah_Kuala_0, 
                style: style_Peta_Kecamatan_Syiah_Kuala_0,
                title: '<img src="styles/legend/Peta_Kecamatan_Syiah_Kuala_0.png" /> Peta_Kecamatan_Syiah_Kuala'
            });var format_Batas_Desa_Deah_Raya_1 = new ol.format.GeoJSON();
var features_Batas_Desa_Deah_Raya_1 = format_Batas_Desa_Deah_Raya_1.readFeatures(json_Batas_Desa_Deah_Raya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_Deah_Raya_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Batas_Desa_Deah_Raya_1.addFeatures(features_Batas_Desa_Deah_Raya_1);var lyr_Batas_Desa_Deah_Raya_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Desa_Deah_Raya_1, 
                style: style_Batas_Desa_Deah_Raya_1,
    title: 'Batas_Desa_Deah_Raya<br />\
    <img src="styles/legend/Batas_Desa_Deah_Raya_1_0.png" /> Mangrove dan Pohon Kelapa<br />\
    <img src="styles/legend/Batas_Desa_Deah_Raya_1_1.png" /> <br />'
        });var format_Data_Pantai_SyiahKuala_2 = new ol.format.GeoJSON();
var features_Data_Pantai_SyiahKuala_2 = format_Data_Pantai_SyiahKuala_2.readFeatures(json_Data_Pantai_SyiahKuala_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Pantai_SyiahKuala_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Data_Pantai_SyiahKuala_2.addFeatures(features_Data_Pantai_SyiahKuala_2);var lyr_Data_Pantai_SyiahKuala_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_Pantai_SyiahKuala_2, 
                style: style_Data_Pantai_SyiahKuala_2,
    title: 'Data_Pantai_Syiah Kuala<br />\
    <img src="styles/legend/Data_Pantai_SyiahKuala_2_0.png" /> breakwater dan seadike<br />\
    <img src="styles/legend/Data_Pantai_SyiahKuala_2_1.png" /> Pantai Syiah Kuala<br />\
    <img src="styles/legend/Data_Pantai_SyiahKuala_2_2.png" /> <br />'
        });var format_Data_Garis_Bangunan_3 = new ol.format.GeoJSON();
var features_Data_Garis_Bangunan_3 = format_Data_Garis_Bangunan_3.readFeatures(json_Data_Garis_Bangunan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Data_Garis_Bangunan_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Data_Garis_Bangunan_3.addFeatures(features_Data_Garis_Bangunan_3);var lyr_Data_Garis_Bangunan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_Garis_Bangunan_3, 
                style: style_Data_Garis_Bangunan_3,
    title: 'Data_Garis_Bangunan<br />\
    <img src="styles/legend/Data_Garis_Bangunan_3_0.png" /> breakwater dan seadike<br />\
    <img src="styles/legend/Data_Garis_Bangunan_3_1.png" /> Pantai Syiah Kuala<br />\
    <img src="styles/legend/Data_Garis_Bangunan_3_2.png" /> <br />'
        });

lyr_Peta_Kecamatan_Syiah_Kuala_0.setVisible(true);lyr_Batas_Desa_Deah_Raya_1.setVisible(true);lyr_Data_Pantai_SyiahKuala_2.setVisible(true);lyr_Data_Garis_Bangunan_3.setVisible(true);
var layersList = [baseLayer,lyr_Peta_Kecamatan_Syiah_Kuala_0,lyr_Batas_Desa_Deah_Raya_1,lyr_Data_Pantai_SyiahKuala_2,lyr_Data_Garis_Bangunan_3];
lyr_Peta_Kecamatan_Syiah_Kuala_0.set('fieldAliases', {'WADMKC': 'WADMKC', });
lyr_Batas_Desa_Deah_Raya_1.set('fieldAliases', {'WADMKD': 'WADMKD', 'Lokasi': 'Lokasi', 'Kondisi': 'Kondisi', 'Presentase': 'Presentase', 'Jenis': 'Jenis', });
lyr_Data_Pantai_SyiahKuala_2.set('fieldAliases', {'Lokasi/Daerah': 'Lokasi/Daerah', 'Struktur/Posisi': 'Struktur/Posisi', 'keterangan': 'keterangan', 'Presentase': 'Presentase', });
lyr_Data_Garis_Bangunan_3.set('fieldAliases', {'Lokasi/Daerah': 'Lokasi/Daerah', 'Struktur/Posisi': 'Struktur/Posisi', 'keterangan': 'keterangan', 'Presentase': 'Presentase', });
lyr_Peta_Kecamatan_Syiah_Kuala_0.set('fieldImages', {'WADMKC': 'TextEdit', });
lyr_Batas_Desa_Deah_Raya_1.set('fieldImages', {'WADMKD': 'TextEdit', 'Lokasi': 'TextEdit', 'Kondisi': 'TextEdit', 'Presentase': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Data_Pantai_SyiahKuala_2.set('fieldImages', {'Lokasi/Daerah': 'TextEdit', 'Struktur/Posisi': 'TextEdit', 'keterangan': 'TextEdit', 'Presentase': 'TextEdit', });
lyr_Data_Garis_Bangunan_3.set('fieldImages', {'Lokasi/Daerah': 'TextEdit', 'Struktur/Posisi': 'TextEdit', 'keterangan': 'TextEdit', 'Presentase': 'TextEdit', });
lyr_Peta_Kecamatan_Syiah_Kuala_0.set('fieldLabels', {'WADMKC': 'inline label', });
lyr_Batas_Desa_Deah_Raya_1.set('fieldLabels', {'WADMKD': 'inline label', 'Lokasi': 'inline label', 'Kondisi': 'inline label', 'Presentase': 'inline label', 'Jenis': 'inline label', });
lyr_Data_Pantai_SyiahKuala_2.set('fieldLabels', {'Lokasi/Daerah': 'inline label', 'Struktur/Posisi': 'inline label', 'keterangan': 'inline label', 'Presentase': 'no label', });
lyr_Data_Garis_Bangunan_3.set('fieldLabels', {'Lokasi/Daerah': 'inline label', 'Struktur/Posisi': 'inline label', 'keterangan': 'inline label', 'Presentase': 'inline label', });
lyr_Data_Garis_Bangunan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});