console.log(data);
//brake down the types of passes into traces that way colors are different
//include
function buildPlot(){
//Indego 30 Passholder info
  var trace1 = {
    x: ['Q2-19 Indego30','Q3-19 Indego30','Q2-20 Indego30','Q3-20 Indego30'],
    y: [data[0].Q219,data[0].Q319,data[0].Q220,data[0].Q320],
    name: 'Indego 30',
    type: 'bar'
  };
//Indego 365 passholder info 
  var trace2 = {
    x:['Q2-19 Indego365','Q3-19 Indego365','Q2-20 Indego365','Q3-20 Indego365'],
    y:[data[1].Q219,data[1].Q319,data[1].Q220,data[1].Q320],
    name: 'Indego365',
    type: 'bar'
  };
//Day Pass passholder info
  var trace3 ={
    x: ['Q2-19 Day Pass','Q3-19 Day Pass','Q2-20 Day Pass','Q3-20 Day Pass'],
    y: [data[2].Q219,data[2].Q319,data[2].Q220,data[2].Q320],
    name: 'Day Pass',
    type: 'bar'
  };
//IndegoFlex Pass
  var trace4 ={
    x: ['Q2-19 IndegoFlex','Q3-19 IndegoFlex','Q2-20 IndegoFlex','Q3-20 IndegoFlex'],
    y: [data[3].Q219,data[3].Q319,data[3].Q220,data[3].Q320],
    name: 'IndegoFlex',
    type: 'bar'
  };
  var info = [trace1, trace2, trace3, trace4];

  var layout = {title:'Passholder Type Q2 and Q3 2019 v 2020',
  barmode: 'group',
  width: 800,
  height: 600
  };

  Plotly.newPlot('bar', info, layout);
}

buildPlot();

//create Pie charts for Standard v Electric bike

//labels Standard (quarters)
function buildPie1(){
  var trace5 = [{
//values (trips taken standard v electic)
  values: [data[5].Q219, data[5].Q319,data[5].Q220,data[5].Q320],
  labels: ['Quarter 2 2019','Quarter 3 2019','Quarter 2 2020',
  'Quarter 3 2020'],
  hoverinfo: 'label + value',
  type: 'pie'
  }];
//create layout
  var layout = {
  // title: 'Standard bike used 2019 v 2020',
    height: 300,
    width: 350
  };

  // var info1 = [trace5];
//create graph
  Plotly.newPlot("standardPie",trace5, layout);
}
buildPie1();

function buildPie2(){
  var trace6 = [{
  values: [data[6].Q219, data[6].Q319,data[6].Q220,data[6].Q320],
  labels: ['Quarter 2 2019','Quarter 3 2019','Quarter 2 2020',
  'Quarter 3 2020'],
  hoverinfo: 'label + value',
  type: 'pie'
  }];
//create layout
  var layout = {
  // title: 'Electric bike used 2019 v 2020',
    height: 300,
    width: 350
  };
  // var info2 = [trace6];
//create graph
  Plotly.newPlot("electricPie",trace6, layout);
}
buildPie2();

//comparison bar chat between standard & electric
function buildBar(){
  //standard bike trace
  var trace7 = {
    x: ['Q2-19 Standard Bike','Q3-19 Standard Bike','Q2-20 Standard Bike','Q3-20 Standard Bike'],
    y: [data[5].Q219, data[5].Q319,data[5].Q220,data[5].Q320],
    name: 'Standard Bike',
    type: 'bar'
  };
  //electrci bike trace 
  var trace8 = {
    x: ['Q2-19 Electric Bike','Q3-19 Electric Bike','Q2-20 Electric Bike','Q3-20 Electric Bike'],
    y: [data[6].Q219, data[6].Q319,data[6].Q220,data[6].Q320],
    name: 'Electric Bike',
    type: 'bar'
  };

  var info3 = [trace7, trace8];

  var layout = {title:'Bike used Q2 and Q3 2019 v 2020',
  barmode: 'group',
  width: 600,
  height: 500
  };

  Plotly.newPlot('Bike Comp Bar', info3, layout);
}
buildBar();

console.log(data[8].Q319);

function buildBar2(){
  var trace9 = {
    x: ['Q2-19','Q3-19','Q2-20','Q3-20'],
    y: [data[8].Q219, data[8].Q319, data[8].Q220, data[8].Q320],
    name: 'Total Trips', 
    type: 'bar'
  };

  var trace10 = {
    x: ['Q2-19','Q3-19','Q2-20','Q3-20'],
    y: [data[9].Q219,data[9].Q319,data[9].Q220,data[9].Q320],
    name: 'One Way',
    type: 'bar'
  };

  var trace11 = {
    x: ['Q2-19','Q3-19','Q2-20','Q3-20'],
    y: [data[10].Q219,data[10].Q319,data[10].Q220,data[10].Q320],
    name: 'Round Trips',
    type: 'bar'
  };
  
  var layout1 = {barmode: 'group',
  width: 800,
  height: 600
  };

  var info4 = [trace9, trace10, trace11];
  
  Plotly.newPlot("total trips", info4, layout1);
}

buildBar2();