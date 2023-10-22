const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXC_LAQWr-B4lSGRrogoirg&part=snippet%2Cid&order=date&maxResults=10';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e1d7d5c54msh6fed73530907200p1023d2jsn8925b0de514f',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const content = null || document.querySelector('#content');

const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI, options);
    const result = await response.json();
    return result;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video =>
            `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>
            `
        ).slice(0,10).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();

