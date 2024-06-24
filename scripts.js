// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    fetchPetValues();
    fetchClanRankings();
});

function fetchPetValues() {
    const valuesList = document.getElementById('values-list');
    const petValues = [
        { name: 'Pet A', value: 100 },
        { name: 'Pet B', value: 200 },
        { name: 'Pet C', value: 300 },
    ];

    petValues.forEach(pet => {
        const petItem = document.createElement('div');
        petItem.className = 'pet-item';
        petItem.innerHTML = `<strong>${pet.name}</strong>: ${pet.value}`;
        valuesList.appendChild(petItem);
    });
}

function fetchClanRankings() {
    const clanList = document.getElementById('clan-list');
    const clans = [
        { name: 'Clan A', points: 1000 },
        { name: 'Clan B', points: 1500 },
        { name: 'Clan C', points: 2000 },
    ];

    clans.forEach(clan => {
        const clanItem = document.createElement('div');
        clanItem.className = 'clan-item';
        clanItem.innerHTML = `<strong>${clan.name}</strong>: ${clan.points}`;
        clanList.appendChild(clanItem);
    });
}
