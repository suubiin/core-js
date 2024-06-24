/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
function handler(){
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
// first.onclick = handler;



// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handleClick(e){
  console.log(e.type);
  console.log(e.target);
  console.log(e.offsetX);

}

// first.addEventListener('click',handleClick)

const second = getNode('.second');

// second.addEventListener('click',firstEventRemove)









/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
// addClass('.ground',['a','b','c'])
// addClass('.ground','a','b','c')
// addClass('.ground','a,b,c')
addClass('.ground',{a:'one',b:'two'})


const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClickBall({offsetX:xPos, offsetY:yPos}){

  // const {offsetX:xPos, offsetY:yPos} = e;
  
  // let x = e.offsetX;
  // let y = e.offsetY;

  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${xPos-(w/2)}px,${yPos-(h/2)}px)`
}

// ground.addEventListener('click',handleClickBall)

function handleMove({offsetX:x,offsetY:y}){

  console.log(x,y);

  let template = /* html */`
    <div class="emotion" style="top:${y-16}px; left:${x-16}px;">😍</div>
  `
  
  insertLast(ground,template);
}


let timeout;

function debounce(callback){

  clearTimeout(timeout);

  timeout = setTimeout(()=>{
    callback()
  }, 1000)

  // debounce(()=>{
  //   console.log('hello');
  // })
}


// 클로저
function debounce(callback, limit = 500){
  
  let timeout;

  return function(e){
    clearTimeout(timeout);
  
    timeout = setTimeout(()=>{
      callback.call(this,e)
    }, limit)

  }
}

ground.addEventListener('mousemove',debounce(function(e){
  console.log(e);
  console.log(this);
},500))



function throttle(callback, limit = 500){
  
  let waiting = false;

  return function(e){
    if(!waiting){
      callback.call(this,e)
      waiting = true;
  
      setTimeout(()=>{
        waiting = false;
      },limit)
    }
  }
}

ground.addEventListener('mousemove', throttle((e)=>{
  console.log(this);
}))

// throttle(수도꼭지), debounce(공 튀김 방지)