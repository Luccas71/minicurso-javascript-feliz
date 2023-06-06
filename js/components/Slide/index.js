const Item = (css, content = '') => (
    `
        <li style="${css}">${content}</li>
    `
)

const Slide = (css, content) => (
    `
        <ul style="${css}">${content}</ul>
    `
)

const item = Item `
    list-style: none;
    border-radius: 50%;
    width: calc(var(--line-height) * 5);
    height: calc(var(--line-height) * 5);
    background-color: var(--happy-color);
`

const slide = Slide `
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    height: 10px;
    background-color: var(--happy-color);
    margin-top: auto;
    ${item + item + item}

`

