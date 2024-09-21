 // Initialize the map with a higher zoom level
 var map = L.map('map').setView([40, 10], 2.5);  // Zoom in closer to the center

 // Add base tile layer (OpenStreetMap)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map);

 // Import/Export Data for Countries with values
 var countryData = {
// Countries with both Export and Import data
"United States of America": { export: 301994.64, import: 269464.04 },
"United Arab Emirates": { export: 191116.68, import: 249406.12 },
"China": { export: 77305.39, import: 753372.99 },
"Germany": { export: 61809.04, import: 151402 },
"Singapore": { export: 142559.92, import: 141293.07 },
"Indonesia": { export: 50335.77, import: 133701.35 },
"Japan": { export: 44623.21, import: 129698.96 },
"Malaysia": { export: 43059.92, import: 79815.37 },
"South Korea": { export: 39526.59, import: 162379.07 },
"France": { export: 48480.2, import: 62446.5 },

// Countries with only Export data
"Netherlands": { export: 119029.53 },
"United Kingdom": { export: 66651.35 },
"Saudi Arabia": { export: 66432.1 },
"South Africa": { export: 54971.84 },
"Nepal": { export: 51799.65 },
"Italy": { export: 48383.08 },
"Turkey": { export: 47911.78 },
"Brazil": { export: 46411.64 },
"Bangladesh": { export: 43753.79 },
"Sri Lanka": { export: 37475.85 },

// Countries with only Import data
"Iraq": { import: 305386.23 },
"Russia": { import: 176270.37 },
"Qatar": { import: 163290.64 },
"Kuwait": { import: 148678.73 },
"Nigeria": { import: 141915.79 },
"Australia": { import: 135230.6 },
"Iran": { import: 91826.39 },
"Hong Kong": { import: 88633.82 },
"Venezuela": { import: 84937.73 }
};


 // Helper function to create a tooltip near the cursor
 function createTooltip(countryName, countryInfo, latlng) {
     var content = '<div class="custom-tooltip">';
     content += countryName + '<br>';

     // Check if both import and export data are available
     if (countryInfo.export && countryInfo.import) {
         content += 'Export: ' + countryInfo.export + ' USD<br>';
         content += 'Import: ' + countryInfo.import + ' USD';
     } else if (countryInfo.export) {
         content += 'Export: ' + countryInfo.export + ' USD';
     } else if (countryInfo.import) {
         content += 'Import: ' + countryInfo.import + ' USD';
     }
     content += '</div>';

     var tooltip = L.tooltip({
         permanent: false,
         direction: 'top',
         className: 'leaflet-tooltip',
         offset: [0, -10]
     })
     .setContent(content)
     .setLatLng(latlng);

     return tooltip;
 }

 // Load GeoJSON data for countries (world borders)
 // Load GeoJSON data for countries (world borders)
fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
.then(response => response.json())
.then(geoData => {
 L.geoJSON(geoData, {
     style: function(feature) {
         var countryName = feature.properties.ADMIN;
         
         // Check if the country has import/export data
         if (countryData[countryName]) {
             var countryInfo = countryData[countryName];

             // Style for countries with both import and export data
             if (countryInfo.export && countryInfo.import) {
                 return {
                     fillColor: '#FFD700', // Unified color for countries with both import and export
                     fillOpacity: 0.7,
                     color: 'gray', // Outline color for countries with import/export
                     weight: 1 // Thickness for countries with import/export
                 };
             } else if (countryInfo.export) {
                 return {
                     fillColor: '#06D001', // Color for export
                     fillOpacity: 0.7,
                     color: 'gray', // Outline color for countries with export
                     weight: 1
                 };
             } else if (countryInfo.import) {
                 return {
                     fillColor: '#FF0000', // Color for import
                     fillOpacity: 0.7,
                     color: 'gray', // Outline color for countries with import
                     weight: 1
                 };
             }
         } else {
             // Default style for countries without import/export data
             return {
                 fillColor: '#ccc', // Default country color (light gray)
                 fillOpacity: 0.5,
                 color: 'black', // New outline color for countries without import/export
                 weight: 0.5 // Reduced outline thickness for countries without import/export
             };
         }
     },
     onEachFeature: function(feature, layer) {
         var countryName = feature.properties.ADMIN;

         // Tooltip for countries with data
         if (countryData[countryName]) {
             var countryInfo = countryData[countryName];
             var content = countryName + '<br>';
             
             // Display import/export values in the tooltip
             if (countryInfo.export && countryInfo.import) {
                 content += 'Export: ' + countryInfo.export + ' USD<br>';
                 content += 'Import: ' + countryInfo.import + ' USD';
             } else if (countryInfo.export) {
                 content += 'Export: ' + countryInfo.export + ' USD';
             } else if (countryInfo.import) {
                 content += 'Import: ' + countryInfo.import + ' USD';
             }

             layer.bindTooltip(content, { permanent: false, direction: 'top' });
         } else {
             // Tooltip for countries without data
             layer.bindTooltip(countryName + ': No data');
         }
     }
 }).addTo(map);
});