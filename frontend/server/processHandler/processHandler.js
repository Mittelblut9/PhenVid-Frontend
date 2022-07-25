module.exports.processHandler = () => {
    process.on('uncaughtException', function (e) {
        console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
        process.exit(1);
    })

    process.on('unhandledRejection', function (e) {
        console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
        process.exit(1);
    })
}