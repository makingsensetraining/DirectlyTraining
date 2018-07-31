import { translate } from './i18nService';

describe('i18n Service', () => {

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call translate function from i18n', () => {
    // Arrange
    const spy = jest.spyOn(window.i18n, 't');
    // Act
    translate('KEY');

    // Assert
    expect(window.i18n).toBeDefined();
    expect(window.i18n.t).toHaveBeenCalledTimes(1);
  });

  it('should call translate function from i18n with options', () => {
    // Arrange
    const spy = jest.spyOn(window.i18n, 't');
    // ACT
    translate('KEY', {});

    // Assert
    expect(window.i18n).toBeDefined();
    expect(window.i18n.t).toHaveBeenCalledTimes(1);
  });
});
