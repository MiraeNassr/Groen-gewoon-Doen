loadpackages (packeges.json)

async function example (){
    const response = await fetch('data/rates.json');
    const rates = await response.json();
    return rates;
}
