export async function get() {
    const url = 'http://192.168.45.223/surveillance_TESTE/isretail_status_min.php';
        const response = await fetch(url);
        const data = await response.json();

        const loadedPokemon = data.forEach((data, index) => {
            return {
                name: data.Seq,
                value: data.value,
                id: index + 1
            };
        });
    return {
        status: 200,
        body: loadedPokemon
    }
}