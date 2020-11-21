var Africa2008 = 1028;
var Africa2018 = 1041.9;
var SAmerica2008 = 1132.6;
var SAmerica2018 = 1261.5;
var Europe2008 = 4965.7;
var Europe2018 = 4209.3;
var NAmerica2008 = 6600.4;
var NAmerica2018 = 6035.6;
var Asia2008 = 12954.7;
var Asia2018 = 16274.1;
var Australia2008 = 1993;
var Australia2018 = 2100.5;
////////////////
var total: number=Africa2018 + SAmerica2018 + Europe2018 + NAmerica2018 + Asia2018 + Australia2018;
///////////////
console.log('Die Emission von Afrika ist' + Africa2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + ((Africa2018/ total) * 100).toFixed(1) + '%')
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um XX% verändert')
console.log('2018 im Vergleich zu 2008 sind das' + (Africa2018 - Africa2008) + 'kg CO2')
///////////
console.log('Die Emission von Afrika ist' + SAmerica2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + ((SAmerica2018/total) * 100).toFixed(1) + '%')
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um' + (100*(SAmerica2018/SAmerica2008) - 100).toFixed(1) + '% verändert')
console.log('2018 im Vergleich zu 2008 sind das' + (SAmerica2018 - SAmerica2008) + 'kg CO2')
///////////
console.log('Die Emission von Afrika ist' + Europe2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + ((Europe2018/total) * 100).toFixed(1) + '%')
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um' + (100*(Europe2008/Europe2018) - 100).toFixed(1) + '% verändert')
console.log('2018 im Vergleich zu 2008 sind das' + (Europe2008 - Europe2018) + 'kg CO2')
///////////
console.log('Die Emission von Afrika ist' + NAmerica2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + ((NAmerica2018/total) * 100).toFixed(1) + '%')
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um' + (100*(NAmerica2008/NAmerica2018) - 100).toFixed(1) + '% verändert')
console.log('2018 im Vergleich zu 2008 sind das' + (NAmerica2008 - NAmerica2018) + 'kg CO2')
///////////
console.log('Die Emission von Afrika ist' + Asia2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + ((Asia2018/total) * 100).toFixed(1) + '%')
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um' + (100*(Asia2018/Asia2008) - 100).toFixed(1) + '% verändert')
console.log('2018 im Vergleich zu 2008 sind das' + (Asia2018 - Asia2008) + 'kg CO2')
///////////
console.log('Die Emission von Afrika ist' + Australia2018 + 'kg CO2');
console.log('Relativ zur Gesamtemission der Welt verursacht Europa damit' + ((Australia2018/total) * 100).toFixed(1) + '%')
console.log('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um' + (100*(Australia2018/Australia2008) - 100).toFixed(1) + '% verändert')
console.log('2018 im Vergleich zu 2008 sind das' + (Australia2018 - Australia2008) + 'kg CO2')