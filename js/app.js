const btn = document.querySelectorAll('.btn');

// console.log(btn);

const makeArr = Array.from(btn);

// console.log(makeArr)

makeArr.forEach(item=>{

    item.addEventListener('click', (e)=>{
        // change the font color

        e.target.classList.toggle('change');
        
        // remove the white background and add the white border

        e.target.parentElement.classList.toggle('');

    });

});