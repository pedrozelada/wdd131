document.addEventListener('DOMContentLoaded', function() {
    const goalInput = document.getElementById('goalInput');
    const addGoalButton = document.getElementById('addGoalButton');
    const goalList = document.getElementById('goalList');

    loadGoals();

    addGoalButton.addEventListener('click', function() {
        const goalText = goalInput.value.trim();
        if (goalText) {
            const goal = { text: goalText };
            addGoal(goal);
            saveGoal(goal);
            goalInput.value = '';
        }
    });

    function addGoal(goal) {
        const li = document.createElement('li');
        
        const goalText = document.createElement('span');
        goalText.textContent = goal.text;
        li.appendChild(goalText);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => deleteGoal(goal, li));
        li.appendChild(deleteButton);

        goalList.appendChild(li);
    }

    function saveGoal(goal) {
        let goals = JSON.parse(localStorage.getItem('goals')) || [];
        goals.push(goal);
        localStorage.setItem('goals', JSON.stringify(goals));
    }

    function loadGoals() {
        let goals = JSON.parse(localStorage.getItem('goals')) || [];
        goals.forEach(goal => addGoal(goal));
    }

    function deleteGoal(goal, listItem) {
        let goals = JSON.parse(localStorage.getItem('goals')) || [];
        goals = goals.filter(g => g.text !== goal.text);
        localStorage.setItem('goals', JSON.stringify(goals));
        listItem.remove();
    }
});