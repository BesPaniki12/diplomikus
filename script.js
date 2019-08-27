
document.addEventListener('DOMContentLoaded', () => {
    const menuTrigger = document.querySelectorAll('.sidenav'),
        mobileMenu = M.Sidenav.init(menuTrigger);

    const elems = document.querySelectorAll('select'),
        instances = M.FormSelect.init(elems);

    const phone = document.getElementById('phone'),
        maskOptions = {
            mask: '+{7} (000) 000-00-00',
            lazy: false
        };

    let phoneValid = false;
    phone.addEventListener('focus', () => {
        const mask = new IMask(phone, maskOptions);
        phone.classList.remove('valid');
        phone.classList.add('invalid');

        mask.on("complete", () => {
            phone.classList.remove('invalid');
            phone.classList.add('valid');
            phoneValid = true;
        });
    });

    phone.onchange = () => {
        if (!phoneValid) {
            phone.classList.remove('valid');
            phone.classList.add('invalid');
        }
    };

    const orderButton = document.getElementById('orderButton'),
        form = document.getElementById('orderForm');
    orderButton.addEventListener('click', event => {
        event.preventDefault();
        const inputs = form.getElementsByClassName('validate');
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains('invalid')) {
                return false;
            }
            //console.log(inputs[i]);
        }
        form.submit();
    })

});
