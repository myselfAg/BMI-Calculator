const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)) {
        document.querySelector('#height').value = ''
        document.querySelector('#weight').value = ''
        result.innerHTML = `Please give a valid height`
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        document.querySelector('#height').value = ''
        document.querySelector('#weight').value = ''
        result.innerHTML = `Please give a valid weight`
    } else {
        document.querySelector('#height').value = ''
        document.querySelector('#weight').value = ''
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span> BMI Result: ${bmi} </span>`
        const guide = document.querySelector('#guide')
        if(bmi < 18.6) {
            guide.innerHTML = `Under Weight`
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            guide.innerHTML = `Normal Weight`
        } else {
            guide.innerHTML = `Over Weight`
        }
            
    }

})