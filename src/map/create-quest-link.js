function createQuestLink(quest) {
    //creates empty anchor element
    const anchor = document.createElement('a');
    //adds class to empty anchor element
    anchor.classList.add('quest');
    //adds inner text to anchor element
    anchor.textContent = quest.title;
    //creates new searchParams
    const searchParams = new URLSearchParams();
    //sets the search 
    searchParams.set('id', quest.id);
    anchor.href = 'quest.html?' + searchParams.toString();

    return anchor;
}

export default createQuestLink;