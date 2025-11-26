// Data Kondisi Vegetasi Pantai 2024
var json_data_vegetasi_2024 = {
    "type": "FeatureCollection",
    "name": "data_vegetasi_pantai_2024",
    "crs": { 
        "type": "name",
        "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
    },
    "features": [
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Ulee Lheu", 
                "Persentase": 66,
                "Klasifikasi": "Baik",
                "JenisVegetasi": "Mangrove, Kelapa, Pandan, Nipah, Cemara"
            } 
        },
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Syiah Kuala", 
                "Persentase": 55,
                "Klasifikasi": "Cukup Baik",
                "JenisVegetasi": "Mangrove, Nipah, Cemara"
            } 
        },
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Alue Naga", 
                "Persentase": 31.6,
                "Klasifikasi": "Kurang Baik",
                "JenisVegetasi": "Mangrove, Kelapa, Nipah, Cemara"
            } 
        }
    ]
}

// Data Kondisi Bangunan Pantai 2024
var json_data_bangunan_2024 = {
    "type": "FeatureCollection",
    "name": "data_bangunan_pantai_2024",
    "crs": { 
        "type": "name",
        "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
    },
    "features": [
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Ulee Lheu", 
                "Persentase": 63,
                "Klasifikasi": "Baik",
                "JenisBangunan": "Seadike, Breakwater, Jetty, Groins, Seawall"
            } 
        },
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Syiah Kuala", 
                "Persentase": 60,
                "Klasifikasi": "Cukup Baik",
                "JenisBangunan": "Seadike, Breakwater, Seawall"
            } 
        },
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Alue Naga", 
                "Persentase": 25,
                "Klasifikasi": "Kurang Baik",
                "JenisBangunan": "Jetty, Groins"
            } 
        }
    ]
}

// Data Gabungan Kondisi Eksisting Pantai 2024
var json_data_eksisting_pantai_2024 = {
    "type": "FeatureCollection",
    "name": "data_eksisting_pantai_2024",
    "crs": { 
        "type": "name",
        "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" }
    },
    "features": [
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Ulee Lheu", 
                "Vegetasi": 66,
                "Bangunan": 63,
                "KlasifikasiVegetasi": "Baik",
                "KlasifikasiBangunan": "Baik",
                "JenisVegetasi": "Mangrove, Kelapa, Pandan, Nipah, Cemara",
                "JenisBangunan": "Seadike, Breakwater, Jetty, Groins, Seawall"
            } 
        },
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Syiah Kuala", 
                "Vegetasi": 55,
                "Bangunan": 60,
                "KlasifikasiVegetasi": "Cukup Baik",
                "KlasifikasiBangunan": "Cukup Baik",
                "JenisVegetasi": "Mangrove, Nipah, Cemara",
                "JenisBangunan": "Seadike, Breakwater, Seawall"
            } 
        },
        { 
            "type": "Feature", 
            "properties": { 
                "Lokasi": "Pantai Alue Naga", 
                "Vegetasi": 31.6,
                "Bangunan": 25,
                "KlasifikasiVegetasi": "Kurang Baik",
                "KlasifikasiBangunan": "Kurang Baik",
                "JenisVegetasi": "Mangrove, Kelapa, Nipah, Cemara",
                "JenisBangunan": "Jetty, Groins"
            } 
        }
    ]
}