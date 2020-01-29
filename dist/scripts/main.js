    
    
    const cubeTag = document.querySelector('div.cube')

    // cubeTag.style.animation = 'spin 2s infinite linear'

    document.addEventListener('mousemove', function (event) {
      cubeTag.style.animation = ''
    })
   
    // document.addEventListener('touchmove', function (event) {
    //   cubeTag.style.animation = ''
    // })

    function animate() {

      const cubeTag = document.querySelector('div.cube')

      const x = event.pageX
      const y = event.pageY

      const midX = x - window.innerWidth / 2
      const midY = y - window.innerHeight / 2

      cubeTag.style.left = x + 'px'
      cubeTag.style.top = y + 'px'

      cubeTag.style.transform = "rotateX(" + midY + "deg) rotateY(" + midX + "deg)"
    }


    document.addEventListener('mousemove', function (event) {
      animate()
    })
      


    document.addEventListener("touchmove", function (event) {
      animate()
    })



    // detect whether mouse is inactive
    // setup a timer to keep track 
    function resetTimer() { 
      window.clearTimeout(timeout)
      startTimer()
    }

    const timeoutCounter = 220
    let timeout
  
    function startTimer() { 
        timeout = window.setTimeout(isInactive, timeoutCounter)
    }
      
    function isInactive() {
        console.log('im inactive')
        cubeTag.style.animation = 'spin 2s cubic-bezier(0.19, 1, 0.22, 1) infinite'
    }
    
    function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false)
        document.addEventListener("touchmove", resetTimer, false)
        startTimer()
    }
        setupTimers()
    
