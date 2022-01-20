const banner=document.querySelector('#banner')

  class Bubbles{
        constructor(height,width,x,y){
            this.height=height
            this.width=width
            this.x=x
            this.y=y
            let bubble=document.createElement('div')
            bubble.classList.add('bubble')
            bubble.style.height=`${height}rem`
            bubble.style.width=`${width}rem`
            bubble.style.left=`${x}rem`
            bubble.style.top=`${y}rem`
            let banner=document.querySelector('#banner')
            banner.appendChild(bubble)

        }
    }
    const bubble1=new Bubbles(4,4.5,40,20)
    const bubble2=new Bubbles(5,5,54,35)
    const bubble3=new Bubbles(4.5,4.7,67,13)
    const bubble4=new Bubbles(3.5,4,11,10)
    const bubble5=new Bubbles(3.7,4.2,75,25)
    let bool=true

$('#fridge').click(()=>{
    
        $('.closed').attr('src','src/static2.png')
                            $('.closed').addClass('open');

        $('#anchor').css({opacity:1})
})
        // $('.closed').toggle(()=>{
        // $('.closed').attr('src','src/static2.png')

        //             $('.closed').addClass('open');

        // });
