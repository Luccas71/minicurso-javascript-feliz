const css = `<style>
:root {
    --line-height: 10px;
    --happy-color: #eccc68; 
}

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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;
    padding-top: 20px;
    width: 40vw;
    min-width: 768px;
    text-align: center;
    padding-top: 4rem;
    padding-bottom: 6rem;
    height: 65vh;
    background-color: #2ed573;
}
</style>`

const head = document.querySelector('head')
head.insertAdjacentHTML('beforeend', css)