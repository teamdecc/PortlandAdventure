function makePortlander(formData) {
    const portlander = {
        name: formData.get('name'),
        portlander: formData.get('portlander'),
        wellBeing: '100',
        localCred: '0'
    };
    return portlander;
}

export default makePortlander;