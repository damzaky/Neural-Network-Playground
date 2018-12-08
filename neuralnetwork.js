var x10=document.getElementById('x10')
var x11=document.getElementById('x11')
var x12=document.getElementById('x12')
var x13=document.getElementById('x13')
var x20=document.getElementById('x20')
var x21=document.getElementById('x21')
var x22=document.getElementById('x22')
var x23=document.getElementById('x23')

var h10=document.getElementById('h10')
var h11=document.getElementById('h11')
var h12=document.getElementById('h12')
var h13=document.getElementById('h13')
var h20=document.getElementById('h20')
var h21=document.getElementById('h21')
var h22=document.getElementById('h22')
var h23=document.getElementById('h23')
var h30=document.getElementById('h30')
var h31=document.getElementById('h31')
var h32=document.getElementById('h32')
var h33=document.getElementById('h33')

var y10=document.getElementById('y10')
var y11=document.getElementById('y11')
var y12=document.getElementById('y12')
var y13=document.getElementById('y13')
var y20=document.getElementById('y20')
var y21=document.getElementById('y21')
var y22=document.getElementById('y22')
var y23=document.getElementById('y23')

var x0h0 =document.getElementById('x0h0')
var x0h1 =document.getElementById('x0h1')
var x0h2 =document.getElementById('x0h2')
var x1h0 =document.getElementById('x1h0')
var x1h1 =document.getElementById('x1h1')
var x1h2 =document.getElementById('x1h2')
var h0y0 =document.getElementById('h0y0')
var h0y1 =document.getElementById('h0y1')
var h1y0 =document.getElementById('h1y0')
var h1y1 =document.getElementById('h1y1')

var tx0h0 =document.getElementById('tx0h0')
var tx0h1 =document.getElementById('tx0h1')
var tx0h2 =document.getElementById('tx0h2')
var tx1h0 =document.getElementById('tx1h0')
var tx1h1 =document.getElementById('tx1h1')
var tx1h2 =document.getElementById('tx1h2')
var th0y0 =document.getElementById('th0y0')
var th0y1 =document.getElementById('th0y1')
var th1y0 =document.getElementById('th1y0')
var th1y1 =document.getElementById('th1y1')

var tx10=document.getElementById('tx10')
var tx20=document.getElementById('tx20')

var th10=document.getElementById('th10')
var th20=document.getElementById('th20')
var th30=document.getElementById('th30')

var ty10=document.getElementById('ty10')
var ty20=document.getElementById('ty20')


var x00m=document.getElementById('x00m')
var x01m=document.getElementById('x01m')
var x02m=document.getElementById('x02m')
var x03m=document.getElementById('x03m')
var x10m=document.getElementById('x10m')
var x11m=document.getElementById('x11m')
var x12m=document.getElementById('x12m')
var x13m=document.getElementById('x13m')

var w100m=document.getElementById('w100m')
var w101m=document.getElementById('w101m')
var w110m=document.getElementById('w110m')
var w111m=document.getElementById('w111m')
var w120m=document.getElementById('w120m')
var w121m=document.getElementById('w121m')

var h00m=document.getElementById('h00m')
var h01m=document.getElementById('h01m')
var h02m=document.getElementById('h02m')
var h03m=document.getElementById('h03m')
var h10m=document.getElementById('h10m')
var h11m=document.getElementById('h11m')
var h12m=document.getElementById('h12m')
var h13m=document.getElementById('h13m')
var h20m=document.getElementById('h20m')
var h21m=document.getElementById('h21m')
var h22m=document.getElementById('h22m')
var h23m=document.getElementById('h23m')

var w200m=document.getElementById('w200m')
var w201m=document.getElementById('w201m')
var w202m=document.getElementById('w202m')
var w210m=document.getElementById('w210m')
var w211m=document.getElementById('w211m')
var w212m=document.getElementById('w212m')

var y00m=document.getElementById('y00m')
var y01m=document.getElementById('y01m')
var y02m=document.getElementById('y02m')
var y03m=document.getElementById('y03m')
var y10m=document.getElementById('y10m')
var y11m=document.getElementById('y11m')
var y12m=document.getElementById('y12m')
var y13m=document.getElementById('y13m')

var y1=document.getElementById('y1')
var y2=document.getElementById('y2')
var y3=document.getElementById('y3')
var y4=document.getElementById('y4')

var r1x1=document.getElementById('r1x1')
var r1x2=document.getElementById('r1x2')
var r1y=document.getElementById('r1y')
var r2x1=document.getElementById('r2x1')
var r2x2=document.getElementById('r2x2')
var r2y=document.getElementById('r2y')
var r3x1=document.getElementById('r3x1')
var r3x2=document.getElementById('r3x2')
var r3y=document.getElementById('r3y')
var r4x1=document.getElementById('r4x1')
var r4x2=document.getElementById('r4x2')
var r4y=document.getElementById('r4y')

var xy10=document.getElementById('xy10')
var xy11=document.getElementById('xy11')
var xy12=document.getElementById('xy12')
var xy13=document.getElementById('xy13')
var xy20=document.getElementById('xy20')
var xy21=document.getElementById('xy21')
var xy22=document.getElementById('xy22')
var xy23=document.getElementById('xy23')

var exy1=document.getElementById('exy1')
var exy2=document.getElementById('exy2')
var exy3=document.getElementById('exy3')
var exy4=document.getElementById('exy4')

var alph=document.getElementById('alph')
var epochz=document.getElementById('epoch')
var hneu=document.getElementById('hneu')

// var x2=document.getElementById('x2')
// var w1=document.getElementById('w1')
// var h1=document.getElementById('h1')
// var h2=document.getElementById('h2')
// var h3=document.getElementById('h3')
// var w2=document.getElementById('w2')
// var y1=document.getElementById('y1')
// var y2=document.getElementById('y2')

// window.requestAnimationFrame = window.requestAnimationFrame
//     || window.mozRequestAnimationFrame
//     || window.webkitRequestAnimationFrame
//     || window.msRequestAnimationFrame
//     || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60
//
// window.cancelAnimationFrame = window.cancelAnimationFrame
//     || window.mozCancelAnimationFrame
//     || function(requestID){clearTimeout(requestID)} //fall back

var lay1, lay2, error2, layer_2_derivato, layer_2_delta, error1, layer_1_derivato, layer_1_delta, W2U, W1U, X, exY, W1, W2, lastFrameTimeMs, maxFPS,delta,timestep
var hidden_neurons = parseFloat(hneu.value)
var alpha = parseFloat(alph.value)
var epoch = parseFloat(epochz.value)
timestep = 1000 / 60
maxFPS = 60
delta = 0
lastFrameTimeMs = 0
function rand(){
    return (Math.random()*2)-1
}

function init(){
    i=0




    X=math.matrix([
        [parseFloat(r1x1.value), parseFloat(r1x2.value)],
        [parseFloat(r2x1.value), parseFloat(r2x2.value)],
        [parseFloat(r3x1.value), parseFloat(r3x2.value)],
        [parseFloat(r4x1.value), parseFloat(r4x2.value)]
    ])
    exY=math.matrix([
        [r1y.value == 0 ? 0 : 1, r1y.value == 1 ? 0 : 1],
        [r2y.value == 0 ? 0 : 1, r2y.value == 1 ? 0 : 1],
        [r3y.value == 0 ? 0 : 1, r3y.value == 1 ? 0 : 1],
        [r4y.value == 0 ? 0 : 1, r4y.value == 1 ? 0 : 1]
    ])
    W1=math.zeros(X.size()[1], hidden_neurons)
    W2=math.zeros(hidden_neurons, exY.size()[1])

    W1 = W1.map(function (value, index, matrix) {
      return rand()
    })
    W2 = W2.map(function (value, index, matrix) {
      return rand()
    })
}

init()

x10.textContent = X.get([0,0])
x11.textContent = X.get([1,0])
x12.textContent = X.get([2,0])
x13.textContent = X.get([3,0])
x20.textContent = X.get([0,1])
x21.textContent = X.get([1,1])
x22.textContent = X.get([2,1])
x23.textContent = X.get([3,1])

x00m.innerHTML = X.get([0,0]).toFixed(2)
x01m.innerHTML = X.get([1,0]).toFixed(2)
x02m.innerHTML = X.get([2,0]).toFixed(2)
x03m.innerHTML = X.get([3,0]).toFixed(2)
x10m.innerHTML = X.get([0,1]).toFixed(2)
x11m.innerHTML = X.get([1,1]).toFixed(2)
x12m.innerHTML = X.get([2,1]).toFixed(2)
x13m.innerHTML = X.get([3,1]).toFixed(2)

r1y.innerHTML=r1y.value
r2y.innerHTML=r2y.value
r3y.innerHTML=r3y.value
r4y.innerHTML=r4y.value

xy10.textContent = exY.get([0,0])
xy11.textContent = exY.get([1,0])
xy12.textContent = exY.get([2,0])
xy13.textContent = exY.get([3,0])
xy20.textContent = exY.get([0,1])
xy21.textContent = exY.get([1,1])
xy22.textContent = exY.get([2,1])
xy23.textContent = exY.get([3,1])

if(exY.get([0,0])<exY.get([0,1])){
    xy10.setAttribute("fill", "#999")
    xy20.setAttribute("fill", "#fff")
}else{
    xy20.setAttribute("fill", "#999")
    xy10.setAttribute("fill", "#fff")
}
if(exY.get([1,0])<exY.get([1,1])){
    xy11.setAttribute("fill", "#999")
    xy21.setAttribute("fill", "#fff")
}else{
    xy21.setAttribute("fill", "#999")
    xy11.setAttribute("fill", "#fff")
}
if(exY.get([2,0])<exY.get([2,1])){
    xy12.setAttribute("fill", "#999")
    xy22.setAttribute("fill", "#fff")
}else{
    xy22.setAttribute("fill", "#999")
    xy12.setAttribute("fill", "#fff")
}
if(exY.get([3,0])<exY.get([3,1])){
    xy13.setAttribute("fill", "#999")
    xy23.setAttribute("fill", "#fff")
}else{
    xy23.setAttribute("fill", "#999")
    xy13.setAttribute("fill", "#fff")
}

exy1.textContent = exY.get([0,0])
exy2.textContent = exY.get([1,0])
exy3.textContent = exY.get([2,0])
exy4.textContent = exY.get([3,0])

function datachange(){
    X=math.matrix([
        [parseFloat(r1x1.value), parseFloat(r1x2.value)],
        [parseFloat(r2x1.value), parseFloat(r2x2.value)],
        [parseFloat(r3x1.value), parseFloat(r3x2.value)],
        [parseFloat(r4x1.value), parseFloat(r4x2.value)]
    ])
    exY=math.matrix([
        [r1y.value == 0 ? 0 : 1, r1y.value == 1 ? 0 : 1],
        [r2y.value == 0 ? 0 : 1, r2y.value == 1 ? 0 : 1],
        [r3y.value == 0 ? 0 : 1, r3y.value == 1 ? 0 : 1],
        [r4y.value == 0 ? 0 : 1, r4y.value == 1 ? 0 : 1]
    ])
    x10.textContent = X.get([0,0])
    x11.textContent = X.get([1,0])
    x12.textContent = X.get([2,0])
    x13.textContent = X.get([3,0])
    x20.textContent = X.get([0,1])
    x21.textContent = X.get([1,1])
    x22.textContent = X.get([2,1])
    x23.textContent = X.get([3,1])

    x00m.innerHTML = X.get([0,0]).toFixed(2)
    x01m.innerHTML = X.get([1,0]).toFixed(2)
    x02m.innerHTML = X.get([2,0]).toFixed(2)
    x03m.innerHTML = X.get([3,0]).toFixed(2)
    x10m.innerHTML = X.get([0,1]).toFixed(2)
    x11m.innerHTML = X.get([1,1]).toFixed(2)
    x12m.innerHTML = X.get([2,1]).toFixed(2)
    x13m.innerHTML = X.get([3,1]).toFixed(2)

    r1y.innerHTML=r1y.value
    r2y.innerHTML=r2y.value
    r3y.innerHTML=r3y.value
    r4y.innerHTML=r4y.value

    xy10.textContent = exY.get([0,0])
    xy11.textContent = exY.get([1,0])
    xy12.textContent = exY.get([2,0])
    xy13.textContent = exY.get([3,0])
    xy20.textContent = exY.get([0,1])
    xy21.textContent = exY.get([1,1])
    xy22.textContent = exY.get([2,1])
    xy23.textContent = exY.get([3,1])

    if(exY.get([0,0])<exY.get([0,1])){
        xy10.setAttribute("fill", "#999")
        xy20.setAttribute("fill", "#fff")
    }else{
        xy20.setAttribute("fill", "#999")
        xy10.setAttribute("fill", "#fff")
    }
    if(exY.get([1,0])<exY.get([1,1])){
        xy11.setAttribute("fill", "#999")
        xy21.setAttribute("fill", "#fff")
    }else{
        xy21.setAttribute("fill", "#999")
        xy11.setAttribute("fill", "#fff")
    }
    if(exY.get([2,0])<exY.get([2,1])){
        xy12.setAttribute("fill", "#999")
        xy22.setAttribute("fill", "#fff")
    }else{
        xy22.setAttribute("fill", "#999")
        xy12.setAttribute("fill", "#fff")
    }
    if(exY.get([3,0])<exY.get([3,1])){
        xy13.setAttribute("fill", "#999")
        xy23.setAttribute("fill", "#fff")
    }else{
        xy23.setAttribute("fill", "#999")
        xy13.setAttribute("fill", "#fff")
    }

    exy1.textContent = exY.get([0,0])
    exy2.textContent = exY.get([1,0])
    exy3.textContent = exY.get([2,0])
    exy4.textContent = exY.get([3,0])

    hidden_neurons = parseFloat(hneu.value)
    alpha = parseFloat(alph.value)
    epoch = parseFloat(epochz.value)
}
r1x1.onkeyup = function() {
    datachange()
};
r1x2.onkeyup = function() {
    datachange()
};
r2x1.onkeyup = function() {
    datachange()
};
r2x2.onkeyup = function() {
    datachange()
};
r3x1.onkeyup = function() {
    datachange()
};
r3x2.onkeyup = function() {
    datachange()
};
r4x1.onkeyup = function() {
    datachange()
};
r4x2.onkeyup = function() {
    datachange()
};
r1y.onkeyup = function() {
    datachange()
};
r2y.onkeyup = function() {
    datachange()
};
r3y.onkeyup = function() {
    datachange()
};
r4y.onkeyup = function() {
    datachange()
};
alph.onkeyup = function() {
    datachange()
};
epochz.onkeyup = function() {
    datachange()
};
hneu.onkeyup = function() {
    datachange()
};

// console.log(W1)
// console.log(W2)
// W1=math.matrix([
//     [-0.16595599,  0.44064899, -0.99977125],
//     [-0.39533485, -0.70648822, -0.81532281]
// ])
// W2=math.matrix([
//     [-0.62747958, -0.30887855],
//     [-0.20646505,  0.07763347],
//     [-0.16161097,  0.370439]
// ])
// x10.innerHTML = X.format()
// console.log(typeof(X.format()))

// x0h0.style.strokeWidth=W1.get([0,0]);
// x0h1.style.strokeWidth=W1.get([0,1]);
// x0h2.style.strokeWidth=W1.get([0,2]);
// x1h0.style.strokeWidth=W1.get([1,0]);
// x1h1.style.strokeWidth=W1.get([1,1]);
// x1h2.style.strokeWidth=W1.get([1,2]);
// h0y0.style.strokeWidth=W2.get([0,0]);
// h0y1.style.strokeWidth=W2.get([0,1]);
// h1y0.style.strokeWidth=W2.get([1,0]);
// h1y1.style.strokeWidth=W2.get([1,1]);
// h2y0.style.strokeWidth=W2.get([2,0]);
// h2y1.style.strokeWidth=W2.get([2,1]);

// w1.innerHTML = W1.format()
// h1.innerHTML = math.multiply(X,W1).format()
// w2.innerHTML = W2.format()
// y1.innerHTML = exY.format()

// var prev_synapse_0_weight_update = math.zeros(W1.size()[0],W1.size()[1])
// var prev_synapse_1_weight_update = math.zeros(W2.size()[0],W2.size()[1])
//
// var synapse_0_direction_count = math.zeros(W1.size()[0],W1.size()[1])
// var synapse_1_direction_count = math.zeros(W2.size()[0],W2.size()[1])

function sigmoid(x){
    return 1/(1+math.exp(-x))
}
function derivato(x){
    return x*(1-x)
}

var req
var te = document.getElementById('test');
var epoh = document.getElementById('epoh');
var mini2,minro2,mini1,minro1,small
function update(){
    lay1=math.multiply(X,W1)

    lay1 = lay1.map(function (value, index, matrix) {
      return sigmoid(value)
    })

    lay2=math.multiply(lay1,W2)

    lay2 = lay2.map(function (value, index, matrix) {
      return sigmoid(value)
    })


    error2=math.subtract(exY, lay2)
    //UDAH OK SAMPE SINI
    /*BACKPROPAGATE!!*/

    layer_2_derivato = lay2.map(function (value, index, matrix) {
      return derivato(value)
    })

    layer_2_delta = math.dotMultiply(error2,layer_2_derivato)
    // console.log('delta',layer_2_delta) DAH OK
    error1=math.multiply(layer_2_delta,math.transpose(W2))
    // console.log('error1',error1) DAH OK
    layer_1_derivato = lay1.map(function (value, index, matrix) {
      return derivato(value)
    })

    layer_1_delta = math.dotMultiply(error1,layer_1_derivato)
    // console.log('delta',layer_1_delta) DAH OK
    W2U = math.multiply(math.transpose(lay1),layer_2_delta)
    W1U = math.multiply(math.transpose(X),layer_1_delta)
    // console.log('W2U',W2U)
    // console.log('W1U',W1U) DAH OK

    W2UT = W2U.map(function (value, index, matrix) {
      return value*alpha
    })
    W2=math.add(W2, W2UT)

    W1UT = W1U.map(function (value, index, matrix) {
      return value*alpha
    })
    W1=math.add(W1, W1UT)

    // console.log('W2',W2)
    // console.log('W1',W1) DAH OK!
    // console.log(i)
    epoh.innerHTML = i+1
    i++

    // wzc0m.innerHTML = W1.get([0,0]).toFixed(4)
    // wzc1m.innerHTML = W1.get([0,0]).toFixed(4)
    // wzc0m.innerHTML = W1.get([0,0]).toFixed(4)
    // wzc1m.innerHTML = W1.get([0,0]).toFixed(4)
    // wzc0m.innerHTML = W1.get([0,0]).toFixed(4)
    // wzc1m.innerHTML = W1.get([0,0]).toFixed(4)

    w100m.innerHTML = W1.get([0,0]).toFixed(2)
    w110m.innerHTML = W1.get([0,1]).toFixed(2)
    w120m.innerHTML = W1.get([0,2]).toFixed(2)
    w101m.innerHTML = W1.get([1,0]).toFixed(2)
    w111m.innerHTML = W1.get([1,1]).toFixed(2)
    w121m.innerHTML = W1.get([1,2]).toFixed(2)

    h00m.innerHTML = lay1.get([0,2]).toFixed(2)
    h01m.innerHTML = lay1.get([1,2]).toFixed(2)
    h02m.innerHTML = lay1.get([2,2]).toFixed(2)
    h03m.innerHTML = lay1.get([3,2]).toFixed(2)
    h10m.innerHTML = lay1.get([0,0]).toFixed(2)
    h11m.innerHTML = lay1.get([1,0]).toFixed(2)
    h12m.innerHTML = lay1.get([2,0]).toFixed(2)
    h13m.innerHTML = lay1.get([3,0]).toFixed(2)
    h20m.innerHTML = lay1.get([0,1]).toFixed(2)
    h21m.innerHTML = lay1.get([1,1]).toFixed(2)
    h22m.innerHTML = lay1.get([2,1]).toFixed(2)
    h23m.innerHTML = lay1.get([3,1]).toFixed(2)

    w200m.innerHTML = W2.get([0,0]).toFixed(2)
    w210m.innerHTML = W2.get([0,1]).toFixed(2)
    w201m.innerHTML = W2.get([1,0]).toFixed(2)
    w211m.innerHTML = W2.get([1,1]).toFixed(2)
    w202m.innerHTML = W2.get([2,0]).toFixed(2)
    w212m.innerHTML = W2.get([2,1]).toFixed(2)

    y00m.innerHTML = lay2.get([0,0]).toFixed(2)
    y01m.innerHTML = lay2.get([1,0]).toFixed(2)
    y02m.innerHTML = lay2.get([2,0]).toFixed(2)
    y03m.innerHTML = lay2.get([3,0]).toFixed(2)
    y10m.innerHTML = lay2.get([0,1]).toFixed(2)
    y11m.innerHTML = lay2.get([1,1]).toFixed(2)
    y12m.innerHTML = lay2.get([2,1]).toFixed(2)
    y13m.innerHTML = lay2.get([3,1]).toFixed(2)

    te.innerHTML = math.mean(math.abs(error2))
    // w1.innerHTML = W1.format()
    // h1.innerHTML = lay1.format()
    // w2.innerHTML = W2.format()
    // y1.innerHTML = lay2.format()

    h10.textContent = lay1.get([0,0]).toFixed(4)
    h11.textContent = lay1.get([1,0]).toFixed(4)
    h12.textContent = lay1.get([2,0]).toFixed(4)
    h13.textContent = lay1.get([3,0]).toFixed(4)
    h20.textContent = lay1.get([0,1]).toFixed(4)
    h21.textContent = lay1.get([1,1]).toFixed(4)
    h22.textContent = lay1.get([2,1]).toFixed(4)
    h23.textContent = lay1.get([3,1]).toFixed(4)
    h30.textContent = lay1.get([0,2]).toFixed(4)
    h31.textContent = lay1.get([1,2]).toFixed(4)
    h32.textContent = lay1.get([2,2]).toFixed(4)
    h33.textContent = lay1.get([3,2]).toFixed(4)

    y10.textContent = lay2.get([0,0]).toFixed(4)
    y11.textContent = lay2.get([1,0]).toFixed(4)
    y12.textContent = lay2.get([2,0]).toFixed(4)
    y13.textContent = lay2.get([3,0]).toFixed(4)
    y20.textContent = lay2.get([0,1]).toFixed(4)
    y21.textContent = lay2.get([1,1]).toFixed(4)
    y22.textContent = lay2.get([2,1]).toFixed(4)
    y23.textContent = lay2.get([3,1]).toFixed(4)

    y1.innerHTML = lay2.get([0,0])<lay2.get([0,1]) ? 0 : 1
    y2.innerHTML = lay2.get([1,0])<lay2.get([1,1]) ? 0 : 1
    y3.innerHTML = lay2.get([2,0])<lay2.get([2,1]) ? 0 : 1
    y4.innerHTML = lay2.get([3,0])<lay2.get([3,1]) ? 0 : 1

    if(lay2.get([0,0])<lay2.get([0,1])){
        y10.setAttribute("fill", "#999")
        y20.setAttribute("fill", "#fff")
    }else{
        y20.setAttribute("fill", "#999")
        y10.setAttribute("fill", "#fff")
    }
    if(lay2.get([1,0])<lay2.get([1,1])){
        y11.setAttribute("fill", "#999")
        y21.setAttribute("fill", "#fff")
    }else{
        y21.setAttribute("fill", "#999")
        y11.setAttribute("fill", "#fff")
    }
    if(lay2.get([2,0])<lay2.get([2,1])){
        y12.setAttribute("fill", "#999")
        y22.setAttribute("fill", "#fff")
    }else{
        y22.setAttribute("fill", "#999")
        y12.setAttribute("fill", "#fff")
    }
    if(lay2.get([3,0])<lay2.get([3,1])){
        y13.setAttribute("fill", "#999")
        y23.setAttribute("fill", "#fff")
    }else{
        y23.setAttribute("fill", "#999")
        y13.setAttribute("fill", "#fff")
    }


    // lay2.get([0,0])<lay2.get([0,1]) ? y10.setAttribute("fill", "#999") : y20.setAttribute("fill", "#999")
    // lay2.get([1,0])<lay2.get([1,1]) ? y11.setAttribute("fill", "#999") : y21.setAttribute("fill", "#999")
    // lay2.get([2,0])<lay2.get([2,1]) ? y12.setAttribute("fill", "#999") : y22.setAttribute("fill", "#999")
    // lay2.get([3,0])<lay2.get([3,1]) ? y13.setAttribute("fill", "#999") : y23.setAttribute("fill", "#999")

    minro1 = W1.valueOf().map(function(row){ return Math.min.apply(Math, row); });
    mini1 = Math.min.apply(null, minro1);
    minro2 = W2.valueOf().map(function(row){ return Math.min.apply(Math, row); });
    mini2 = Math.min.apply(null, minro2);
    // console.log('miniw1',mini1)
    // console.log('miniw2',mini2)
    small = Math.abs(Math.min(mini1,mini2))+0.5
    // console.log('small',small)
    // console.log(W1.get([0,0])+small)
    // console.log(W1.get([0,1])+small)
    // console.log(W1.get([0,2])+small)
    x0h0.style.strokeWidth=W1.get([0,0])+small;
    x0h1.style.strokeWidth=W1.get([0,1])+small;
    x0h2.style.strokeWidth=W1.get([0,2])+small;
    x1h0.style.strokeWidth=W1.get([1,0])+small;
    x1h1.style.strokeWidth=W1.get([1,1])+small;
    x1h2.style.strokeWidth=W1.get([1,2])+small;
    h0y0.style.strokeWidth=W2.get([0,0])+small;
    h0y1.style.strokeWidth=W2.get([0,1])+small;
    h1y0.style.strokeWidth=W2.get([1,0])+small;
    h1y1.style.strokeWidth=W2.get([1,1])+small;
    h2y0.style.strokeWidth=W2.get([2,0])+small;
    h2y1.style.strokeWidth=W2.get([2,1])+small;

    tx0h0.style.strokeWidth=W1.get([0,0])+small;
    tx0h1.style.strokeWidth=W1.get([0,1])+small;
    tx0h2.style.strokeWidth=W1.get([0,2])+small;
    tx1h0.style.strokeWidth=W1.get([1,0])+small;
    tx1h1.style.strokeWidth=W1.get([1,1])+small;
    tx1h2.style.strokeWidth=W1.get([1,2])+small;
    th0y0.style.strokeWidth=W2.get([0,0])+small;
    th0y1.style.strokeWidth=W2.get([0,1])+small;
    th1y0.style.strokeWidth=W2.get([1,0])+small;
    th1y1.style.strokeWidth=W2.get([1,1])+small;
    th2y0.style.strokeWidth=W2.get([2,0])+small;
    th2y1.style.strokeWidth=W2.get([2,1])+small;
}
function loop(time) {
    // req = undefined
    delta += time - lastFrameTimeMs;
    lastFrameTimeMs = time;

    while (delta >= timestep) {
        if(i<epoch){
            update(timestep);
        }
        delta -= timestep;
    }

    // if(i<epoch){
    requestAnimationFrame(loop)
    // }else{
    //     req = undefined
    // }
    // console.log("jalan")
}


function predict(){
    xi= [x0i.value,x1i.value]
    xin1l.textContent = "X1"
    xin2l.textContent = "X2"
    youtl.textContent = "Y"
    xin1.textContent = x0i.value == "" ? 0 : x0i.value
    xin2.textContent = x1i.value == "" ? 0 : x1i.value
    lay1=math.multiply(xi,W1)
    console.log(xi)
    lay1 = lay1.map(function (value, index, matrix) {
      return sigmoid(value)
    })
    console.log(lay1)
    th10.textContent = lay1.get([0]).toFixed(4)
    th20.textContent = lay1.get([1]).toFixed(4)
    th30.textContent = lay1.get([2]).toFixed(4)

    lay2=math.multiply(lay1,W2)

    lay2 = lay2.map(function (value, index, matrix) {
      return sigmoid(value)
    })


    ty10.textContent = lay2.get([0]).toFixed(4)
    ty20.textContent = lay2.get([1]).toFixed(4)
    yout.textContent = lay2.get([0]).toFixed(4)<lay2.get([1]).toFixed(4) ? 0 : 1
    // return lay2
}
// console.log(predict([1,1]).format(5))

function start() {
  if (!req) {
     req = requestAnimationFrame(loop)
     // req = window.requestAnimationFrame(loop)
  }
}
function softstart(){
    i=0
    init()
    start()
}
function stop() {
  // if (req) {
    // window.cancelAnimationFrame(req)
  //   cancelAnimationFrame(req)
  // }
  // req = undefined
  i=epoch
}
var ins,x0i,x1i
var xin1 = document.getElementById('xin1')
var xin2 = document.getElementById('xin2')
var xin1l = document.getElementById('xin1l')
var xin2l = document.getElementById('xin2l')
var yout = document.getElementById('yout')
var youtl = document.getElementById('youtl')
var starter=document.getElementById('starter')
var stopper=document.getElementById('stopper')
starter.addEventListener('click', softstart)
stopper.addEventListener('click', stop)
x0i = document.getElementById('x0i')
x1i = document.getElementById('x1i')

x0i.onkeyup = function() {
    predict()
};
x1i.onkeyup = function() {
    predict()
};
