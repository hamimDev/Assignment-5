
document.getElementById('blog-btn').addEventListener('click', function(){
  document.location.href = 'question.html';
  
})
document.getElementById('blog-btn-sm').addEventListener('click', function(){
  document.location.href = 'question.html';
  
})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


  document.getElementById('Triangle-btn').addEventListener('click', function(){
    const triangleInputF = document.getElementById('Triangle-input-1');
    const triangleInputFString = triangleInputF.value;
    const triangleInputFNum = parseInt(triangleInputFString);
    const triangleInputS = document.getElementById('Triangle-input-2');
    const triangleInputSString = triangleInputS.value;
    const triangleInputSNum = parseInt(triangleInputSString);
    triangleInputF.value = '';
    triangleInputS.value = '';
    if(isNaN(triangleInputFNum) || isNaN(triangleInputSNum)){
        alert('Please Type a Number');
        return;
    }
    else if(typeof(triangleInputFNum) === 'string' || typeof(triangleInputSNum) === 'string'){
        alert('Please Type a Number');
        return;
    }
    else if(triangleInputFNum<0 || triangleInputSNum<0){
        alert('Please Type a Positive Number');
        return;
    }

    const triangleResult = 0.5*triangleInputFNum*triangleInputSNum;

    const tofTriangleResult = triangleResult.toFixed(0);
    const resultShow = document.getElementById('result-show');
    resultShow.innerText = tofTriangleResult;
    const triangleNone = document.getElementById('triangle-none');
    const triangleShow = triangleNone.style.display = 'flex';
  })


  document.getElementById('Rectangle-btn').addEventListener('click', function(){
    const triangleInputF = document.getElementById('Rectangle-input-1');
    const triangleInputFString = triangleInputF.value;
    const triangleInputFNum = parseInt(triangleInputFString);
    const triangleInputS = document.getElementById('Rectangle-input-2');
    const triangleInputSString = triangleInputS.value;
    const triangleInputSNum = parseInt(triangleInputSString);
    triangleInputF.value = '';
    triangleInputS.value = '';
    if(isNaN(triangleInputFNum) || isNaN(triangleInputSNum)){
        alert('Please Type a Number');
        return;
    }
    else if(typeof(triangleInputFNum) === 'string' || typeof(triangleInputSNum) === 'string'){
        alert('Please Type a Number');
        return;
    }
    else if(triangleInputFNum<0 || triangleInputSNum<0){
        alert('Please Type a Positive Number');
        return;
    }

    const triangleResult = triangleInputFNum*triangleInputSNum;

    const tofTriangleResult = triangleResult.toFixed(0);
    const resultShow = document.getElementById('Rectangle-show-Result');
    resultShow.innerText = tofTriangleResult;
    const triangleNone = document.getElementById('Rectangle-none');
    const triangleShow = triangleNone.style.display = 'flex';
  })


  document.getElementById('Parallelogram-btn').addEventListener('click', function(){
    const triangleInputF = document.getElementById('Parallelogram-input-1');
    const triangleInputFString = triangleInputF.value;
    const triangleInputFNum = parseInt(triangleInputFString);
    const triangleInputS = document.getElementById('Parallelogram-input-2');
    const triangleInputSString = triangleInputS.value;
    const triangleInputSNum = parseInt(triangleInputSString);
    triangleInputF.value = '';
    triangleInputS.value = '';
    if(isNaN(triangleInputFNum) || isNaN(triangleInputSNum)){
        alert('Please Type a Number');
        return;
    }
    else if(typeof(triangleInputFNum) === 'string' || typeof(triangleInputSNum) === 'string'){
        alert('Please Type a Number');
        return;
    }
    else if(triangleInputFNum<0 || triangleInputSNum<0){
        alert('Please Type a Positive Number');
        return;
    }

    const triangleResult = triangleInputFNum*triangleInputSNum;

    const tofTriangleResult = triangleResult.toFixed(0);
    const resultShow = document.getElementById('Parallelogram-show-result');
    resultShow.innerText = tofTriangleResult;
    const triangleNone = document.getElementById('Parallelogram-none');
    const triangleShow = triangleNone.style.display = 'flex';
  })


  document.getElementById('Rhombus-btn').addEventListener('click', function(){
    const triangleInputF = document.getElementById('Rhombus-input-1');
    const triangleInputFString = triangleInputF.value;
    const triangleInputFNum = parseInt(triangleInputFString);
    const triangleInputS = document.getElementById('Rhombus-input-2');
    const triangleInputSString = triangleInputS.value;
    const triangleInputSNum = parseInt(triangleInputSString);
    triangleInputF.value = '';
    triangleInputS.value = '';
    if(isNaN(triangleInputFNum) || isNaN(triangleInputSNum)){
        alert('Please Type a Number');
        return;
    }
    else if(typeof(triangleInputFNum) === 'string' || typeof(triangleInputSNum) === 'string'){
        alert('Please Type a Number');
        return;
    }
    else if(triangleInputFNum<0 || triangleInputSNum<0){
        alert('Please Type a Positive Number');
        return;
    }

    const triangleResult = 0.5* triangleInputFNum*triangleInputSNum;

    const tofTriangleResult = triangleResult.toFixed(0);
    const resultShow = document.getElementById('Rhombus-Show-result');
    resultShow.innerText = tofTriangleResult;
    const triangleNone = document.getElementById('Rhombus-none');
    const triangleShow = triangleNone.style.display = 'flex';
  })


  document.getElementById('Pentagon-btn').addEventListener('click', function(){
    const triangleInputF = document.getElementById('Pentagon-input-1');
    const triangleInputFString = triangleInputF.value;
    const triangleInputFNum = parseInt(triangleInputFString);
    const triangleInputS = document.getElementById('Pentagon-input-2');
    const triangleInputSString = triangleInputS.value;
    const triangleInputSNum = parseInt(triangleInputSString);
    triangleInputF.value = '';
    triangleInputS.value = '';
    if(isNaN(triangleInputFNum) || isNaN(triangleInputSNum)){
        alert('Please Type a Number');
        return;
    }
    else if(typeof(triangleInputFNum) === 'string' || typeof(triangleInputSNum) === 'string'){
        alert('Please Type a Number');
        return;
    }
    else if(triangleInputFNum<0 || triangleInputSNum<0){
        alert('Please Type a Positive Number');
        return;
    }

    const triangleResult = 0.5* triangleInputFNum*triangleInputSNum;

    const tofTriangleResult = triangleResult.toFixed(0);
    const resultShow = document.getElementById('Pentagon-show-result');
    resultShow.innerText = tofTriangleResult;
    const triangleNone = document.getElementById('Pentagon-none');
    const triangleShow = triangleNone.style.display = 'flex';
  })


  document.getElementById('Ellipse-btn').addEventListener('click', function(){
    const triangleInputF = document.getElementById('Ellipse-input-1');
    const triangleInputFString = triangleInputF.value;
    const triangleInputFNum = parseInt(triangleInputFString);
    const triangleInputS = document.getElementById('Ellipse-input-2');
    const triangleInputSString = triangleInputS.value;
    const triangleInputSNum = parseInt(triangleInputSString);
    triangleInputF.value = '';
    triangleInputS.value = '';
    if(isNaN(triangleInputFNum) || isNaN(triangleInputSNum)){
        alert('Please Type a Number');
        return;
    }
    else if(typeof(triangleInputFNum) === 'string' || typeof(triangleInputSNum) === 'string'){
        alert('Please Type a Number');
        return;
    }
    else if(triangleInputFNum<0 || triangleInputSNum<0){
        alert('Please Type a Positive Number');
        return;
    }

    const triangleResult = 3.14* triangleInputFNum*triangleInputSNum;

    const tofTriangleResult = triangleResult.toFixed(2);
    const resultShow = document.getElementById('Ellipse-show-result');
    resultShow.innerText = tofTriangleResult;
    const triangleNone = document.getElementById('Ellipse-none');
    const triangleShow = triangleNone.style.display = 'flex';
  })

  