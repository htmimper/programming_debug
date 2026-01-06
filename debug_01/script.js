//<script type="text/javascript">
function toOneDimension( previousValue, currentValue) {
//previousValueは今まで処理していた結果の値, currentValueは今処理している値
return previousValue.concat( currentValue);
}
//concatは配列や文字列を「つなげる」ための命令のため、previousValueとcurrentValueを連結させる指示
var sampleArrayA= [
[ 'A1', 'A2', 'A3' ],
[ 'B1', 'B2', 'B3' ],
[ 'C1', 'C2', 'C3' ]
];
//2次元配列にしている（表のように「行」と「列」を持つ配列）
var sampleArrayB= sampleArrayA.reduce( toOneDimension);
//sampleArrayAの2次元配列の中の配列を順番にくっつけて1次元配列(一列）にまとめている
for ( var counterVar= 0; counterVar< sampleArrayB.length; counterVar++ ) {
    //初期値は0で、０からsampleArrayB.lengthより小さい値の間、1回ごとに+１繰り返す。
    //sampleArrayB.lengthは［'A1', 'A2', 'A3', 'B1', 'B2', 'B3' , 'C1', 'C2', 'C3］の1次元配列で、9つ。
    //counterVarは初期値のため、0，1，2，3，4，5，6，7，8の計9回繰り返す。
document.write( 'sampleArrayB[' +counterVar+']: ' );
    //sampleArrayB の各要素を順番に取り出して表示するため、初期値０から８まで順に繰り返す
document.write( sampleArrayB[counterVar] );
    //counterVarはA1、A２の順でC3まで繰り返す
document.write( '<br/>' );
}
//</script>