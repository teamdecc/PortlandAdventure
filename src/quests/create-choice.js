function createChoiceHtml(choice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.textContent = choice.description;
    label.setAttribute('for', choice.id);

    input.type = 'radio';
    input.classList.add('choice');
    input.name = 'choice';
    input.id = choice.id;
    input.value = choice.id;
    input.textContent = choice.description;

    div.appendChild(label);
    div.appendChild(input);
    return div;
}

export default createChoiceHtml;