
let residentBtn = document.querySelector('button')

const btnClicked = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((req, res) => {
        console.log(req.data)
        let residents = req.data.results[0].residents;
        for (let i = 0; i < residents.length; i++) {
            axios.get(residents[i])
            .then((req, res) => {
                let name = req.data.name;
                let element = document.createElement('h2');
                element.textContent = name;
                document.body.appendChild(element);
            })
        }
    })
}


    residentBtn.addEventListener('click', btnClicked)

