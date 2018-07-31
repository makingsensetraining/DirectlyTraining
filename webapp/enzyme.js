import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.errorService = {
  logErrors: () => {}
};

global.i18nService = {
  translate: (key) => {
    return key;
  }
};
