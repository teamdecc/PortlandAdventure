function scoreChoice(user, choice, quest){
    user.localCred += choice.LC;
    user.wellBeing += choice.WB;
    user.completed[quest.id] = true;
    return user;
}

export default scoreChoice;