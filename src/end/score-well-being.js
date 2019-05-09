function scoreWellBeing(user) {
    if(user.wellBeing <= 0 ) {
        return 'dead';
    } else if(user.wellBeing < 50) {
        return 'sick';
    } else {
        return 'healthy';
    }
}

export default scoreWellBeing;