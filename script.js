const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('left')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('right')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);



const imbox = document.querySelectorAll(".imageblock");
const contr = document.querySelectorAll(".contr");
let imboxIndex = 0;

function showim(index) {
    imbox[imboxIndex].classList.remove('act');
    imbox[index].classList.add('act');
    imboxIndex = index;
}

contr.forEach((e) => {
    e.addEventListener('click', (event) => {
        if (event.target.classList.contains('L')) {
            let index = imboxIndex - 1;
            if (index < 0) {
                index = imbox.length - 1;
            }
            showim(index);
        } else if (event.target.classList.contains('R')) {
            let index = imboxIndex + 1;
            if (index >= imbox.length) {
                index = 0;
            }
            showim(index);
        }
    });
});

showim(imboxIndex);
