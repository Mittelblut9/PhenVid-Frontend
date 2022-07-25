module.exports = ({app}) => {
    for(let i in app.settings.config.routes) {
        let name = app.settings.config.routes[i].name;
        require(`./sideroute/${name}/${name}-route`)({app});
    }
}