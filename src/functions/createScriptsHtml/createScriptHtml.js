export const createScriptHtml = ({ path, document, async = true, defer = true }) => {
    const script = document.createElement('script');
    script.src = path;
    script.async = async;
    script.defer = defer;
    script.type = 'text/javascript';
    document.body.appendChild(script);
};
