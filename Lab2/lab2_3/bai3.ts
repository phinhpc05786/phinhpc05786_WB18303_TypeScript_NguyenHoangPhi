const pokemons: number = 48;

async function callApi(url: string){
    let data: Response = await fetch(url);
    return await data.json;
}

const APP: HTMLElement | null = document.getElementById('app');
let html: string = "";

async function fetchData() {
    let html = "";
    for (let i = 0; i < 48; i++) {
        try {
            const data: any = await callApi(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 48) + 1}`);
            // console.log(data);

            if (data.sprites && data.sprites.front_default) {
                html += `<div class="col-3">
                    <div class="col-md-2 shadow m-1 rounded position-relative">
                        <span class="position-absolute top-0">
                            #${data.id}
                        </span>
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

    const appElement = document.getElementById('your-app-id') as HTMLElement;

    if (appElement) {
        appElement.innerHTML = html;
    }
}

fetchData();



