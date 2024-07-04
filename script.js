
const getRandomQuote = async () => {
    try{
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        return {advice: data.slip.advice, id: data.slip.id};
    }
    catch(err){
        console.log('Error: ', err)
        return {advice: "Something went wrong, we can't get a new advice.. \n Try again later!", id:0};
    }
}
const setNewQuote = async() => {
    const {advice, id} = await getRandomQuote();
    const quoteElem = document.querySelector('.ad-paragraph');
    quoteElem.innerHTML = `“${advice}”`;

    const idElem = document.querySelector('.ad-id');
    idElem.innerHTML = id;
}
const dicebtn = document.getElementById('ad-dicebtn');
dicebtn.addEventListener('click', (e) => {
    setNewQuote();
});