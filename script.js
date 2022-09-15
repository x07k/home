function loaded(){
    document.getElementById('loadsp').style.display = 'none'
    document.getElementById('loading').style.height = '0'
}
function homep(){
    document.getElementById('home-page').style.display = 'flex'
    document.getElementById('videos-page').style.display = 'none'
    document.getElementById('about-page').style.display = 'none'
}
function videosp(){
    document.getElementById('videos-page').style.display = 'flex'
    document.getElementById('home-page').style.display = 'none'
    document.getElementById('about-page').style.display = 'none'
}
function aboutp(){
    document.getElementById('about-page').style.display = 'flex'
    document.getElementById('home-page').style.display = 'none'
    document.getElementById('videos-page').style.display = 'none'
}
function unlock(){
    document.getElementById('welb-cover').style.width = '0'
    document.getElementById('showpax').style.display = 'none'
    document.getElementById('home-page').style.overflow = 'scroll'
    document.getElementById('welb').style.width = '99vw'
}