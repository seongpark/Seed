//기본값 설정
let screenOff = 0;
let point = 0;
let seed = 1;
let seedPoint = 0;

document.getElementById("ScreenOff").textContent=screenOff;
document.getElementById("point").textContent=point;
document.getElementById("seed").textContent="1";

//화면꺼짐 인식
function getTime() {
    return (new Date()).getTime();
}

var lastInterval = getTime();

function intervalHeartbeat() {
    var now = getTime();
    var diff = now - lastInterval;
    var offBy = diff - 1000; 
    lastInterval = now;

    if (offBy > 100) {
        //화면 꺼질때마다 변수값 증가
        screenOff += 1;
        point += 10;
        seedPoint += 10;

        document.getElementById("seed").textContent=seed;

        //단계 표시
        if(seedPoint == 100) {
            seed = 2;
        }

        if(seedPoint == 200) {
            seed = 3;
        }

        if(seedPoint == 300) {
            seed = 4;
        }

        if(seedPoint == 400) {
            seed = 5;
        }

        if(seedPoint == 500) {
            seed = 6;
        }

        if(seedPoint == 600) {
            seed = 7;
        }

        //횟수 표시
        document.getElementById("ScreenOff").textContent=screenOff;
        document.getElementById("point").textContent=point;

        //식물 키우기 이미지 변경
        if (seed == 2) {
            document.getElementById("img").src = "image/2.png";
        }

        if (seed == 3) {
            document.getElementById("img").src = "image/3.png";
        }

        if (seed == 4) {
            document.getElementById("img").src = "image/4.png";
        }

        if (seed == 5) {
            document.getElementById("img").src = "image/5.png";
        }

        if (seed == 6) {
            document.getElementById("img").src = "image/6.png";
        }

        if (seed == 7) {
            document.getElementById("img").src = "image/7.png";
        }

        


    }
}



setInterval(intervalHeartbeat, 1000);

