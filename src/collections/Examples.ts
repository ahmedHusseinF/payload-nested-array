import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  fields: [
    {
      label: 'Tabs',
      type: 'tabs',
      tabs: [
        {
          name: 'tab1',
          label: 'Tab 1',
          fields: [
            {
              name: 'array',
              type: 'array',
              validate: (value) => {
                console.log({ arr: value });
                if (!Array.isArray(value)) return 'Is not an array';
                return true;
              },
              fields: [
                {
                  name: 'select',
                  type: 'select',
                  validate: (value) => {
                    console.log({ select: value });
                    return true;
                  },
                  options: [
                    { label: 'A', value: 'a' },
                    { label: 'B', value: 'b' },
                    { label: 'C', value: 'c' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Examples;
