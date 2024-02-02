export const messages = [
    {
        text: 'replying to my own shit',
        date: '15:34',
        myMessage: true,
        reply: {
            message: 'yo biebz',
            sender: 'Test Dude'
        }
    },
    {
        text: 'BIEEEBZ',
        date: '15:34',
        myMessage: true,
        reply: null
    },
    {
        text: 'Herro',
        date: '15:37',
        myMessage: false,
        reply: null
    },
    {
        text: "replying to 'Herro'",
        date: '15:37',
        myMessage: true,
        reply: {
            message: 'Herro',
            sender: 'Justin Bieber'
        }
    },
    {
        text: 'looool',
        date: '15:44',
        myMessage: true,
        reply: {
            message: 'Herro',
            sender: 'Justin Bieber'
        }
    },
]

export const routeProps = {
    params: {
        name: 'Justin Bieber'
    }
}