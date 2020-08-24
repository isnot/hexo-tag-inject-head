hexo.extend.tag.register('injecthead', (args, content) => {
  const to = Array.isArray(args) ? args[0] : 'default';
  if (Object.prototype.hasOwnProperty.call(hexo.extend, 'injector')) {
    hexo.extend.injector.register('head_end', content, to);
  }
  // console.debug(['InjectHead ', args, content.length]);
  return '<!-- InjectHead -->';
}, {
  ends: true
});
