class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  extractors: [
	{
		extractor: TailwindExtractor,
		extensions: ['.html']
	}
  ],
  content: [
    "./mumbaihackathon_in/www/index.html",
    "./mumbaihackathon_in/www/rules.html"
  ],
  css: ["./mumbaihackathon_in/www/css/hack.css"]
};

// purgecss -c ./purgecss.config.js --out ./mumbaihackathon_in/www/css/build/
