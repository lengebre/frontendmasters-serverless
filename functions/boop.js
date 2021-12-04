exports.handler = async (event, context) => {
    console.log('Remaining time: ', context.getRemainingTimeInMillis())
    console.log('Function name: ', context.functionName)
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    return{
        statusCode: 200,
        body:JSON.stringify({
            message: 'Lilly is a boop',
            input: event,
            event_context: context
        })
    }
}