exports.handler = async (event, context) => {
    console.log(`This is the event ${event}`)
    console.log(`This is the context ${context}`)

    return{
        statusCode: 200,
        body:JSON.stringify({
            message: 'Lilly is a boop',
            input: "What does a boop mean?"
        })
    }
}