document.addEventListener('DOMContentLoaded', function () {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const modal = document.getElementById('editModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const editProfileForm = document.getElementById('editProfileForm');

    editProfileBtn.onclick = function () {
        modal.style.display = "block";
        document.body.classList.add('modal-open');
        document.getElementById('editName').value = document.getElementById('parentName').textContent;
        document.getElementById('editEmail').value = document.getElementById('parentEmail').textContent;
        document.getElementById('editPhone').value = document.getElementById('parentPhone').textContent;
        document.getElementById('editLocation').value = document.getElementById('parentLocation').textContent;
        document.getElementById('editChildrenCount').value = document.getElementById('childrenCount').textContent;
        document.getElementById('editChildrenAges').value = document.getElementById('childrenAges').textContent;
        document.getElementById('editCareNeeds').value = Array.from(document.getElementById('careNeeds').children).map(li => li.textContent).join(', ');
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    }

    editProfileForm.onsubmit = function (e) {
        e.preventDefault();
        document.getElementById('parentName').textContent = document.getElementById('editName').value;
        document.getElementById('parentEmail').textContent = document.getElementById('editEmail').value;
        document.getElementById('parentPhone').textContent = document.getElementById('editPhone').value;
        document.getElementById('parentLocation').textContent = document.getElementById('editLocation').value;
        document.getElementById('childrenCount').textContent = document.getElementById('editChildrenCount').value;
        document.getElementById('childrenAges').textContent = document.getElementById('editChildrenAges').value;
        
        const careNeedsInput = document.getElementById('editCareNeeds').value;
        const careNeedsList = document.getElementById('careNeeds');
        careNeedsList.innerHTML = '';
        careNeedsInput.split(',').forEach(need => {
            const li = document.createElement('li');
            li.textContent = need.trim();
            careNeedsList.appendChild(li);
        });

        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }
});