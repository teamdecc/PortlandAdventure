const foodCart = {
    id: 'foodCart',
    title: 'Food Truck Adventure!',
    image: 'foodcart.jpeg',
    description: 'You head to a food cart pod that you saw in travel magazine. You hope that no one knows its there and that the lines are short. What do you order?',
    choices: [{
        id: 'cheeseburger',
        description: 'You order something familiar! A good ol cheeseburger.',
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

const gorge = {
    id: 'gorge',
    title: 'The Gorge Adventure!',
    image: 'gorge.jpeg',
    description: 'You decide to visit the great outdoors. What do you do first?',
    choices: [{
        id: 'multnomah',
        description: 'You go take a hike to the great grand Multnomah Falls.',
        result: `
        You get there. You are gently refreshed. Good job. Your Local Cred gains a point but you haven't changed as a person much, so no Well Being for you.
        `,
        LC: 1, 
        WB: 0
    }, {
        id: 'party',
        description: 'You head to a party in Hood River, you heathen you.',
        result: `You partied too hard. Local Cred jumps 20 points and Well Being is depleated 50 points. Enjoy that crappy hangover.
        `,
        LC: 20, 
        WB: -50
    }, {
        id: 'camping',
        description: 'You grab a tent and head for the woods. Camping!',
        result: `You have an excellent time. You meet Bear Grylls in the middle of nowhere, and he invites you to dinner. Your Local Cred only goes up by 5 because nobody believes you, but your Well Being jumps 50 points.
        `,
        LC: 5, 
        WB: 50
    }]
};

const sauvie = {
    id: 'sauvie',
    title: 'Sauvie Island Adventure',
    image: 'sauvie.jpeg',
    description: 'You hear this island is delightful, so you head on over. There are a variety of things you can go experience, what do you choose to do?',
    choices: [{
        id: 'farm',
        description: 'You love fresh fruit! You head to U-Pick berry farm.',
        result: `Half way through your berry picking you get stung by a gosh darn bee. You lose 10 Well Being and you gain 10 Local Cred for moving on.
        `,
        LC: 10, 
        WB: -10
    }, {
        id: 'wine',
        description: 'You go wine tasting, you fancy person.',
        result: `You don't even like wine. So it's not a surprise you get a hangover immediately. What WERE you thinking. You lose 5 Well Being and gain no Local Cred.
        `,
        LC: 20, 
        WB: 10
    }, {
        id: 'beach',
        description: 'You take a reccomendation, and head to the beach.',
        result: `You should have come up with your own decision. People now think you are lame for not disrobing on what is clearly a nude beach so you give in. You see your parents, what were you doing listening to your friends. You lose 20 Well Being for going insane, and you gain 20 Local Cred for the crowds.
        `,
        LC: 20, 
        WB: -20
    }]
};
const quests = [foodCart, gorge, sauvie];