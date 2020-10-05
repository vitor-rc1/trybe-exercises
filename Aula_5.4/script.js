window.onload = () => {
  const backgroundColor = document.querySelector('#background-color');
  const color = document.querySelector('#color');
  const fontSize = document.querySelector('#font-size');
  const lineHeight = document.querySelector('#line-height');
  const fontFamily = document.querySelector('#font-family');
  const body = document.body;
  body.style.backgroundColor = 'rgb(250, 250, 250)';
  body.style.color = 'black';
  body.style.fontSize = '16px';
  body.style.lineHeight = 'normal';
  body.style.fontFamily = 'Arial';
  
  backgroundColor.value = 'rgb(250, 250, 250)';
  color.value = 'black';
  fontSize.value = '16px';
  lineHeight.value = 'normal';
  fontFamily.value = 'Arial'

  backgroundColor.addEventListener('blur', () => {
    const backgroundColor = document.querySelector('#background-color');
    document.body.style.backgroundColor = backgroundColor.value;
  })

  color.addEventListener('blur', () => {
    const color = document.querySelector('#color');
    document.body.style.color = color.value;
  })

  fontSize.addEventListener('blur', () => {
    const fontSize = document.querySelector('#font-size');
    document.body.style.fontSize = fontSize.value;
  })

  lineHeight.addEventListener('blur', () => {
    const lineHeight = document.querySelector('#line-height');
    document.body.style.lineHeight = lineHeight.value;
  })

  fontFamily.addEventListener('blur', () => {
    const fontFamily = document.querySelector('#font-family');
    document.body.style.fontFamily = fontFamily.value;
  })

}




