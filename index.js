hexo.extend.tag.register('injecthead', (args, content) => {
  const to = args.length > 0 ? args[0] : 'default';
  if (Object.prototype.hasOwnProperty.call(hexo.extend, 'injector')) {
    hexo.extend.injector.register('head_end', content, to);
  }
  return '<!-- InjectHead -->';
}, {
  ends: true,
  async: true
});
