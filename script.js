let chess = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
];

function draw() {
    let out = '';
    let m = 0;
    for (let i = 0; i < chess.length; i++) {   //запускаем цикл который рисует горизонтальные строки
        let arr = chess[i];
        for (let k = 0; k < arr.length; k++) { //рисуем ячейки в этих горизонтальных строках
            if (m % 2 == 0) { // рисуем блок белый
                out += `<div class="chess-block" data-x="${k}" data-y="${i}"></div>`;
            } else { //рисуем блок черный
                out += `<div class="chess-block bg-black" data-x="${k}" data-y="${i}"></div>`;
            }
            m++; //рисует вертикальные линии
        }
        m++;  // рисует горизонтальные линии
    }
    document.querySelector('#field').innerHTML = out; //выводим блок на страницу
    document.querySelectorAll('.chess-block').forEach(function(Element){
        Element.onclick=horse; //клик по элементу запускает функцию
    });
}

draw(); //запускаем функцию

function horse(){
    document.querySelectorAll('.chess-block').forEach(function(Element){ //каждый новый клик сбрасывает предыдущий
        Element.classList.remove('active');
        Element.classList.remove('green');
    })
    let x = this.dataset.x;
    let y = this.dataset.y;
    console.log(x+' '+y);
    this.classList.add('active');
    
    
    // все возможные ходы коня 
    if(+x+2<8&&+y+1<8){
        document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y+1}"]`).classList.add('green');
    }
        if(+x+2<8&&+y-1>=0){
        document.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y-1}"]`).classList.add('green');
    }
        if(+x-2>=0&&+y+1<8){
        document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y+1}"]`).classList.add('green');
    }
        if(+x-2>=0&&+y-1>=0){
        document.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y-1}"]`).classList.add('green');
    }
        if(+x+1<8&&+y-2>=0){
        document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y-2}"]`).classList.add('green');
    }
        if(+x-1>=0&&+y-2>=0){
        document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y-2}"]`).classList.add('green');
    }
            if(+x+1<8&&+y+2<8){
        document.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y+2}"]`).classList.add('green');
    }
        if(+x-1>=0&&+y+2<8){
        document.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y+2}"]`).classList.add('green');
    }
}











