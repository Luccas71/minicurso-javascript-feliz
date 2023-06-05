const css = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f3542;
    height: 100vh;
}

#root {
    text-align: center;
    padding-top: 20px;
    width: 50vw;
    min-width: 768px;
    height: 65vh;
    background-color: #2ed573;
}
</style>`

const head = document.querySelector('head')
head.insertAdjacentHTML('beforeend', css)