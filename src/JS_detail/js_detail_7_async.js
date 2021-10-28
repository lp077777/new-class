function loadImg(src,resolve,reject) {
  let image = new Image(200,200)
  image.src = src
  image.onload = () => { 
    resolve(image)
  }
  image.onerror = reject
  return image
}
loadImg('https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TIAYGKRLWEI6ZML5TBOBQ3PDHA.jpg&w=916',
  (image) => { document.body.appendChild(image) },
  () => { console.log('failed')}
)

//interval
function interval(callback, delay) {
  let id = setInterval(()=>callback(id),delay)
}
interval((id) => { 
  const img = document.getElementById('liyue')
  let height = parseInt(window.getComputedStyle(img).height)
  img.style.height = height + 10 + 'px'
  if (height >= 150) { 
    clearInterval(id)
  }
},1000)