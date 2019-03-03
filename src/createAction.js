function pushArgsToAction(action, argNames, args) {
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
    })

    return action
}

export function createAction (type, ...argNames) {
    let payloadCreator

    if (typeof argNames[0] === 'function') {
        payloadCreator = argNames[0]
    }

    function actionCreator(...args) {
        if (payloadCreator) {
            return {
                type,
                ...payloadCreator(...args),
            }
        }

        if (args.length < argNames.length) {
            let message

            if (process.env.NODE_ENV !== 'production') {
                message =
                    'Trying to create an action ' +
                    'with invalid number of parameters. ' +
                    `Expected: ${argNames.length} for ${JSON.stringify(argNames)}, ` +
                    `received ${args.length} for ${JSON.stringify(args)}. ` +
                    `Action type = ${type}`
            }

            throw new Error(message)
        }

        return pushArgsToAction({type}, argNames, args)
    }

    actionCreator.toString = () => type

    return actionCreator
}
