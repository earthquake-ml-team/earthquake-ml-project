// Earthquake Dashboard Logic
document.addEventListener('DOMContentLoaded', function() {
    const gd = document.getElementById('dashboard-container');

    // --- DATA PAYLOAD ---
    const data = [
        {
            "hoverinfo": "text",
            "lat": { "dtype": "f8", "bdata": "AAAAAAAAJEAAAAAAAAASwAAAAAAAgEFAAAAAAADAQkAAAAAAAAAAAAAAAAAAwElAAAAAAACAN8AAAAAAAABBQJqZmZmZWURAMzMzMzPzQMA=" },
            "lon": { "dtype": "f8", "bdata": "AAAAAAAgUkAAAAAAAEBTwAAAAAAAYGFAAAAAAACgXsAAAAAAAAAAAJqZmZmZmbm\u002fzczMzMxMR8DNzMzMzIxdwAAAAAAAgFLAZmZmZmbmYkA=" },
            "marker": {
                "color": { "dtype": "f8", "bdata": "PQrXo3A96j8UrkfhehTeP83MzMzMzOQ\u002fAAAAAAAA0D+amZmZmZm5P5qZmZmZmak\u002fZmZmZmZm7j+amZmZmZnhPzMzMzMzM8M\u002fZmZmZmZm1j8=" },
                "colorbar": { "thickness": 20, "ticktext": ["Low", "Medium", "High"], "tickvals": [0, 0.5, 1], "title": { "text": "Risk Level" }, "x": 0.9 },
                "colorscale": [[0.0, "#440154"], [0.1111111111111111, "#482878"], [0.2222222222222222, "#3e4989"], [0.3333333333333333, "#31688e"], [0.4444444444444444, "#26828e"], [0.5555555555555556, "#1f9e89"], [0.6666666666666666, "#35b779"], [0.7777777777777778, "#6ece58"], [0.8888888888888888, "#b5de2b"], [1.0, "#fde725"]],
                "opacity": 0.7,
                "showscale": true,
                "size": 18
            },
            "mode": "markers",
            "name": "Predicted Risk Zones",
            "text": ["\u003cb\u003eCell:\u003c\u002fb\u003e 10.0_72.5\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.82\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e 1", "\u003cb\u003eCell:\u003c\u002fb\u003e -4.5_-77.0\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.47\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e 0", "\u003cb\u003eCell:\u003c\u002fb\u003e 35.0_139.0\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.65\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e 1", "\u003cb\u003eCell:\u003c\u002fb\u003e 37.5_-122.5\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.25\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e -1", "\u003cb\u003eCell:\u003c\u002fb\u003e 0.0_0.0\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.10\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e -1", "\u003cb\u003eCell:\u003c\u002fb\u003e 51.5_-0.1\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.05\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e -1", "\u003cb\u003eCell:\u003c\u002fb\u003e -23.5_-46.6\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.95\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e 2", "\u003cb\u003eCell:\u003c\u002fb\u003e 34.0_-118.2\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.55\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e 0", "\u003cb\u003eCell:\u003c\u002fb\u003e 40.7_-74.0\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.15\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e -1", "\u003cb\u003eCell:\u003c\u002fb\u003e -33.9_151.2\u003cbr\u003e\u003cb\u003eRisk:\u003c\u002fb\u003e 0.35\u003cbr\u003e\u003cb\u003eClass:\u003c\u002fb\u003e -1"],
            "type": "scattermapbox"
        },
        {
            "hoverinfo": "none",
            "lat": { "dtype": "f8", "bdata": "AAAAAAAAJEAAAAAAAAASwAAAAAAAgEFAAAAAAACAN8AAAAAAAABBQA==" },
            "lon": { "dtype": "f8", "bdata": "AAAAAAAgUkAAAAAAAEBTwAAAAAAAYGFAzczMzMxMR8DNzMzMzIxdwA==" },
            "marker": { "color": "white", "size": 14 },
            "mode": "markers+text",
            "name": "Alert Zones (Mag > 6.0)",
            "text": ["⚠️ 7.0–7.9", "⚠️ 6.0–6.9", "⚠️ 7.0–7.9", "⚠️ 8.0+", "⚠️ 6.0–6.9"],
            "textfont": { "color": "white", "size": 12 },
            "textposition": "top center",
            "type": "scattermapbox"
        },
        {
            "hoverinfo": "text",
            "lat": { "dtype": "f8", "bdata": "xSCwcmiJSUBWfa62YtdCQBsv3SQGaUZA4zYawFvANcDnjCjtDfZDQLbz\u002fdR4sUNACKwcWmQbMMAJ+aBns4JIQAK8BRIUPw5ADAIrhxY5M0BfKcsQxxozQKOSOgFNFDNAK\u002faX3ZOHAkBQ\u002fBhz1\u002fIpQLByaJHttEtAseHplbLsSUCsi9toAK9JQJJc\u002fkP6HTNAyAc9m1U\u002fM8DnHafoSI42wMUgsHJoOUVAKA8LtaYpMECR7Xw\u002fNf5LQAisHFpk+0tACD2bVZ9LQkDnjCjtDT4RQPwYc9cS0kVA097gC5MZNMBlGeJYF7caQFmGONbFLRjA3bWEfNDjM0BfB84ZUVocwPVKWYY4VjXAeHqlLEN8PUBiEFg5tAg1wA==" },
            "lon": { "dtype": "f8", "bdata": "+u3rwDlNZsAzxLEubvNRQBdIUPwYw0JAYVRSJ6BZZsB0tRX7y749wF3cRgN442FAIo51cRuxZcCqglFJnTBjQM9m1edqs09AqoJRSZ0YUMBI4XoUrhtQwJqZmZmZGVDA3gIJih+zX0BnRGlv8OlhQNxGA3gLbmRAKjqSy39kZcCoV8oyxPVjQGIQWDm0FFDAjZduEoMeZsA3GsBbICFRwKhXyjLEzWFA\u002fyH99nUsWMDpJjEIrChjwJzEILByKGPA4zYawFvQUUDjx5i7lvBfQLgehetRVmJAaLPqc7U9UcCfq63YX15UwISezarPiWJAObTIdr6XUsD+ZffkYTlgQILix5i7IlHAfoy5awmFWUBVMCqpE\u002fxlwA==" },
            "marker": { "color": "cyan", "opacity": 0.9, "size": 10 },
            "mode": "markers",
            "name": "Live Quakes (Last 48h)",
            "text": ["\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.1\u003cbr\u003eTime: 2026-02-10 02:21", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.2\u003cbr\u003eTime: 2026-02-10 01:53", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.8\u003cbr\u003eTime: 2026-02-09 23:21", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.6\u003cbr\u003eTime: 2026-02-09 23:20", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.1\u003cbr\u003eTime: 2026-02-09 22:31", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.3\u003cbr\u003eTime: 2026-02-09 19:13", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.0\u003cbr\u003eTime: 2026-02-09 18:52", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.5\u003cbr\u003eTime: 2026-02-09 16:09", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.0\u003cbr\u003eTime: 2026-02-09 15:59", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.5\u003cbr\u003eTime: 2026-02-09 13:36", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.3\u003cbr\u003eTime: 2026-02-09 12:08", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.2\u003cbr\u003eTime: 2026-02-09 10:30", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.0\u003cbr\u003eTime: 2026-02-09 08:30", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.5\u003cbr\u003eTime: 2026-02-09 07:06", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.6\u003cbr\u003eTime: 2026-02-09 05:59", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.0\u003cbr\u003eTime: 2026-02-09 05:37", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.3\u003cbr\u003eTime: 2026-02-09 05:09", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.0\u003cbr\u003eTime: 2026-02-09 03:27", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.4\u003cbr\u003eTime: 2026-02-09 03:00", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.2\u003cbr\u003eTime: 2026-02-08 23:17", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.7\u003cbr\u003eTime: 2026-02-08 21:45", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.7\u003cbr\u003eTime: 2026-02-08 21:42", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.4\u003cbr\u003eTime: 2026-02-08 20:45", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.2\u003cbr\u003eTime: 2026-02-08 20:37", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.2\u003cbr\u003eTime: 2026-02-08 19:41", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.4\u003cbr\u003eTime: 2026-02-08 19:18", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.6\u003cbr\u003eTime: 2026-02-08 16:50", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.7\u003cbr\u003eTime: 2026-02-08 16:23", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.6\u003cbr\u003eTime: 2026-02-08 15:41", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.9\u003cbr\u003eTime: 2026-02-08 15:16", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 5.5\u003cbr\u003eTime: 2026-02-08 12:00", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.5\u003cbr\u003eTime: 2026-02-08 10:18", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.2\u003cbr\u003eTime: 2026-02-08 07:25", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.7\u003cbr\u003eTime: 2026-02-08 06:06", "\u003cb\u003eLIVE QUAKE\u003c\u002fb\u003e\u003cbr\u003eMag: 4.5\u003cbr\u003eTime: 2026-02-08 05:26"],
            "type": "scattermapbox"
        }
    ];

    const layout = {
        "template": "plotly_dark",
        "mapbox": {
            "style": "carto-darkmatter",
            "center": { "lat": 20, "lon": 0 },
            "zoom": 1.5
        },
        "margin": { "r": 0, "t": 60, "l": 0, "b": 0 },
        "title": {
            "font": { "size": 24, "color": "white" },
            "text": "🌍 Global Earthquake Risk & Live Monitoring",
            "x": 0.05
        },
        "legend": {
            "yanchor": "top",
            "y": 0.99,
            "xanchor": "left",
            "x": 0.01,
            "bgcolor": "rgba(0,0,0,0.5)"
        },
        "paper_bgcolor": "rgba(0,0,0,0)",
        "plot_bgcolor": "rgba(0,0,0,0)"
    };

    const config = { "responsive": true };

    // Initial render
    Plotly.newPlot(gd, data, layout, config);

    // Dynamic sizing helper
    window.onresize = function() {
        Plotly.Plots.resize(gd);
    };
});
