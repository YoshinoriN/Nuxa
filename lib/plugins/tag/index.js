'use strict';

module.exports = ctx => {
  const { tag } = ctx.extend;

  const blockquote = require('./blockquote')(ctx);

  tag.register('quote', blockquote, true);
  tag.register('blockquote', blockquote, true);

  const code = require('./code')(ctx);

  tag.register('code', code, true);
  tag.register('codeblock', code, true);

  const img = require('./img')(ctx);

  tag.register('img', img);
  tag.register('image', img);

  const link = require('./link');

  tag.register('a', link);
  tag.register('link', link);
  tag.register('anchor', link);

  tag.register('post_path', require('./post_path')(ctx));
  tag.register('post_link', require('./post_link')(ctx));
};
