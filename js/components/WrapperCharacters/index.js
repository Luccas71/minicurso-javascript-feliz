const pathImage = 'images/goku.png'
const image = Character`
    width: 180px;
    height: 250px;
    ${pathImage}
`

const WrapperCharacters = (css, children) => (`
    <div style="${css}">${children}</div>
`)

const wrapperCharacters = WrapperCharacters`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    ${image + image + image}
`

