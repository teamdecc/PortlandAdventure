const foodCart = {
    id: 'foodCart',
    title: 'You visit a local food cart pod!',
    image: 'foodcart.jpeg',
    description: 'You head to a food cart pod that you saw in travel magazine. You hope that no one knows its there and that the lines are short.',
    choices: [{
        id: 'cheeseburger',
        description: 'You order something familiar! A good ol cheeseburger',
        result: `
        You went with something you knew, but got a new stomach bug instead! Food poisoning! You lose 90 points of Well Being, but since your choice was admirable you gain 5 Local Cred points.
        `,
        LC: 5, 
        WB: -90
    }, {
        id: 'sushi',
        description: 'You feel adventurous! You order a new type of sushi.',
        result: `Your adventure pays off. Your friends see you eating something cool, and the seared salmon warms your belly. You gain 20 Local Cred, and 10 Well Being.
        `,
        LC: 20, 
        WB: 10
    }, {
        id: 'wrap',
        description: 'You take a reccomendation, and order a new type of wrap.',
        result: `You should have come up with your own decision. People now think you are boring. 0 Well Being, and you lose 5 Local Cred.
        `,
        LC: -5, 
        WB: 0
    }]
};