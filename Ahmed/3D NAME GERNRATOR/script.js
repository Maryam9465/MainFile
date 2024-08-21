const nameInput = document.getElementById('nameInput');
        const styleSelect = document.getElementById('styleSelect');
        const nameDisplay = document.getElementById('nameDisplay');

        nameInput.addEventListener('input', updateName);
        styleSelect.addEventListener('change', updateName);

        function updateName() {
            const name = nameInput.value;
            const selectedStyle = styleSelect.value;

            nameDisplay.textContent = name || "Your Name in 3D";
            nameDisplay.className = selectedStyle;
        }