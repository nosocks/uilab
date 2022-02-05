export default {
  plain: {
    color: '#334155',
    backgroundColor: '#F3F4F6',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#FCA5A5',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#334155',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#FBBF24',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#C4B5FD',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#EF4444',
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#A855F7',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#6366F1',
      },
    },
  ],
}
