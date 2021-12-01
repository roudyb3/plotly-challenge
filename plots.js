// get an index out of the rows of data from sample.json
function unpack(rows, index) {
    return rows.map(function(row) {
        return row[index];
    });
}

function buildPlot (data) {
    d3.json("data/samples.json").then(function(data) {
        console.log(data)
    
    //grab values from the data json object
    var names = data.names;
    console.log(names)
    var samples = data.samples;
    console.log(samples)
    var resultsArray = samples.filter(samples_data.id == data);
    var result = resultsArray [0];
    console.log(result)

    var otuLabels = result.otu_labels;
    console.log(otuLabels)
    var otuIds = result.otu_ids;
    console.log(otuIds)
    var sampleValues = result.sample_values;


    var barData = {
        x: sampleValues.slice(0,10).reverse(),
        y: otuIds.slice(0, 10).map(otu_ids => 'OTU ${otuIds}').reverse(),
        text: otuLabels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h",
    };

    Plotly.newPlot("bar", [barData], barLayout)

})

}
;