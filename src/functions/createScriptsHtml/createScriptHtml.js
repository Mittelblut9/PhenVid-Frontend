export class CreateScriptHtml {
  constructor({path, document, async = false, defer = false}) {
    let script = document.createElement('script');
    script.src = path;
    script.async = async;
    script.defer = defer;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
}