function scorelocalCred(user) {
    if(user.localCred <= 0) {
        return 'broke';
    } else if(user.localCred < 50) {
        return 'poor';
    } else {
        return 'rich';
    }
}

export default scorelocalCred;