const apiKey = process.env.MAP_TOKEN;

// Initialize map centered roughly in India by default
const map = new maplibregl.Map({
    container: "map",
    style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${apiKey}`,
    center: [77.209, 28.6139], // New Delhi default center
    zoom: 5,
});

