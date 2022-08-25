export default {
    frontent_url: `${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_DOMAIN}${(process.env.PRODUCTION) ? '' : process.env.VUE_APP_PORT}`,
    backend_url: `${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_DOMAIN}${(process.env.PRODUCTION) ? '' : process.env.VUE_APP_PORT}`,
    apiUrl: this.backend_url + `/api`
}