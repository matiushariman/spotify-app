import { handleApiError } from '../apiUtils';

const mockAlert = jest.fn();

jest.spyOn(window, 'alert').mockImplementation(mockAlert);

describe('utils/apiUtils', () => {
  describe('handleApiError()', () => {
    it('should alert the user if API status is 401', () => {
      handleApiError({ error: { status: 401, message: 'Token expired' } });

      expect(mockAlert).toHaveBeenCalled();
    });
  });
});
