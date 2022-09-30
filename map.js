var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(35.064965,126.759407),
    level: 3
};

var map = new kakao.maps.Map(container, options);


pos=[{short_info:'<div>캠핑장-입구</div>',position:new kakao.maps.LatLng(35.062684,126.757113)},
    {short_info:'<div>nothing special here2</div>',position:new kakao.maps.LatLng(180.066231,126.759815)},
    {short_info:'<div>고인돌</div>',position:new kakao.maps.LatLng(35.067041,126.761913)},
    {short_info:'<div>영산강</div>',position:new kakao.maps.LatLng(35.065448,126.766405)},
    {short_info:'<div>생태연못</div>',position:new kakao.maps.LatLng(35.066647,126.758518)},
    {short_info:'<div>골프장</div>',position:new kakao.maps.LatLng(35.067594,126.756660)},
    {short_info:'<div>관찰데크2</div>',position:new kakao.maps.LatLng(35.066369,126.755153)},
    {short_info:'<div>흔들다리</div>',position:new kakao.maps.LatLng(35.064512,126.753369)},
    {short_info:'<div>nothing special here9</div>',position:new kakao.maps.LatLng(180.064121,126.754368)},
    {short_info:'<div>캠핑장-간이정원</div>',position:new kakao.maps.LatLng(35.063802,126.755981)},
    {short_info:'<div>관찰데크1</div>',position:new kakao.maps.LatLng(35.0656968,126.7544684)},
    {short_info:'<div>승촌부두</div>',position:new kakao.maps.LatLng(35.0619423,126.7588199)},
    {short_info:'<div>산책로</div>',position:new kakao.maps.LatLng(35.0644784,126.7614542)},
    {short_info:'<div>캠핑장-덩굴정원</div>',position:new kakao.maps.LatLng(35.065027,126.755115)}]

for(var i=0;i<pos.length;i++){
    var marker=new kakao.maps.Marker({map:map,position:pos[i].position});
    
    var infowindow = new kakao.maps.InfoWindow({content: pos[i].short_info});
    kakao.maps.event.addListener(marker,'mouseover',messageon(map,marker,infowindow));
    kakao.maps.event.addListener(marker,'mouseout',messageoff(infowindow))
    kakao.maps.event.addListener(marker,'click',modalon(i+1));
}

function messageon(map,marker,infowindow){
    return function(){
        infowindow.open(map,marker);
    }
}

function messageoff(infowindow){
    return function(){
        infowindow.close()
    }
}

function modalon(num){
    return function(){
        document.getElementById('modal_'+num).style.display = 'flex';
        class_name='.slide_'+num
        slide=1
        if(num==13 || num==3 || num==6 || num==7 || num==5){
            slide=3;
        }
        $(class_name).slick({
            autoplay : true,
            dots : true, /* 하단 점 버튼 */
            speed : 300 /* 이미지가 슬라이딩시 걸리는 시간 */,
                infinite : true,
                initialSlide : 0,
                autoplaySpeed : 3000 /* 이미지가 다른 이미지로 넘어 갈때의 텀 */,
                arrows : true,
                setPosition:0,
            slidesToShow : slide,
            centerMode:false,
                slidesToScroll : 1,
                touchMove : true, /* 마우스 클릭으로 끌어서 슬라이딩 가능여부 */
                nextArrows : true, /* 넥스트버튼 */
                fade : false
        });
        $(class_name).slick('resize');
        $(class_name).slick('setPosition');
        $(class_name).slick('refresh');
    }
}