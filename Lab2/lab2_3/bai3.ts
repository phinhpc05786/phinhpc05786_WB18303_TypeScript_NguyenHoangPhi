import 'core-js/features/promise';

const pokemons: number[] = Array.from({ length: 48 }, (_, index) => index + 1);

async function callApi(url: string) {
    const data: Response = await fetch(url);
    return await data.json();
}

async function fetchData() {
    let html = "";
    for (let i = 0; i < pokemons.length; i++) {
        try {
            const data: any = await callApi(`https://pokeapi.co/api/v2/pokemon/${pokemons[i]}`);

            if (data.sprites && data.sprites.front_default) {
                html += `<div class="col-3">
                    <div class="col-md-2 shadow m-1 rounded position-relative">
                        <span class="position-absolute top-0">#${data.id}</span>
                        <img src="${data.sprites.front_default}" class="w-100" height="120" alt="${data.name}">
                    </div>
                </div>`;
            } else {
                console.error("Missing sprites or front_default in data:", data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const appElement = document.getElementById('app') as HTMLElement;

    if (appElement) {
        appElement.innerHTML = html;
    }
}

fetchData();
