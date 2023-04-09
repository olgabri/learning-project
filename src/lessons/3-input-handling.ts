const input = document.querySelector<HTMLInputElement>('.input')
const buttonCancel = document.querySelector<HTMLButtonElement>('.button-cancel')
const buttonOk = document.querySelector<HTMLButtonElement>('.button-ok')

input?.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        proccessInput()
    }
})

buttonCancel?.addEventListener('click', () => {
    alert('cancel');
})

buttonOk?.addEventListener('click', proccessInput)

function proccessInput() {
    const response = input?.value
    console.log('ok clicked', response);

    if (!response) {
      alert ('cancel');
    } else if (isNaN(+response)) {
        alert('incorrect')
    } else if (+response > 0) {
      alert("1");
    } else if (+response < 0) {
      alert("-1");
    } else {
      alert("0");
    }
}
