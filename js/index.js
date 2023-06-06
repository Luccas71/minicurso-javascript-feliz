// BOM - window
// DOM - document


const $root = document.querySelector('#root');
const textTitle = 'Dificuldade'
// tagged template strings

const title = Title`
    color: #7bed9f; 
    font-size: 2.5rem;
    letter-spacing: 1.2px;
    margin-bottom: 4rem;
    margin-top: 2rem;
    ${textTitle}
`



$root.insertAdjacentHTML('beforeend', title)
$root.insertAdjacentHTML('beforeend', wrapperCharacters)
$root.insertAdjacentHTML('beforeend', slide)

