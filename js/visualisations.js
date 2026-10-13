// ========================================
// CHART 1 — DOG ADOPTION RATE CHOROPLETH
// ========================================

vegaEmbed(
  "#map-choropleth",
  "js/map1_choropleth.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 1 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 1:", error);
  });


// ========================================
// CHART 2 — TOTAL ADOPTIONS SYMBOL MAP
// ========================================

vegaEmbed(
  "#map-symbol",
  "js/map2_symbol.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 2 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 2:", error);
  });


// ========================================
// CHART 3 — CAT VS DOG TILE-GRID MAP
// ========================================

vegaEmbed(
  "#map-tile",
  "js/map3_tile.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 3 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 3:", error);
  });


// ========================================
// CHART 4 — ADOPTION RATE HEATMAP
// ========================================

vegaEmbed(
  "#heatmap",
  "js/chart4_heatmap.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 4 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 4:", error);
  });


// ========================================
// CHART 5 — CAT VS DOG DUMBBELL
// ========================================

vegaEmbed(
  "#dumbbell",
  "js/chart5_dumbbell.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 5 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 5:", error);
  });


// ========================================
// CHART 6 — MEDIAN TIME TO ADOPTION
// ========================================

vegaEmbed(
  "#lollipop",
  "js/chart6_lollipop.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 6 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 6:", error);
  });


// ========================================
// CHART 7 — ADOPTION DIFFICULTY SCATTERPLOT
// ========================================

vegaEmbed(
  "#difficulty-scatter",
  "js/chart7_scatter.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 7 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 7:", error);
  });


// ========================================
// CHART 8 — ADOPTION TREND
// ========================================

vegaEmbed(
  "#adoption-trend",
  "js/chart8_trend.json",
  {
    actions: false
  }
)
  .then(function () {
    console.log("Chart 8 loaded successfully.");
  })
  .catch(function (error) {
    console.error("Error loading Chart 8:", error);
  });