function display() {
    const libraryDiv = document.getElementById('library');
    const Buygames = JSON.parse(localStorage.getItem('buygames')) || [];

    if (Buygames.length === 0) {

        return;
    }

    Buygames.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');
        gameDiv.innerHTML = `
            <div class="box-text">
                <h3>${game.name}</h3>
            </div>
        `;
        libraryDiv.appendChild(gameDiv);
    });
}


function clearLibrary() {
    localStorage.removeItem('buygames');
    display(); // Cập nhật lại giao diện sau khi xóa
}

document.getElementById('clearLibrary').addEventListener('click', clearLibrary);

display();

