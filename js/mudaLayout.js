
function mudaLayout(){

  var btnMudaLayout = document.querySelector('#mudaLayout')
  var mural = document.querySelector('.mural')
  if (mural.classList.contains('mural--linha')) {
    //mural.classList.remove('mural--linha')

    btnMudaLayout.textContent = 'Linhas'
  }else{

    //mural.classList.add('mural--linha')
    btnMudaLayout.textContent = 'Bloco'
  }
  //Ele tira ou coloca a classe
  mural.classList.toggle('mural--linha');
}
