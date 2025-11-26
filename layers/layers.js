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

var format_eksisting_pantai_0 = new ol.format.GeoJSON();

var features_eksisting_pantai_0 = format_eksisting_pantai_0.readFeatures(
    json_data_eksisting_pantai_2024,   
    {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
    }
);

var jsonSource_eksisting_pantai_0 = new ol.source.Vector({
    attributions: [ new ol.Attribution({html: '<a href=""></a>'}) ]
});

jsonSource_eksisting_pantai_0.addFeatures(features_eksisting_pantai_0);

var style_eksisting_pantai_0 = function(feature) {
    var vegetasi = feature.get('Vegetasi');
    var fillColor;
    
    // Warna berdasarkan persentase vegetasi
    if (vegetasi >= 61) {
        fillColor = '#28a745'; // Hijau (Baik)
    } else if (vegetasi >= 41) {
        fillColor = '#ffc107'; // Kuning (Cukup Baik)
    } else {
        fillColor = '#dc3545'; // Merah (Kurang Baik)
    }
    
    return new ol.style.Style({
        image: new ol.style.Circle({
            radius: 8,
            fill: new ol.style.Fill({ color: fillColor }),
            stroke: new ol.style.Stroke({ color: 'white', width: 2 })
        }),
        text: new ol.style.Text({
            text: feature.get('Lokasi'),
            offsetY: -15,
            fill: new ol.style.Fill({ color: '#000' }),
            stroke: new ol.style.Stroke({ color: '#fff', width: 2 }),
            font: 'bold 12px Arial'
        })
    });
};

var lyr_eksisting_pantai_0 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_eksisting_pantai_0,
    style: style_eksisting_pantai_0,
    title: 'Kondisi Eksisting Pantai 2024<br />\
        <img src="styles/legend/pantai_baik.png" /> Baik (≥61%)<br />\
        <img src="styles/legend/pantai_cukup.png" /> Cukup Baik (41-60%)<br />\
        <img src="styles/legend/pantai_kurang.png" /> Kurang Baik (≤40%)<br />'
});

var layersList = [
    baseLayer,
    lyr_eksisting_pantai_0
];

// ===========================
lyr_eksisting_pantai_0.set('fieldAliases', {
    'Lokasi': 'Lokasi Pantai',
    'Vegetasi': 'Persentase Vegetasi (%)',
    'Bangunan': 'Persentase Bangunan (%)',
    'KlasifikasiVegetasi': 'Klasifikasi Vegetasi',
    'KlasifikasiBangunan': 'Klasifikasi Bangunan',
    'JenisVegetasi': 'Jenis Vegetasi',
    'JenisBangunan': 'Jenis Bangunan'
});

lyr_eksisting_pantai_0.set('fieldImages', {
    'Lokasi': 'TextEdit',
    'Vegetasi': 'TextEdit',
    'Bangunan': 'TextEdit',
    'KlasifikasiVegetasi': 'TextEdit',
    'KlasifikasiBangunan': 'TextEdit',
    'JenisVegetasi': 'TextEdit',
    'JenisBangunan': 'TextEdit'
});

lyr_eksisting_pantai_0.set('fieldLabels', {
    'Lokasi': 'inline label',
    'Vegetasi': 'inline label',
    'Bangunan': 'inline label',
    'KlasifikasiVegetasi': 'inline label',
    'KlasifikasiBangunan': 'inline label',
    'JenisVegetasi': 'inline label',
    'JenisBangunan': 'inline label'
});

lyr_eksisting_pantai_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});