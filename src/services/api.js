import quests from './quest-data.js';

const api = {
    // Sets storage of where we will be putting the object
    storage: localStorage,

    //Converts object to stringified JSON and stores it
    signUp(portlander) {
        const json = JSON.stringify(portlander);
        api.storage.setItem('portlander', json);
    },

    //Returns the object after it is parsed
    getPortlander() {
        const json = api.storage.getItem('portlander');
        const portlander = JSON.parse(json);
        return portlander;
    },
    getQuests() {
        return quests;
    }
};

export default api;