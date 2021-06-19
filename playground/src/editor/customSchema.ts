export const customSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'JSON Schema for Hadolint, a Dockerfile linter tool',
  description: 'Dockerfile linter, validate inline bash, written in Haskell',
  type: 'object',
  additionalProperties: false,
  properties: {
    ignored: {
      type: 'array',
      description: 'A list of rules to be ignored',
      items: {
        type: 'string',
        oneOf: [
          {
            const: 'DL3000',
            description: 'Use absolute WORKDIR.',
          },
          {
            const: 'DL3001',
            description:
              'For some bash commands it makes no sense running them in a Docker container like ssh, vim, shutdown, service, ps, free, top, kill, mount, ifconfig.',
          },
          {
            const: 'DL3002',
            description: 'Last user should not be root.',
          },
          {
            const: 'DL3003',
            description: 'Use WORKDIR to switch to a directory.',
          },
          {
            const: 'DL3004',
            description:
              'Do not use sudo as it leads to unpredictable behavior. Use a tool like gosu to enforce root.',
          },
          {
            const: 'DL3005',
            description: 'Do not use apt-get upgrade or dist-upgrade.',
          },
        ],
        title: 'Rule',
      },
    },
    trustedRegistries: {
      type: 'array',
      description: 'A list of trusted registries. Ex: docker.io',
      items: {
        type: 'string',
      },
    },
  },
};
