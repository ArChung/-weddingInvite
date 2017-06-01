$(document).ready(function() {

    initAni();



})


function initAni() {

    var tl = new TimelineMax();

    tl.set($('#container'), { top: '150%', scale: 1, rotation: 15 })
        .set($('.cover2'), { rotationX: 90, transformOrigin: '0 100%' })
        .set($('.card'), { perspective: 2500 })
        .set($('.inr'), { rotationY: 90, transformOrigin: '0 0' })
        .set($('.inl'), { rotationY: 90, transformOrigin: '100% 0' })
        .set($('.cc'), { autoAlpha: 0.5 })
        .to($('#container'), 2, { top: '50%', scale: 1, ease: Power3.easeOut, rotation: -5 })
        .to($('.cover1'), 0.8, { ease: Power3.easeIn, rotationX: 90, transformOrigin: '0 0' }, '-=0.8')
        .to($('.cover2'), 0.8, { ease: Power3.easeOut, rotationX: 0 })
        .to($('.back'), 1.2, { ease: Power2.easeIn, top: 1200 }, '-=0.8', 'cardLeave')
        .to($('.front'), 1.2, { ease: Power2.easeIn, top: 1200 }, '-=1.2', 'cardLeave')
        .to($('#container'), 2, { ease: Power2.easeInOut, rotation: 0 }, '-=1.2', 'cardLeave')
        .to($('.card'), 1, { ease: Power2.easeInOut, marginTop: -150 }, '-=2', 'cardLeave')
        .to($('.card'), 1.4, { ease: Power2.easeInOut, marginTop: 0 }, '-=1', 'cardLeave')
        .to($('.topl'), 1.6, { ease: Power3.easeIn, rotationY: -80, transformOrigin: '0 0' }, '-=0.8', 'open')
        .to($('.topr'), 1.6, { ease: Power3.easeIn, rotationY: 80, transformOrigin: '100% 0' }, '-=1.6', 'open')
        .to($('.cc'), 1.6, { ease: Power3.easeIn, autoAlpha: 1 }, '-=1.6', 'open')
        .call(function() {
            $('.top').addClass('hide');
        })
        .to($('.inr'), 1.6, { ease: Power3.easeOut, rotationY: 0, transformOrigin: '0 0' }, 'open2')
        .to($('.inl'), 1.6, { ease: Power3.easeOut, rotationY: 0, transformOrigin: '100% 0' }, 'open2')
        .call(function() {
            $('.back').addClass('hide');
            $('.front').addClass('hide');
        })
        .to('.card', 3, { scale: 1.25, ease: Power2.easeInOut }, '-=3', 'open').pause();

    // tl.play('open')
    // card up & open

    // card leave

    //  card open

     $('body').waitForImages(function() {
    	var tt=new TimelineMax();
    	tt.to('.loading',0.8,{autoAlpha:0})
    	.call(function(){
    		tl.play();
    	});
    	
    });
}
