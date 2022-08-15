
function myFunction(el) {
    document.getElementById('overlay').style.display='block';
    document.getElementById("checkout").style.display = "block";
    el.style.display="none";
}

document.getElementById('credit__card').addEventListener('click', () => {
    document.getElementById('credit__card').classList.replace('inactive', 'active');
    document.getElementById('paypal').classList.replace('active', 'inactive');

    document.getElementById('personal__info').style.display='block';
    document.getElementById('billing__info').style.display='block';
    document.getElementById('paypal__block').style.display='none';



})

document.getElementById('paypal').addEventListener('click', () => {
    document.getElementById('paypal').classList.replace('inactive', 'active');
    document.getElementById('credit__card').classList.replace('active', 'inactive');


    document.getElementById('billing__info').style.display='none';
    document.getElementById('personal__info').style.display='none';
    document.getElementById('paypal__block').style.display='block';


})


function change(el) {
    if(el.checked) {
        document.getElementById('business__info').style.display='block';
        document.getElementById('personal__info').style.display='none';
    } else {
        document.getElementById('business__info').style.display='none';
    }
}

function getCoupon(el) {
    let coupon = document.getElementById('coupon__form');
    console.log(coupon);
    if(el.checked) {
        coupon.style.display='block';
    } else {
        coupon.style.display='none';
    }
}