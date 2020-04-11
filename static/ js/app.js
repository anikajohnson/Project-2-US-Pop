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


/////////////////////////////
// population pyramid plot
//////////////////////////////
// create one frame per year. can we make a function to generate each frame?

// create text array of male population counts 

// create negative array of male population counts 

// create array of female population counts

// create array of y axis values
y_axis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113], 


trace1 = {
    name: 'Male', 
    type: 'bar', 
    xsrc: 'wh00079:1210:cc4e29', 
    x: // [populate with negative array of male population counts], 
    ysrc: 'wh00079:1210:cbd2ca', 
    y: y_axis, 
    marker: {color: 'rgb(99, 110, 250)'}, 
    textsrc: 'wh00079:1210:8cb2ce', 
    text: // [populate with text array of male population counts], 
    hoverinfo: 'text', 
    orientation: 'h'
  };

  trace2 = {
    name: 'Female', 
    type: 'bar', 
    xsrc: 'wh00079:1210:b17567', 
    x: // [populate with array of female population counts],
    ysrc: 'wh00079:1210:c3a199', 
    y: y_axis, 
    marker: {color: 'rgb(230, 99, 250)'}, 
    textsrc: 'wh00079:1210:229ed8', 
    text: // [populate with array of female population counts],
    hoverinfo: 'text', 
    orientation: 'h'
  };

data = [trace1, trace2];
layout = {
  title: 'Population Pyramid of the US', 
  xaxis: {
    range: [-800000.0, 800000.0], 
    title: 'Population', 
    gridcolor: '#FFFFFF'
  }, 
  yaxis: {
    type: 'linear', 
    title: 'Age', 
    gridcolor: '#FFFFFF'
  }, 
  barmode: 'overlay', 

  // put slider array in separate doc?
  sliders: [
    {
      x: 0.1, 
      y: 0, 
      len: 0.9, 
      pad: {
        b: 10, 
        t: 50
      }, 
      steps: [
        {
            args: [
              [1950], {
                mode: 'immediate', 
                frame: {
                  redraw: true, 
                  duration: 300
                }, 
                transition: {duration: 300}
              }
            ], 
            label: 1950, 
            method: 'animate'
          }, 
        {
            args: [
              [1955], {
                mode: 'immediate', 
                frame: {
                  redraw: true, 
                  duration: 300
                }, 
                transition: {duration: 300}
              }
            ], 
            label: 1955, 
            method: 'animate'
          }, 
        {
            args: [
              [1960], {
                mode: 'immediate', 
                frame: {
                  redraw: true, 
                  duration: 300
                }, 
                transition: {duration: 300}
              }
            ], 
            label: 1960, 
            method: 'animate'
          }, 
        {
            args: [
              [1965], {
                mode: 'immediate', 
                frame: {
                  redraw: true, 
                  duration: 300
                }, 
                transition: {duration: 300}
              }
            ], 
            label: 1965, 
            method: 'animate'
          }, 
        {
            args: [
              [1970], {
                mode: 'immediate', 
                frame: {
                  redraw: true, 
                  duration: 300
                }, 
                transition: {duration: 300}
              }
            ], 
            label: 1970, 
            method: 'animate'
          }, 
        {
          args: [
            [1975], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 1975, 
          method: 'animate'
        }, 
        {
          args: [
            [1980], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 1980, 
          method: 'animate'
        }, 
        {
          args: [
            [1985], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 1985, 
          method: 'animate'
        }, 
        {
          args: [
            [1990], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 1990, 
          method: 'animate'
        }, 
        {
          args: [
            [1995], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 1995, 
          method: 'animate'
        }, 
        {
          args: [
            [2000], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 2000, 
          method: 'animate'
        }, 
        {
          args: [
            [2005], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 2005, 
          method: 'animate'
        }, 
        {
          args: [
            [2010], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 2010, 
          method: 'animate'
        }, 
        {
          args: [
            [2015], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 2015, 
          method: 'animate'
        }, 
        {
          args: [
            [2020], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 300
              }, 
              transition: {duration: 300}
            }
          ], 
          label: 2020, 
          method: 'animate'
        }, 
      ], 
      active: 0, 
      xanchor: 'left', 
      yanchor: 'top', 
      transition: {
        easing: 'cubic-in-out', 
        duration: 300
      }, 
      currentvalue: {
        font: {size: 20}, 
        prefix: 'Year:', 
        visible: true, 
        xanchor: 'right'
      }
    }
  ], 
  hovermode: 'closest', 
  updatemenus: [
    {
      x: 0.1, 
      y: 0, 
      pad: {
        r: 10, 
        t: 87
      }, 
      type: 'buttons', 
      buttons: [
        {
          args: [null, {
            frame: {
              redraw: true, 
              duration: 500
            }, 
            transition: {
              easing: 'quadratic-in-out', 
              duration: 300
            }, 
            fromcurrent: true
          }
          ], 
          label: 'Play', 
          method: 'animate'
        }, 
        {
          args: [
            [null], {
              mode: 'immediate', 
              frame: {
                redraw: true, 
                duration: 0
              }, 
              transition: {duration: 0}
            }
          ], 
          label: 'Pause', 
          method: 'animate'
        }
      ], 
      xanchor: 'right', 
      yanchor: 'top', 
      direction: 'left', 
      showactive: false
    }
  ], 
  plot_bgcolor: 'rgb(223, 232, 243)'
};