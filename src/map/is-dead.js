function isDead(user) {
    if(user.wellBeing <= 0) {
        return true;
    }
    return false;
}

export default isDead;