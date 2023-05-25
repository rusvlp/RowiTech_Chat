const ProcessMode = process.env.REACT_APP_CI_COMMIT_REF_NAME || '';

function getDefaultPath(ModeEnvironment: string) {
  switch (ModeEnvironment) {
    case 'main':
      return process.env.REACT_APP_PROD;
    case 'test':
      return process.env.REACT_APP_TEST;
    case 'dev':
      return process.env.REACT_APP_DEV;
    default:
      return '';
  }
}

export const _baseURL = getDefaultPath(ProcessMode);
