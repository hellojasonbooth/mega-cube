    
    
    const cubeTag = document.querySelector('div.cube')

    cubeTag.style.animation = 'spin 2s infinite linear'

    document.addEventListener('mousemove', function (event) {
      cubeTag.style.animation = ''
    })


    document.addEventListener('mousemove', function (event) {

      const x = event.pageX
      const y = event.pageY

      const midX = x - window.innerWidth / 2
      const midY = y - window.innerHeight / 2

      cubeTag.style.left = x + 'px'
      cubeTag.style.top = y + 'px'

      cubeTag.style.transform = "rotateX(" + midY + "deg) rotateY(" + midX + "deg)"
    })
      


    document.addEventListener("touchmove", function (event) {
      const cubeTag = document.querySelector('div.cube')
      
      const x = event.pageX
      const y = event.pageY
      
      const midX = x - window.innerWidth / 2
      const midY = y - window.innerHeight / 2
      
      cubeTag.style.left = x + 'px'
      cubeTag.style.top = y + 'px'

      cubeTag.style.transform = "rotateX(" + midY + "deg) rotateY(" + midX + "deg)"
    })



    // detect whether mouse is inactive
    // setup a timer to keep track 
    function resetTimer() { 
      window.clearTimeout(mouseTimeout)
      startTimer()
    }

    const timeoutCounter = 220
    let mouseTimeout
  
    function startTimer() { 
        mouseTimeout = window.setTimeout(mouseIsInactive, timeoutCounter)
    }
      
    function mouseIsInactive() {
        console.log('im inactive')
        cubeTag.style.animation = 'spin 2s infinite linear'
    }
    
    function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false)
        startTimer()
    }
        setupTimers()
    
