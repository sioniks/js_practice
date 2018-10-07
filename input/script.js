function fun1() {
    let cb;
    cb = document.getElementById('one');

    if (cb.checked) {
        alert('Выбрано');
    } else {
        alert('Не выбрано');
    }
}
    
function fun2() {
    let rb;
    rb = document.getElementsByName('r1');

    for (let i = 0; i < rb.length; i++) {
        if (rb[i].checked) {
            alert('Выбран ' +i+ ' елемент');            
        }
    }
}