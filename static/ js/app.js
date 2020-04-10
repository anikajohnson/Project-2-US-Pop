// /////////////////////////////// 
// Metadata Display Starter Code 
//////////////////////////////////

// Stub - test to confirm that you called it
function ShowMetadata(year)
{
    // name of function and parameter called
    console.log(`Calling ShowMetadata(${yearId})`);

     // call data
    /////// rename json file
    d3.json("samples.json").then((data) => {


        var metadata = data.metadata;
        var resultArray = metadata.filter(md => md.id == yearId);
        var result = resultArray[0];

        var PANEL = d3.select("#sample-metadata");
        // clear old metadata
        PANEL.html("");

        Object.entries(result).forEach(([key, value]) => {
            // flesh out with html f string
            var textToShow = `${key}:  ${value}` ;

            PANEL.append("h6").text(textToShow);
        });
    });
}


// Eventhandler Stub
function optionChanged(newYearId)
{
    // test if eventhandler is working
    console.log(`User selected ${newYearId}`)

    // call functions 
    ShowMetadata(newYearId);

}

function InitDashboard()
{
    console.log("Initializing Dashboard");

    // find selector
    var selector = d3.select("#selDataset");

    // populate selector
    ////// rename json file
    d3.json("samples.json").then((data) => {

        // test if data loads
        console.log(data);
        
    // populate dropdown box
        var yearIdValues = data.year;
        
        // for each year, 
        yearIdValues.forEach((yearId) => {
            //
            selector.append("option")
                .text(year)
                // set value property to be year
                .property("value", yearId);
        });
        
        var yearId = yearValues[0];

        // call functions 
        ShowMetadata(yearId);

    });
}

InitDashboard();